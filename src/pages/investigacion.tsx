import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Image from 'next/image';
import testimonialImage from '../images/header-background.webp';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Componente para la sección de investigaciones
const ResearchSection: FC = () => (
  <section className="p-6 bg-white rounded-lg shadow-lg mb-10">
    <h2 className="text-3xl font-bold text-green-800 mb-4">Investigaciones y Proyectos</h2>
    <p className="text-gray-700 mb-4">
      En el laboratorio de Bioinformática, estamos dedicados a avanzar en la ciencia a través de nuestras investigaciones y proyectos innovadores. A continuación, se detallan algunos de nuestros trabajos más destacados.
    </p>

    <h3 className="text-2xl font-semibold text-green-600 mb-2">Publicaciones Recientes</h3>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li><strong>Investigación en Genómica de Cáncer:</strong> Estudio sobre la detección de variantes somáticas utilizando tecnologías de secuenciación de nueva generación.</li>
      <li><strong>Análisis de Microbiomas:</strong> Un enfoque innovador para entender la relación entre microbiomas y enfermedades humanas.</li>
      <li><strong>Desarrollo de Algoritmos:</strong> Creación de algoritmos para el análisis de datos ómicos, mejorando la eficiencia y la precisión.</li>
    </ul>

    <h3 className="text-2xl font-semibold text-green-600 mb-2">Proyectos Destacados</h3>
    <p className="text-gray-700 mb-4">
      Estamos comprometidos con la investigación que impulsa el cambio y la innovación. Nuestros proyectos incluyen la colaboración con instituciones académicas y clínicas para llevar la investigación del laboratorio a la práctica.
    </p>
    
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li><strong>Proyecto 1:</strong> Análisis de datos de genómica de poblaciones para el desarrollo de tratamientos personalizados.</li>
      <li><strong>Proyecto 2:</strong> Investigación sobre la resistencia a medicamentos en células cancerosas y su impacto en tratamientos futuros.</li>
      <li><strong>Proyecto 3:</strong> Desarrollo de herramientas bioinformáticas para la detección temprana de enfermedades.</li>
    </ul>

    <h4 className="text-lg font-semibold text-gray-700 mb-1">Más Información</h4>
    <div className="mt-6">
      <a
        href="/research" // Enlace a la página de investigación o un documento adicional
        className="inline-block px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
      >
        Más Detalles sobre Nuestros Proyectos
      </a>
    </div>
  </section>
);

// Componente principal
const Research: FC = memo(() => {
  return (
    <Page title="Investigaciones" description="Conoce más sobre nuestros trabajos.">
      <Header />
      <main className="bg-gray-100 min-h-screen flex flex-col items-center">
        <div className="relative min-h-screen w-full flex justify-center items-center">
          <Image
            alt="Background image"
            className="absolute z-0 h-full w-full object-cover"
            placeholder="blur"
            priority
            src={testimonialImage}
          />
          <div className="z-10 max-w-screen-lg px-4 lg:px-0">
            <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Investigaciones en Bioinformática</h1>
            <ResearchSection />
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default Research;

