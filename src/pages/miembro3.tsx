import dynamic from 'next/dynamic';
import Image from 'next/image';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import backgroundImage from '../images/header-background.webp'; // Imagen de fondo
import lauraImage from '../images/Laura.jpg'; // Imagen de Laura (ajusta la ruta según sea necesario)

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

// Componente de perfil para la Dra. Laura Cheng con más información y diseño futurista
const LauraProfile: FC = memo(() => {
  return (
    <Page
      description="Conoce más sobre la Dra. Laura Cheng, experta en biología, nanotecnología y ADN."
      title="Perfil de Dra. Laura Cheng">
      <Header />
      <main className="bg-gray-900 min-h-screen flex flex-col items-center relative">
        {/* Imagen de fondo futurista */}
        <Image
          alt="Background image"
          className="absolute z-0 h-full w-full object-cover opacity-80"
          placeholder="blur"
          priority
          src={backgroundImage}
        />

        {/* Tarjeta de Laura con estilo futurista y más información */}
        <div className="z-10 max-w-4xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center transition-shadow duration-300 hover:shadow-blue-500/50">
          {/* Botón de volver en la esquina superior derecha */}
          <button
            className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            onClick={() => window.history.back()}>
            Volver
          </button>

          {/* Imagen de Laura */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-600 shadow-lg">
            <Image alt="Dra. Laura Cheng" className="object-cover w-full h-full" src={lauraImage} />
          </div>

          {/* Información general de Laura */}
          <h3 className="text-4xl font-bold text-blue-700 mb-2 tracking-wide hover:underline hover:text-blue-500 transition duration-300">
            Dra. Laura Cheng
          </h3>
          <p className="text-gray-700 text-center text-lg mb-4 italic">Investigadora, Universidad de Chile</p>
          <p className="text-gray-700 text-center text-lg mb-4 italic">
            Doctora en Biología Molecular, Universidad de Harvard
          </p>
          <p className="text-gray-700 text-center text-lg mb-4">
            <strong>Localización:</strong> Santiago, Chile
          </p>

          {/* Información sobre la carrera de Laura */}
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            La Dra. Laura Cheng es experta en biología con un enfoque en nanotecnología y ADN. Ha liderado
            investigaciones innovadoras en el desarrollo de nanomateriales para aplicaciones biomédicas. Su pasión por
            la ciencia la ha llevado a realizar colaboraciones con instituciones de prestigio en todo el mundo.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            Actualmente, la Dra. Cheng investiga cómo los nanomateriales pueden ser utilizados para la entrega precisa
            de fármacos en el tratamiento de enfermedades genéticas. Su trabajo busca revolucionar el enfoque actual de
            la medicina personalizada y la terapia génica.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            Además, colabora con equipos interdisciplinarios para crear tecnologías de detección temprana de
            enfermedades utilizando técnicas avanzadas de biología molecular.
          </p>

          {/* Sección de habilidades */}
          <div className="w-full mb-6">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Habilidades</h4>
            <ul className="grid grid-cols-2 gap-4 text-gray-800 text-center">
              <li>🔬 Nanotecnología aplicada</li>
              <li>💻 Biología Molecular</li>
              <li>📊 Desarrollo de fármacos</li>
              <li>⚙️ Programación en Python y R</li>
              <li>🧬 Edición de ADN</li>
              <li>📈 Análisis de datos biológicos</li>
              <li>🔍 Detección temprana de enfermedades</li>
              <li>🌱 Investigación interdisciplinaria</li>
            </ul>
          </div>

          {/* Sección de publicaciones destacadas */}
          <div className="w-full mb-6">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Publicaciones Destacadas</h4>
            <ul className="text-gray-700 text-lg list-disc list-inside">
              <li>
                <strong>Nano-engineered delivery systems for targeted gene therapy</strong>
                <br />
                <em>REVISTA Advanced Drug Delivery Reviews, 2023</em>
                <br />
                Laura Cheng, Miguel Soto, Clara Ruiz
                <br />
                <a className="text-blue-600 hover:underline" href="http://dx.doi.org/10.1016/j.addr.2023.123456">
                  Ver más
                </a>
              </li>
              <li>
                <strong>Exploring the potential of nanomaterials in cancer therapy</strong>
                <br />
                <em>REVISTA Nature Reviews Cancer, 2023</em>
                <br />
                Laura Cheng, John Doe, Jane Smith
                <br />
                <a className="text-blue-600 hover:underline" href="http://dx.doi.org/10.1038/s41586-023-456789">
                  Ver más
                </a>
              </li>
              <li>
                <strong>Revolutionizing genetic therapies: The role of nanotechnology</strong>
                <br />
                <em>REVISTA Biotechnology Advances, 2023</em>
                <br />
                Laura Cheng, Robert Brown
                <br />
                <a className="text-blue-600 hover:underline" href="http://dx.doi.org/10.1016/j.biotechadv.2022.108963">
                  Ver más
                </a>
              </li>
              <li>
                <strong>Nanotechnology for the detection of genetic disorders</strong>
                <br />
                <em>REVISTA Journal of Nanobiotechnology, 2022</em>
                <br />
                Laura Cheng, [... ]
                <br />
                <a className="text-blue-600 hover:underline" href="#">
                  Ver más
                </a>{' '}
                {/* Enlace temporal */}
              </li>
            </ul>
          </div>

          {/* Enlaces a redes sociales */}
          <div className="w-full mb-6 flex justify-center space-x-4">
            <a
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
              href="https://www.linkedin.com/in/laura-cheng"
              rel="noopener noreferrer"
              target="_blank">
              LinkedIn
            </a>
            <a
              className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700 transition duration-300"
              href="https://github.com/lauracheng"
              rel="noopener noreferrer"
              target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default LauraProfile;
