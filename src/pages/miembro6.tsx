import dynamic from 'next/dynamic';
import Image from 'next/image';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import backgroundImage from '../images/header-background.webp'; // Imagen de fondo
import FelipeImage from '../images/FELIPE GOMEZ.jpg'; // Imagen de Felipe

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});


const FelipeProfile: FC = memo(() => {
  return (
    <Page
      description="Conoce más sobre Felipe Gómez, Ingeniero Civil en Computación, Universidad O´Higgins"
      title="Perfil de Felipe Gómez">
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

       
        <div className="z-10 max-w-4xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center transition-shadow duration-300 hover:shadow-blue-500/50">
          {/* Botón de volver en la esquina superior derecha */}
          <button
            className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            onClick={() => window.history.back()}>
            Volver
          </button>

          {/* Imagen de Laura */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-600 shadow-lg">
            <Image alt="Felipe Gómez" className="object-cover w-full h-full" src={FelipeImage} />
          </div>

          {/* Información general de Laura */}
          <h3 className="text-4xl font-bold text-blue-700 mb-2 tracking-wide hover:underline hover:text-blue-500 transition duration-300">
            Felipe Gómez
          </h3>
          <p className="text-gray-700 text-center text-lg mb-4 italic">
          Ingeniero Civil en Computación, Universidad O´Higgins
          </p>
          <p className="text-gray-700 text-center text-lg mb-4">
            <strong>Localización:</strong> Rancagua, Chile
          </p>

          {/* Información sobre la carrera de Felipe*/}
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
          Ingeniero Civil en Computación titulado con distinción máxima por la Universidad de O'Higgins, especializado en machine learning y análisis de datos. Ha participado de manera periódica en el AGENs-Lab desde 2022, 
          primero como Asistente de Investigación y actualmente como Ingeniero de Proyecto. 
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
          Ha participado  en proyectos de ciencia computacional y como expositor en el Festival de la Ciencia 2023 y el Congreso Futuro 2024. Su línea de trabajo es la bioinformática,
           y utilizar herramientas de machine learning y programación para extraer valor de grandes volúmenes de datos relacionados a la genómica y el desarrollo de soluciones innovadoras.
          </p>


          {/* Sección de habilidades */}
          <div className="w-full mb-6">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Habilidades</h4>
            <ul className="grid grid-cols-2 gap-4 text-gray-800 text-center">
              <li>🔬 Machine Learning</li>
              <li>💻 Genómica</li>
              <li>📊 Soluciones Innovadoras</li>
              <li>⚙️ Habilidad 4 </li>
            </ul>
          </div>


          {/* Enlaces a redes sociales */}
          <div className="w-full mb-6 flex justify-center space-x-4">
          <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
              Conoce más sobre sus investigaciones, artículos y otros!
            </h4>
            <div className="flex justify-center space-x-4 mb-4">
            <a
                className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
                href=""
                rel="noopener noreferrer"
                target="_blank">
                LinkedIn
              </a>
        
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default FelipeProfile;
