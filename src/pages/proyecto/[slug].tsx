import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, memo } from 'react';
import Page from '../../components/Layout/Page';
import Footer from '../../components/Sections/Footer';
import backgroundImage from '../../images/header-background.webp';
import ReactMarkdown from 'react-markdown'; // Importa react-markdown
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Header = dynamic(() => import('../../components/Sections/Header'), { ssr: false });

const ProjectPage: FC<{ project: any }> = memo(({ project }) => {
  const {
    title = 'Proyecto sin título',
    image = '/images/default-project.jpg',
    porcentaje = 0,
    description = '',
    descriptionlinea2 = '',
    descriptionlinea3 = '',
    gallery = [],
    otros = [],
    miembrosAsociados = [],
  } = project;

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
          {/* Contenedor del botón Volver con margen adecuado */}
          <div className="w-full flex justify-end mb-8">
            <button
              className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              onClick={() => window.history.back()}
            >
              Volver
            </button>
          </div>

          {/* Información general del proyecto */}
          <h3 className="text-4xl font-bold text-blue-700 mb-8 tracking-wide hover:underline hover:text-blue-500 transition duration-300">
            {title}
          </h3>
          <p className="text-gray-700 text-center text-lg mb-4 italic">{description}</p>
          {descriptionlinea2 && (
            <div className="prose text-gray-700 text-center text-lg mb-4">
              <ReactMarkdown>{descriptionlinea2}</ReactMarkdown>
            </div>
          )}
          {descriptionlinea3 && (
            <div className="prose text-gray-700 text-center text-lg mb-4">
              <ReactMarkdown>{descriptionlinea3}</ReactMarkdown>
            </div>
          )}

          {/* Imagen del Proyecto */}
          <div className="relative w-full h-60 overflow-hidden mb-6 border-4 border-blue-600 shadow-lg rounded-lg">
            <Image alt={title} className="object-cover w-full h-full" src={image} />
          </div>
          
          {/* Progreso del proyecto */}
          <div className="w-full mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Progreso:</span>
              <span className="font-semibold text-blue-700">{porcentaje}%</span>
            </div>
            <div className="bg-gray-300 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: `${porcentaje}%` }}
              />
            </div>
          </div>

          {/* Lista de miembros asociados */}
          {miembrosAsociados.length > 0 && (
            <div className="w-full mt-6">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Lista de Miembros Asociados</h4>
              <ul className="list-none pl-0">
                {miembrosAsociados.map((miembro: { nombremiembro: string, url: string }, index: number) => (
                  <li key={index} className="text-blue-700 hover:text-blue-500 transition duration-300">
                    <a href={miembro.url} className="hover:underline">{miembro.nombremiembro}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Galería de imágenes */}
          {gallery.length > 0 && (
            <div className="gallery-container flex justify-center gap-4 my-6">
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

          {/* Otros datos */}
          {otros.length > 0 && (
            <div className="text-gray-600 mt-6">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Otros detalles</h4>
              <ul className="list-disc pl-6">
                {otros.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export async function getStaticPaths() {
  const projectsDirectory = path.join(process.cwd(), 'src/pages/proyecto');
  const filenames = fs.readdirSync(projectsDirectory).filter((filename) => filename.endsWith('.md'));

  const paths = filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      params: { slug: data.shortTitle || filename.replace(/\.md$/, '') },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const projectsDirectory = path.join(process.cwd(), 'src/pages/proyecto');
  const filenames = fs.readdirSync(projectsDirectory);

  const fileName = filenames.find((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return data.shortTitle === slug || filename.replace(/\.md$/, '') === slug;
  });

  if (!fileName) {
    return { notFound: true };
  }

  const filePath = path.join(projectsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return {
    props: {
      project: {
        title: data.title || 'Sin título',
        shortTitle: data.shortTitle || 'sin-titulo',
        image: data.image || '/images/default-project.jpg',
        porcentaje: data.porcentaje || '0',
        description: data.description || '',
        descriptionlinea2: data.descriptionlinea2 || '',
        descriptionlinea3: data.descriptionlinea3 || '',
        gallery: data.gallery || [],
        otros: data.otros || [],
        miembrosAsociados: data.miembroasociado || [], // Incluyendo los miembros asociados
      },
    },
  };
}

export default ProjectPage;
