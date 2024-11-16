import { FC } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Page from '../../components/Layout/Page';
import Footer from '../../components/Sections/Footer';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import backgroundImage from '../../images/header-background.webp';

const Header = dynamic(() => import('../../components/Sections/Header'), { ssr: false });

const IndexPage: FC<{ posts: any[] }> = ({ posts }) => {
  return (
    <Page description="Noticias" title="Noticias">
      <Header />
      <main className="bg-gray-900 min-h-screen flex flex-col items-center relative">
        <Image
          alt="Background image"
          className="absolute z-0 h-full w-full object-cover opacity-80"
          placeholder="blur"
          priority
          src={backgroundImage}
        />
        <div className="z-10 max-w-6xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center transition-shadow duration-300 hover:shadow-blue-500/50">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 tracking-wide">Últimas Noticias</h2>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.slug} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-blue-700 mb-2">{post.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} passHref>
                  <a className="text-blue-600 hover:text-blue-800 font-semibold">Leer más &rarr;</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'src/pages/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug: data.slug || filename.replace(/\.md$/, ''),
      title: data.title || 'Título no disponible',
      date: data.date,
      featuredImage: data.featuredImage || '/images/default-image.jpg',
      excerpt: content.slice(0, 150) + '...', // Un extracto del contenido
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default IndexPage;
