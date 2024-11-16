import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, memo } from 'react';
import Page from '../../components/Layout/Page';
import Footer from '../../components/Sections/Footer';
import backgroundImage from '../../images/header-background.webp';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const Header = dynamic(() => import('../../components/Sections/Header'), { ssr: false });

const MemberPage: FC<{ post: any }> = memo(({ post }) => {
  const { name, description, photo, socialLinks } = post;

  return (
    <Page description={name} title={name}>
      <Header />
      <main className="bg-gray-20 min-h-screen flex flex-col items-center">
        {/* Contenedor principal con fondo de imagen */}
        <div className="relative min-h-screen w-full flex justify-center items-center">
          <Image
            alt="Background image"
            className="absolute z-0 h-full w-full object-cover"
            placeholder="blur"
            priority
            src={backgroundImage}
          />
          <div className="z-10 max-w-screen-lg px-4 lg:px-0">
            <h1 className="text-5xl font-bold text-center text-blue-900 mb-12">{name}</h1>

            {/* Sección de información del miembro */}
            <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 mb-8">
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-blue-600 shadow-lg">
                  <Image alt={name} className="object-cover w-full h-full" src={photo} />
                </div>
                <h3 className="text-3xl font-semibold text-blue-700 mb-4">{name}</h3>
                <p className="text-center text-gray-700 text-lg mb-4 italic">{description}</p>
              </div>

              {/* Enlaces sociales */}
              {socialLinks && socialLinks.length > 0 && (
                <div className="w-full mb-8">
                  <div className="flex flex-wrap justify-center gap-4">
                    {socialLinks.map((link: { platform: string, url: string }, index: number) => (
                      <Link key={index} href={link.url} passHref>
                        <a
                          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.platform}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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

  const paths = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    const slug = data.slug || filename.replace(/\.md$/, '').toLowerCase();

    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/pages/miembros', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return {
      notFound: true,
    };
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return {
    props: {
      post: {
        name: data.name || 'Sin nombre',
        description: data.description || 'Sin descripción',
        photo: data.photo || '/images/default-photo.jpg',
        socialLinks: data.socialLinks || [],
      },
    },
  };
}

export default MemberPage;