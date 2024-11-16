import dynamic from 'next/dynamic';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths } from 'next';
import Page from '../../components/Layout/Page';
import Footer from '../../components/Sections/Footer';
import backgroundImage from '../../images/header-background.webp';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Header = dynamic(() => import('../../components/Sections/Header'), { ssr: false });

interface Post {
  slug: string;
  title: string;
  date: string | null;
  featuredImage: string;
}

interface BlogPageProps {
  posts: Post[];
  totalPages: number;
  currentPage: number;
}

const POSTS_PER_PAGE = 6;

const BlogPage: FC<BlogPageProps> = ({ posts, totalPages, currentPage }) => {
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
        <div className="z-10 max-w-4xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center transition-shadow duration-300 hover:shadow-blue-500/50">
          <h1 className="text-4xl font-bold text-blue-700 mb-8">Noticias</h1>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm italic">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between mt-8">
            {currentPage > 1 && (
              <Link href={`/blog/page/${currentPage - 1}`} className="text-blue-600 hover:text-blue-500">
                Página Anterior
              </Link>
            )}
            {currentPage < totalPages && (
              <Link href={`/blog/page/${currentPage + 1}`} className="text-blue-600 hover:text-blue-500">
                Página Siguiente
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

  // Verifica si el directorio de publicaciones existe
  if (!fs.existsSync(postsDirectory)) {
    console.error('Directorio de publicaciones no encontrado:', postsDirectory);
    return { notFound: true }; // Si no existe, retorna una página 404
  }

  const filenames = fs.readdirSync(postsDirectory);
  const posts: Post[] = [];

  // Lee solo archivos .md
  for (const filename of filenames) {
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

  // Ordena los posts por fecha (descendente)
  posts.sort((a, b) => (b.date ? new Date(b.date).getTime() : 0) - (a.date ? new Date(a.date).getTime() : 0));

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPage = parseInt(params?.page as string, 10) || 1;

  // Pagina los posts según la página actual
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  return {
    props: {
      posts: paginatedPosts,
      totalPages,
      currentPage,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/pages/blog');
  const filenames = fs.readdirSync(postsDirectory);
  const posts: Post[] = [];

  // Lee solo archivos .md
  for (const filename of filenames) {
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

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false, // No permite rutas no pre-renderizadas
  };
};

export default BlogPage;