import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import backgroundImage from '../images/header-background.webp';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const CMSPage: FC<{ post: any }> = memo(({ post }) => {
  const { title, date, body, featuredImage } = post;

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
            onClick={() => window.history.back()}>
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
          <div className="text-gray-600 text-sm text-justify leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'src/pages/miembros');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { revo: filename.replace(/\.md$/, '') }, // Cambié 'slug2' a 'revo'
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { revo: string } }) {  // Cambié 'slug2' a 'revo'
  const { revo } = params;
  const filePath = path.join(process.cwd(), 'src/pages/miembros', `${revo}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // Asegúrate de convertir la fecha a una cadena
  const postDate = new Date(data.date).toISOString(); // O el formato que prefieras

  return {
    props: {
      post: {
        title: data.title,
        date: postDate,
        body: content,
        featuredImage: data.featuredImage || '/default-image.jpg',
      },
    },
  };
}

export default CMSPage;