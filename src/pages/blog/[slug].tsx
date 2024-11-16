import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, memo } from 'react';
import Page from '../../components/Layout/Page';
import Footer from '../../components/Sections/Footer';
import backgroundImage from '../../images/header-background.webp';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Para mejor manejo de saltos de línea y listas

const Header = dynamic(() => import('../../components/Sections/Header'), { ssr: false });

const CMSPage: FC<{ post: any }> = memo(({ post }) => {
  const { title, date, body, featuredImage, gallery } = post;

  return (
    <Page description={title} title={title}>
      <Header />
      <main className="bg-gray-900 min-h-screen flex flex-col items-center relative">
        <Image
          alt="Background image"
          className="absolute z-0 h-full w-full object-cover opacity-80"
          placeholder="blur"
          priority
          src={backgroundImage}
        />
        <div className="z-10 max-w-4xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center transition-shadow duration-300 hover:shadow-blue-500/50">
          <button
            className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            onClick={() => window.history.back()}
          >
            Volver
          </button>
          <h3 className="text-4xl font-bold text-blue-700 mb-2 tracking-wide hover:underline hover:text-blue-500 transition duration-300">
            {title}
          </h3>
          <p className="text-gray-700 text-center text-lg mb-4 italic">
            Publicado el: {new Date(date).toLocaleDateString()}
          </p>
          {featuredImage && (
            <Image
              src={featuredImage}
              alt={title}
              width={800}
              height={400}
              className="rounded-lg mb-6"
            />
          )}

          {/* Mostrar la galería de imágenes horizontalmente */}
          {gallery && gallery.length > 0 && (
            <div className="gallery-container flex justify-center gap-4 mb-8">
              {gallery.map((photo: any, index: number) => (
                <div key={index} className="gallery-item">
                  <Image
                    src={photo.image}
                    alt={`Gallery image ${index + 1}`}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Usar ReactMarkdown con remarkGfm para renderizar el contenido markdown */}
          <div className="text-gray-600 text-sm text-justify leading-relaxed">
            <ReactMarkdown 
              children={body} 
              remarkPlugins={[remarkGfm]} // Esto habilita tablas, listas de tareas y otros elementos de Markdown
            />
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

  // Verifica que el directorio exista
  if (!fs.existsSync(postsDirectory)) {
    console.error("Directorio de publicaciones no encontrado:", postsDirectory);
    return { paths: [], fallback: false };
  }

  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);

    // Verifica si el archivo existe
    if (!fs.existsSync(filePath)) {
      console.error(`Archivo no encontrado: ${filePath}`);
      return null; // Retorna null si no se encuentra el archivo
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      params: { slug: data.slug || filename.replace(/\.md$/, '') }, // Usa el slug o el nombre del archivo
    };
  }).filter(Boolean); // Filtra valores null

  return {
    paths,
    fallback: false, // false para que no haya rutas dinámicas no encontradas
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/pages/blog', `${slug}.md`);

  // Verifica que el archivo existe
  if (!fs.existsSync(filePath)) {
    console.error(`Archivo no encontrado: ${filePath}`);
    return { notFound: true }; // Si no se encuentra el archivo, retorna notFound
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // No es necesario procesar el contenido markdown a HTML porque ReactMarkdown se encarga de ello
  const postDate = new Date(data.date).toISOString(); // O el formato que prefieras

  return {
    props: {
      post: {
        title: data.title || 'Título no disponible',
        date: postDate,
        body: content, // Aquí pasamos el contenido Markdown directamente
        featuredImage: data.featuredImage || '/images/default-image.jpg',
        gallery: data.gallery || [],
      },
    },
  };
}

export default CMSPage;