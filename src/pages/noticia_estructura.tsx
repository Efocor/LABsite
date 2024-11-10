import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import backgroundImage from '../images/header-background.webp'; // Imagen de fondo
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Para procesar el front matter

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Componente principal para mostrar los datos del CMS
const CMSPage: FC<{ post: any }> = memo(({ post }) => {
  const { title, date, body, featuredImage } = post;

  return (
    <Page description={title} title={title}>
      <Header />
      <main className="bg-gray-900 min-h-screen flex flex-col items-center relative">
        {/* Imagen de fondo */}
        <Image
          alt="Background image"
          className="absolute z-0 h-full w-full object-cover opacity-80"
          placeholder="blur"
          priority
          src={backgroundImage}
        />

        {/* Contenido principal */}
        <div className="z-10 max-w-4xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center transition-shadow duration-300 hover:shadow-blue-500/50">
          {/* Botón de volver */}
          <button
            className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            onClick={() => window.history.back()} >
            Volver
          </button>

          {/* Título */}
          <h3 className="text-4xl font-bold text-blue-700 mb-2 tracking-wide hover:underline hover:text-blue-500 transition duration-300">
            {title}
          </h3>
          <p className="text-gray-700 text-center text-lg mb-4 italic">
            Publicado el: {new Date(date).toLocaleDateString()}
          </p>

          {/* Imagen destacada */}
          {featuredImage && (
            <Image
              src={featuredImage}
              alt={title}
              width={800}
              height={400}
              className="rounded-lg mb-6"
            />
          )}

          {/* Contenido del cuerpo */}
          <div className="text-gray-600 text-sm text-justify leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

// Función para obtener las rutas dinámicas
export async function getStaticPaths() {
  // Lee la carpeta con los archivos de los posts (Markdown)
  const postsDirectory = path.join(process.cwd(), 'src/pages/blog');
  const filenames = fs.readdirSync(postsDirectory);

  // Genera un array con las rutas dinámicas basadas en los nombres de los archivos
  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.md$/, ''), // Elimina la extensión .md
    },
  }));

  return {
    paths,
    fallback: false, // Puedes poner true o 'blocking' si no deseas que se muestre 404 en rutas no generadas
  };
}

// Función para obtener los datos de cada post dinámicamente
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/pages/blog', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    props: {
      post: {
        title: data.title,
        date: data.date,
        body: content,
        featuredImage: data.featuredImage || '/default-image.jpg', // Imagen por defecto si no hay
      },
    },
  };
}

export default CMSPage;
