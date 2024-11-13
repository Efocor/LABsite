import dynamic from 'next/dynamic';
import Image from 'next/image';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import backgroundImage from '../images/header-background.webp'; // Imagen de fondo
import DavidImage from '../images/David-Salas.jpg'; // Imagen de David

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});


const DavidProfile: FC = memo(() => {
  return (
    <Page
      description="Conoce más sobre David Salas, Ingeniero Civil Matemático de la Universidad de Chile"
      title="Perfil de David Salas">
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
            <Image alt="David Salas" className="object-cover w-full h-full" src={DavidImage} />
          </div>

          {/* Información general de Laura */}
          <h3 className="text-4xl font-bold text-blue-700 mb-2 tracking-wide hover:underline hover:text-blue-500 transition duration-300">
            David Salas
          </h3>
          <p className="text-gray-700 text-center text-lg mb-4 italic">
          Ingeniero Civil Matemático, Universidad de Chile
          </p>
          <p className="text-gray-700 text-center text-lg mb-4">
            <strong>Localización:</strong> Rancagua, Chile
          </p>

          {/* Información sobre la carrera de Laura */}
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
          Grado Académico: Matemáticas y Modelamiento, Université de Montpellier, Francia
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
          David Salas realizó sus estudios de pregrado en la Facultad de Ciencias Físicas y Matemáticas de la Universidad de Chile. 
          Posteriormente, hizo sus estudios doctorales en la Universidad de Montpellier (Francia) 
          bajo la dirección de Lionel Thibault.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
          Su tesis doctoral trató de diferentes problemáticas de geometría en espacios de dimensión infinita. Realizó dos años de post-doctorado en el laboratorio PROMES de la Universidad de Perpignan (Francia), donde realizó investigaciones relacionadas con teoría de juegos, energías renovables y uso eficiente de recursos naturales. 
          Cuenta con varias publicaciones ISI en diversas áreas de la matemática, tanto teóricas como aplicadas.
          </p>


          {/* Sección de habilidades */}
          <div className="w-full mb-6">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Habilidades</h4>
            <ul className="grid grid-cols-2 gap-4 text-gray-800 text-center">
              <li>🔬 Habilidad 1</li>
              <li>💻 Habilidad 2</li>
              <li>📊 Habilidad 3</li>
              <li>⚙️ Habilidad 4 o Conocimiento</li>
            </ul>
          </div>


          {/* Enlaces a redes sociales */}
          <div className="w-full mb-6 flex justify-center space-x-4">
          <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
              Conoce más sobre sus investigaciones, artículos y otros!
            </h4>
            <div className="flex justify-center space-x-4 mb-4">
              
        
              <a
                className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition duration-300"
                href="https://scholar.google.com/citations?hl=es&user=KqC93U0AAAAJ"
                rel="noopener noreferrer"
                target="_blank">
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default DavidProfile;
