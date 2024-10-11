import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import { homePageMeta } from '../data/data';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Componente para cada sección
const MissionSection: FC = () => (
  <section className="p-6 bg-white rounded-lg shadow-md mb-10">
    <h2 className="text-2xl font-bold text-blue-700 mb-4">Nuestra Misión</h2>
    <p className="text-gray-700">
      En el Laboratorio de Bioingeniería, nos dedicamos a la investigación y desarrollo de soluciones innovadoras
      para los desafíos en la biomedicina y la biotecnología. Nuestro objetivo es mejorar la salud humana y
      el bienestar a través de la ciencia.
    </p>
  </section>
);

const ResearchSection: FC = () => (
  <section className="p-6 bg-white rounded-lg shadow-md mb-10">
    <h2 className="text-2xl font-bold text-green-700 mb-4">Investigaciones</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Desarrollo de nuevos biomateriales para la regeneración de tejidos.</li>
      <li>Estudio de sistemas de entrega de fármacos.</li>
      <li>Investigación en ingeniería genética y biología sintética.</li>
    </ul>
  </section>
);

const TeamSection: FC = () => (
  <section className="p-6 bg-white rounded-lg shadow-md mb-10">
    <h2 className="text-2xl font-bold text-yellow-700 mb-4">Miembros del Equipo</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="p-4 bg-gray-50 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800">Dr. Juan Pérez</h3>
        <p className="text-gray-600">Investigador principal en biotecnología.</p>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800">Dra. María López</h3>
        <p className="text-gray-600">Experta en biomateriales y regeneración de tejidos.</p>
      </div>
      {/* Agrega más miembros según sea necesario */}
    </div>
  </section>
);

const PublicationsSection: FC = () => (
  <section className="p-6 bg-white rounded-lg shadow-md mb-10">
    <h2 className="text-2xl font-bold text-purple-700 mb-4">Publicaciones Recientes</h2>
    <ul className="text-gray-700">
      <li>
        <a href="/publications/paper1" className="text-blue-500 hover:underline">Título del Paper 1</a> - Descripción breve.
      </li>
      <li>
        <a href="/publications/paper2" className="text-blue-500 hover:underline">Título del Paper 2</a> - Descripción breve.
      </li>
      {/* Agrega más publicaciones según sea necesario */}
    </ul>
  </section>
);

const NewsSection: FC = () => (
  <section className="p-6 bg-white rounded-lg shadow-md mb-10">
    <h2 className="text-2xl font-bold text-red-700 mb-4">Noticias</h2>
    <p className="text-gray-700">No te pierdas las últimas novedades del laboratorio y eventos próximos.</p>
    <ul className="list-disc list-inside text-gray-700">
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
      <main
        className="max-w-7xl mx-auto p-4 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/images/header-background.webp')" }} // Cambia la ruta según sea necesario
      >
        <MissionSection />
        <ResearchSection />
        <TeamSection />
        <PublicationsSection />
        <NewsSection />
      </main>
      <Footer />
    </Page>
  );
});

export default Home;


