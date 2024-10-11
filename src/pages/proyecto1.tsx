import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Image from 'next/image';
import testimonialImage from '../images/header-background.webp'; // Asegúrate de que esta imagen esté disponible

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const NewsDetail: FC<{ date: string; title: string; content: string }> = ({ date, title, content }) => (
  <article className="relative p-6 bg-white bg-opacity-90 shadow-lg rounded-lg mb-8">
    <button 
      onClick={() => window.history.back()} 
      className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
    >
      Volver
    </button>
    <h2 className="text-3xl font-bold text-blue-700 mb-2">{title}</h2>
    <p className="text-sm text-gray-500">{date}</p>
    <p className="text-lg text-gray-700 mt-4 mb-4">{content}</p>
  </article>
);

const Proyecto: FC = memo(() => {
  return (
    <Page title="Supercomputación para innovación en Salud Regional" description="Proyecto financiado por el Gobierno Regional, que busca implementar tecnología HPC avanzada en la Región de O’Higgins, para formar y capacitar estudiantes y profesionales en HPC.">
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
            src={testimonialImage}
          />
          <div className="z-10 max-w-screen-lg px-4 lg:px-0">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Supercomputación para innovación en Salud Regional</h1>

            <section className="space-y-8">
              {/* Detalle del proyecto */}
              <NewsDetail
                date="15 de octubre de 2024"
                title="Supercomputación para innovación en Salud Regional: HPC-UOH y HRLBO Juntos hacia la Medicina de Precisión"
                content={`El proyecto financiado por el Gobierno Regional tiene como objetivo implementar tecnología de supercomputación (HPC) avanzada en la Región de O’Higgins. Esta iniciativa busca transformar el paisaje de la salud regional a través de la creación de un entorno de aprendizaje y formación para estudiantes y profesionales en el uso de tecnologías de HPC. Al integrar la computación de alto rendimiento en la investigación médica y el análisis de datos clínicos, se espera que el proyecto potencie la capacidad de los investigadores locales para desarrollar soluciones innovadoras en medicina de precisión, mejorando así la calidad de vida de la población.

                La colaboración entre la Universidad de O’Higgins (HPC-UOH) y el Hospital Regional de Libertador Bernardo O'Higgins (HRLBO) es fundamental para el éxito de esta iniciativa. Juntos, desarrollarán programas de capacitación y formación que equipen a estudiantes y profesionales con las habilidades necesarias para utilizar tecnologías de HPC en la investigación médica. Este enfoque interdisciplinario no solo fortalecerá la infraestructura científica de la región, sino que también fomentará una cultura de innovación y colaboración en el ámbito de la salud. Además, se espera que esta inversión en tecnología genere oportunidades laborales para los jóvenes talentos de la región y contribuya al desarrollo sostenible de la comunidad.
                `}
              />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default Proyecto;
