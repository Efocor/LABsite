import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Image from 'next/image';
import testimonialImage from '../images/header-background.webp';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const AboutUs: FC = memo(() => {
  return (
    <Page title="Sobre Nosotros" description="Conoce más sobre nuestro equipo y misión.">
      <Header />
      <main className="bg-gray-20 min-h-screen flex flex-col items-center">
        {/* Contenedor principal con fondo de imagen */}
        <div className="relative min-h-screen w-full flex justify-center items-center">
          {/* Imagen de fondo optimizada con Next.js */}
          <Image
            alt="Background image"
            className="absolute z-0 h-full w-full object-cover"
            placeholder="blur"
            priority
            src={testimonialImage}
          />
          <div className="z-10 max-w-screen-lg px-4 lg:px-0">
            <h1 className="text-5xl font-bold text-center text-blue-900 mb-12">Acerca de Nosotros</h1>

            {/* Descripción General */}
            <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 mb-8">
              <h2 className="text-4xl font-semibold text-blue-700 mb-6">Laboratorio de Innovación y Desarrollo Científico</h2>
              <p className="text-gray-700 text-lg mb-4">
                El Laboratorio de Innovación y Desarrollo Científico se especializa en explorar nuevas fronteras tecnológicas y científicas, abordando desafíos complejos con un enfoque interdisciplinario. Nuestra misión es impulsar el progreso científico y tecnológico mediante la investigación de vanguardia y la formación de futuros líderes en ciencia.
              </p>
            </div>

              {/* Información básica */}
              <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 mb-8">
              <h2 className="text-4xl font-semibold text-blue-700 mb-6">Información Adicional</h2>
              <p className="text-gray-700 text-lg mb-4"><strong>Nacionalidad:</strong> Chilena</p>
              <p className="text-gray-700 text-lg mb-4"><strong>Intereses:</strong> Genómica, Reino Plantae, Cáncer, Software</p>
              <p className="text-gray-700 text-lg mb-4"><strong>Centro de Estudio:</strong> Universidad de O'Higgins</p>
              <p className="text-gray-700 text-lg mb-4"><strong>Integrantes:</strong> 10</p>
            </div>

            {/* Áreas de Investigación */}
            <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 mb-8">
              <h2 className="text-4xl font-semibold text-blue-700 mb-6">Áreas de Investigación</h2>
              <p className="text-gray-700 text-lg mb-4">
                Nos enfocamos en diversas áreas, incluyendo inteligencia artificial, biotecnología, y nanotecnología. A través de proyectos innovadores y colaboraciones con universidades y empresas, buscamos desarrollar soluciones que puedan transformar industrias y mejorar la calidad de vida.
              </p>
            </div>

            {/* Compromiso y Futuro */}
            <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 mb-8">
              <h2 className="text-4xl font-semibold text-blue-700 mb-6">Compromiso y Futuro</h2>
              <p className="text-gray-700 text-lg mb-4">
                Además de nuestra labor investigativa, nos dedicamos a la educación, ofreciendo programas que forman a jóvenes científicos. Nuestro compromiso es con la transferencia de conocimiento y tecnología que tenga un impacto positivo en la sociedad. Con una mirada al futuro, estamos enfocados en expandir nuestras capacidades y continuar liderando la innovación científica.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default AboutUs;
