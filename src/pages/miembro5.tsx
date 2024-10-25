import dynamic from 'next/dynamic';
import Image from 'next/image';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import backgroundImage from '../images/header-background.webp'; // Imagen de fondo
import NairoImage from '../images/nairo-torres.jpg'; // Imagen de Nairo

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});


const NairoProfile: FC = memo(() => {
  return (
    <Page
      description="Conoce más sobre Nairo Torres, Físico de la Universidad del Valle, Colombia"
      title="Perfil de Nairo Torres">
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
            <Image alt="Nairo Torres" className="object-cover w-full h-full" src={NairoImage} />
          </div>

          {/* Información general de Laura */}
          <h3 className="text-4xl font-bold text-blue-700 mb-2 tracking-wide hover:underline hover:text-blue-500 transition duration-300">
            Nairo Torres
          </h3>
          <p className="text-gray-700 text-center text-lg mb-4 italic">
          Físico de la Universidad del Valle, Colombia
          </p>
          <p className="text-gray-700 text-center text-lg mb-4">
            <strong>Localización:</strong> Rancagua, Chile
          </p>

          {/* Información sobre la carrera de  */}
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
          Grado Académico: Doctorado en Ciencias de la Bioingeniería de la UOH ©
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
          Físico de formación y estudiante del Doctorado en Ciencias de la Bioingeniería de la UOH. 
          Trabajó en montajes ópticos enfocados a LiDAR atmosférico y al procesamiento de las señales obtenidas por esta tecnología. 
          Su interés va en línea con la instrumentación, sus mediciones, nivel de precisión y limitaciones teóricas y técnicas en cada aplicación.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
          Actualmente trabaja en el desarrollo de algoritmos para el estudio de imágenes histológicas, con enfoque en el deep learning y convencido de que ciencias como la  biología y medicina pueden beneficiarse enormemente con desarrollos 
          algorítmicos/matemáticos planteados desde la comprensión de las propiedades físicas de los sistemas estudiados, tomando como base herramientas de otros campos de estudio, pero también definiendo nuevas herramientas concebidas por y para la comprensión de los sistemas biológicos.
          </p>


          {/* Sección de habilidades */}
          <div className="w-full mb-6">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Habilidades</h4>
            <ul className="grid grid-cols-2 gap-4 text-gray-800 text-center">
              <li>🔬 Algoritmos en imágenes histológicas</li>
              <li>💻 Conocimientos de montajes ópticos</li>
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
                className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
                href="https://www.linkedin.com/in/nairo-torres-fiesco/"
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

export default NairoProfile;
