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
import ReactMarkdown from 'react-markdown'; // Para renderizar Markdown

const Header = dynamic(() => import('../../components/Sections/Header'), { ssr: false });

const CMSPage: FC<{ post: any }> = memo(({ post }) => {
  const { name, description, description2, photo, profileInfo, skills, socialLinks, gallery, featuredImage } = post;

  return (
    <Page description={name} title={name}>
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

          {/* Imagen de Miembro */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-600 shadow-lg">
            <Image alt={name} className="object-cover w-full h-full" src={photo} />
          </div>

          {/* Información general del miembro */}
          <h3 className="text-4xl font-bold text-blue-700 mb-2 tracking-wide hover:underline hover:text-blue-500 transition duration-300">
            {name}
          </h3>
          <ReactMarkdown className="text-gray-700 text-center text-lg mb-4 italic">
            {description}
          </ReactMarkdown>
          
          <ReactMarkdown className="text-gray-700 text-center text-lg mb-4 italic">
            {description2}
          </ReactMarkdown>

          {/* Información del perfil */}
          {profileInfo && (
            <div className="text-gray-600 text-sm leading-relaxed mb-6 space-y-4">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Acerca de {name}</h4>
              <ReactMarkdown>{profileInfo}</ReactMarkdown>
            </div>
          )}

          {/* Imagen destacada */}
          {featuredImage && (
            <Image
              src={featuredImage}
              alt={name}
              width={800}
              height={400}
              className="rounded-lg mb-6"
            />
          )}

          {/* Galería */}
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

          {/* Sección de habilidades */}
          <div className="w-full mb-6">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Habilidades</h4>
            <ul className="grid grid-cols-2 gap-4 text-gray-800 text-center">
              {skills && skills.length > 0 && skills.map((skill: string, index: number) => (
                <li key={index}>🔬 {skill}</li>
              ))}
            </ul>
          </div>

          {/* Enlaces sociales */}
          {socialLinks && socialLinks.length > 0 && (
            <div className="w-full mb-8">
              <h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
                ¡Conoce más sobre sus investigaciones, artículos y otros!
              </h4>
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
      </main>
      <Footer />
    </Page>
  );
});

// Código de generación de rutas y props (sin cambios)
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
        description2: data.description2 || 'Sin descripción',
        photo: data.photo || '/images/default-photo.jpg',
        link: data.link || '#',
        profileInfo: data.profileInfo || '',
        skills: data.skills || [],
        socialLinks: data.socialLinks || [],
        gallery: data.gallery || [],
        featuredImage: data.featuredImage || '',
      },
    },
  };
}

export default CMSPage;