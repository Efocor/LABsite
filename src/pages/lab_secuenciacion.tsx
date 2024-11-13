import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import { homePageMeta } from '../data/data';
import labImage from '../images/SoftwareItems/lab1.jpg'; // Asegúrate de tener una imagen llamada lab1.jpg en tu carpeta de imágenes
import secuenciacionBackground from '../images/header-background.webp'; // Imagen de fondo

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Sección del laboratorio de secuenciación
const SequencingLabSection: FC = () => (
  <section className="p-6 bg-white rounded-lg shadow-lg mb-10 backdrop-blur-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Laboratorio de Secuenciación</h2>
    <p className="text-gray-700 mb-4">
      El laboratorio de secuenciación de nuestro centro se especializa en el análisis de datos genómicos de alta
      precisión. Utilizamos tecnologías de secuenciación de última generación para proporcionar soluciones avanzadas
      en genómica, que incluyen secuenciación de ADN, ARN, y metagenómica. El laboratorio cuenta con una infraestructura
      de computación avanzada para procesar grandes volúmenes de datos de manera eficiente.
    </p>
    <p className="text-gray-700 mb-4">
      Nuestro equipo de bioinformáticos altamente capacitados se encarga de realizar análisis complejos utilizando
      herramientas de software de vanguardia, lo que nos permite obtener resultados rápidos y precisos para investigaciones
      en genómica, salud, biotecnología y más.
    </p>
    <div className="mt-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Tecnologías Disponibles</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Secuenciación de ADN de próxima generación (NGS):</strong> Para análisis genómicos precisos y detallados.</li>
        <li><strong>Secuenciación de ARN:</strong> Para estudios de expresión génica y transcriptómica.</li>
        <li><strong>Metagenómica:</strong> Para la identificación y análisis de comunidades microbianas.</li>
      </ul>
    </div>
    <div className="mt-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Infraestructura y Recursos</h3>
      <p className="text-gray-700">
        Nuestro laboratorio cuenta con una infraestructura de última generación, que incluye equipos de secuenciación
        de alta capacidad y servidores de alto rendimiento para procesar los datos generados. El análisis de datos es
        realizado mediante herramientas especializadas y pipelines de análisis bioinformático, diseñados para maximizar
        la precisión y reproducibilidad de los resultados.
      </p>
    </div>
    {/* Imagen centrada dentro del rectángulo blanco */}
    <div className="mt-8 flex justify-center">
      <Image src={labImage} alt="Imagen del laboratorio de secuenciación" className="rounded-lg max-w-full" />
    </div>
  </section>
);

// Componente principal de la página de laboratorio de secuenciación
const SequencingLabPage: FC = memo(() => {
  const { title, description } = homePageMeta;

  return (
    <Page description={description} title={title}>
      <Header />
      <main className="bg-gray-100 min-h-screen flex flex-col items-center">
        {/* Contenedor principal con fondo de imagen */}
        <div className="relative min-h-screen w-full flex justify-center items-center">
          {/* Imagen de fondo optimizada con Next.js */}
          <Image
            alt="Background image"
            className="absolute z-0 h-full w-full object-cover"
            placeholder="blur"
            priority
            src={secuenciacionBackground}
          />
          <div className="z-10 max-w-screen-lg px-4 lg:px-0">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Laboratorio de Secuenciación Genómica</h1>
            <div className="relative mb-10">
              {/* Rectángulo blanco sobre el fondo */}
              <div className="absolute inset-0 bg-white opacity-80 z-10"></div>
              <div className="relative z-20">
                <SequencingLabSection />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default SequencingLabPage;
