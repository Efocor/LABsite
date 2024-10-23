import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Image from 'next/image';
import backgroundImage from '../images/header-background.webp'; // Imagen de fondo
import carol1 from '../images/Carol-Moraga-1.png'; // Imagen de Carol

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Componente de perfil para Carol con más información y diseño futurista
const CarolProfile: FC = memo(() => {
  return (
    <Page title="Perfil de Carol Moraga" description="Conoce más sobre Carol Moraga, Ingeniera en Bioinformática.">
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

        {/* Tarjeta de Carol con estilo futurista y más información */}
        <div className="z-10 max-w-4xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center transition-shadow duration-300 hover:shadow-blue-500/50">
          
          {/* Botón de volver en la esquina superior derecha */}
          <button 
            onClick={() => window.history.back()} 
            className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Volver
          </button>

          {/* Imagen de Carol */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-600 shadow-lg">
            <Image src={carol1} alt="Carol Moraga" className="object-cover w-full h-full" />
          </div>

          {/* Información general de Carol */}
          <h3 className="text-4xl font-bold text-blue-700 mb-2 tracking-wide hover:underline hover:text-blue-500 transition duration-300">
            Carol Moraga Quinteros
          </h3>
          <p className="text-gray-700 text-center text-lg mb-4 italic">
            Ingeniera en Bioinformática, Universidad de Talca, Chile
          </p>
          <p className="text-gray-700 text-center text-lg mb-4 italic">
            PhD en Bioinformática, Université Claude Bernard Lyon 1, Francia
          </p>
          <p className="text-gray-700 text-center text-lg mb-4">
            <strong>Localización:</strong> Rancagua, Chile
          </p>
          
          {/* Información sobre la carrera de Carol */}
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            Carol se desempeñó como investigadora postdoctoral en la Universidad de O'Higgins, ubicada en Rancagua, en estrecha colaboración con el Centro Nacional de Investigación Científica (CNRS) de Francia y el Centro de Investigação em Biodiversidade e Recursos Genéticos (CIBIO) de Portugal. Durante este periodo, lideró la generación del genoma de referencia de <i>Silene latifolia</i>, enfocándose en el ensamblaje y anotación del cromosoma Y, el cual es uno de los más grandes conocidos en el ámbito de las especies vegetales, alcanzando 550 megabases, y representa un modelo de estudio fundamental para la comprensión de la evolución de los cromosomas sexuales.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            En Chile, ha participado en proyectos de gran relevancia a nivel nacional, como la secuenciación de diversas especies del Desierto de Atacama y la primera secuenciación y anotación de las variantes genéticas en la población mapuche nativa chilena (Huilliche).
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            Su principal motivación ha sido comprender la biología desde una perspectiva genómica y en la interpretación de datos ómicos, con un enfoque particular en especies no modelo.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            Actualmente, su línea de investigación se centra en el desarrollo de algoritmos para predecir redes de interacción entre miARNs y ARNm en especies no modelo, especialmente en plantas nativas, con el objetivo de entender cómo estas evolucionan en la determinación del sexo y cómo se adaptan a su entorno.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            Carol lleva a cabo investigaciones en el área de Biología Computacional y Biotecnología en el Instituto de Ciencias de la Ingeniería en la Universidad de O'Higgins en Rancagua.
          </p>

          {/* Sección de habilidades */}
          <div className="w-full mb-6">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Habilidades</h4>
            <ul className="grid grid-cols-2 gap-4 text-gray-800 text-center">
              <li>🔬 Recolección y trabajo en terreno</li>
              <li>💻 Desarrollo de software bioinformático</li>
              <li>📊 Modelado de sistemas complejos</li>
              <li>⚙️ Programación en Python y R</li>
              <li>🧬 Diseño de experimentos en biología molecular</li>
              <li>📈 Análisis de datos científicos</li>
              <li>💻 Bioinformática y Biología Computacional</li>
              <li>🌱 Secuenciación de genomas</li>
              <li>🧬 Genómica</li>
              <li>📊 Análisis de datos NGS</li>
              <li>🔬 Análisis de secuencias</li>
              <li>🔍 Genómica comparativa</li>
            </ul>
          </div>

          {/* Enlaces a redes sociales y publicaciones */}
          <div className="w-full mb-6 flex flex-col items-center">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Conoce más sobre sus investigaciones, artículos y otros!</h4>
            <div className="flex justify-center space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/carol-moraga"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/carolmoraga"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700 transition duration-300"
              >
                GitHub
              </a>
              <a
                href="https://scholar.google.com/citations?hl=es&user=V9nSX74AAAAJ&view_op=list_works&sortby=pubdate"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition duration-300"
              >
                Google Scholar
              </a>
              <a
                href="https://www.researchgate.net/profile/Carol-Moraga-Quinteros"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 transition duration-300"
              >
                ResearchGate
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default CarolProfile;
