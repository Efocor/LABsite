import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import { homePageMeta } from '../data/data';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Componente para cada sección
const MissionSection: FC = () => (
  <section className="p-6 bg-black bg-opacity-60 rounded-lg shadow-lg mb-10 backdrop-blur-md">
    <h2 className="text-2xl font-bold text-white mb-4">A nivel de desarrollo</h2>
    <p className="text-gray-300">
      En el Laboratorio de Bioingeniería, nuestro objetivo es desarrollar herramientas informáticas avanzadas
      que faciliten la investigación en biomedicina y biotecnología. Nos enfocamos en mejorar la salud humana
      a través de la ciencia y la tecnología, ofreciendo soluciones innovadoras para el análisis de datos biomédicos.
    </p>
  </section>
);

const ToolsSection: FC = () => (
  <section className="p-6 bg-black bg-opacity-60 rounded-lg shadow-lg mb-10 backdrop-blur-md">
    <h2 className="text-2xl font-bold text-white mb-4">Herramientas de Análisis</h2>
    <ul className="list-disc list-inside text-gray-300">
      <li>
        <strong>Análisis de Secuencias Genómicas:</strong> Desarrollo de software para el análisis de datos
        genómicos, incluyendo alineamiento de secuencias y variantes genéticas.
      </li>
      <li>
        <strong>Algoritmos de Predicción:</strong> Implementación de algoritmos de aprendizaje automático
        para la predicción de resultados en estudios clínicos.
      </li>
      <li>
        <strong>Estudios de Cáncer:</strong> Herramientas para el análisis de muestras biológicas
        y la identificación de marcadores genéticos relacionados con el cáncer.
      </li>
    </ul>
  </section>
);

const ProgramsSection: FC = () => (
  <section className="p-6 bg-black bg-opacity-60 rounded-lg shadow-lg mb-10 backdrop-blur-md">
    <h2 className="text-2xl font-bold text-white mb-4">Programas y Proyectos</h2>
    <p className="text-gray-300 mb-4">
      Actualmente estamos trabajando en un programa innovador para el análisis de muestras biológicas,
      que integra algoritmos avanzados de análisis de datos con interfaces de usuario intuitivas.
    </p>
    <ul className="list-disc list-inside text-gray-300">
      <li>
        <strong>Software de Implementación:</strong> Herramientas desarrolladas para facilitar el
        despliegue de modelos de análisis en entornos clínicos.
      </li>
      <li>
        <strong>Colaboraciones en Investigación:</strong> Proyectos conjuntos con instituciones académicas
        para el desarrollo de software personalizado en estudios de salud.
      </li>
    </ul>
  </section>
);

const TeamSection: FC = () => (
  <section className="p-6 bg-black bg-opacity-60 rounded-lg shadow-lg mb-10 backdrop-blur-md">
    <h2 className="text-2xl font-bold text-white mb-4">Miembros del Equipo</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="p-4 bg-gray-800 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-white">Dr. Juan Pérez</h3>
        <p className="text-gray-400">Investigador principal en bioinformática y análisis de datos.</p>
      </div>
      <div className="p-4 bg-gray-800 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-white">Dra. María López</h3>
        <p className="text-gray-400">Experta en algoritmos y modelado de datos biomédicos.</p>
      </div>
      {/* Agrega más miembros según sea necesario */}
    </div>
  </section>
);

const PublicationsSection: FC = () => (
  <section className="p-6 bg-black bg-opacity-60 rounded-lg shadow-lg mb-10 backdrop-blur-md">
    <h2 className="text-2xl font-bold text-white mb-4">Publicaciones Recientes</h2>
    <ul className="text-gray-300">
      <li>
        <a href="/publications/paper1" className="text-blue-400 hover:underline">Título del Paper 1</a> - Descripción breve sobre el análisis de secuencias.
      </li>
      <li>
        <a href="/publications/paper2" className="text-blue-400 hover:underline">Título del Paper 2</a> - Estudio sobre la implementación de algoritmos en la biomedicina.
      </li>
      {/* Agrega más publicaciones según sea necesario */}
    </ul>
  </section>
);

const NewsSection: FC = () => (
  <section className="p-6 bg-black bg-opacity-60 rounded-lg shadow-lg mb-10 backdrop-blur-md">
    <h2 className="text-2xl font-bold text-white mb-4">Noticias</h2>
    <p className="text-gray-300">No te pierdas las últimas novedades del laboratorio y eventos próximos.</p>
    <ul className="list-disc list-inside text-gray-300">
      <li>Evento sobre Bioingeniería el 20 de octubre.</li>
      <li>Publicación de nuevo artículo en la revista científica el 15 de noviembre.</li>
      {/* Agrega más noticias según sea necesario */}
    </ul>
  </section>
);

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;

  return (
    <Page description={description} title={title}>
      <Header />
      <main className="bg-white min-h-screen flex flex-col items-center">
        <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg mb-10 mt-16">
          <h1 className="text-4xl font-bold text-center text-blue-700">Bienvenidos al Laboratorio de Bioingeniería</h1>
          <p className="text-gray-600 text-center mt-4">
            Innovando en el campo de la biomedicina y la biotecnología.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full pt-20">
          <MissionSection />
          <ToolsSection />
          <ProgramsSection />
          <TeamSection />
          <PublicationsSection />
          <NewsSection />
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default Home;
