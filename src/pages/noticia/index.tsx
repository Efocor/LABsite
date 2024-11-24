import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import Page from '../../components/Layout/Page';
import Footer from '../../components/Sections/Footer';
import backgroundImage from '../../images/header-background.webp';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../../components/Sections/Header'), { ssr: false });

interface Post {
  slug: string;
  title: string;
  date: string | null;
  featuredImage: string;
}

const BlogPage: FC<{ posts: Post[] }> = ({ posts }) => {
  // Estado para manejar la página actual
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calcular los posts a mostrar en la página actual
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Funciones para cambiar de página
  const nextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Page title="Blog" description="Últimas noticias y artículos">
      <Header />
      <main className="bg-gray-900 min-h-screen flex flex-col items-center relative">
        <Image
          alt="Background image"
          className="absolute z-0 h-full w-full object-cover opacity-80"
          placeholder="blur"
          priority
          src={backgroundImage}
        />
        <div className="z-10 max-w-4xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center transition-shadow duration-300 hover:shadow-blue-500/50 mb-20">
          <h1 className="text-4xl font-bold text-blue-700 mb-8">Noticias</h1>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <div key={post.slug} className="bg-white shadow-lg rounded-lg overflow-hidden">
                {post.featuredImage && (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-56"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-500">
                    <Link href={`/noticia/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm italic">{post.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          <div className="flex justify-between w-full mt-8">
            <button
              onClick={prevPage}
              className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <button
              onClick={nextPage}
              className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
              disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
            >
              Siguiente
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/pages/noticia');

  // Verifica si el directorio de publicaciones existe
  if (!fs.existsSync(postsDirectory)) {
    console.error('Directorio de publicaciones no encontrado:', postsDirectory);
    return { notFound: true }; // Si no existe, retorna una página 404
  }

  const filenames = fs.readdirSync(postsDirectory);
  const posts: Post[] = [];

  // Lee solo archivos .md
  for (const filename of filenames) {
    // Filtra archivos que no son .md (como los .tsx)
    if (filename.endsWith('.md')) {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      posts.push({
        slug: data.slug || filename.replace(/\.md$/, ''),
        title: data.title || 'Título no disponible',
        date: data.date ? new Date(data.date).toLocaleDateString() : null,
        featuredImage: data.featuredImage || '/images/default-image.jpg',
      });
    }
  }

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;