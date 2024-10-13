import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Image from 'next/image';
import backgroundImage from '../images/header-background.webp'; // Imagen de fondo
import juanImage from '../images/bill-gates.jpg';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Componente de perfil para Juan con más información y diseño futurista
const JuanProfile: FC = memo(() => {
  return (
    <Page title="Perfil de Juan Pérez" description="Conoce más sobre Juan Pérez, Dr. en Bioinformática y Desarrollo de Software Genómico.">
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

        {/* Tarjeta de Juan con estilo futurista y más información */}
        <div className="z-10 max-w-4xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center transition-shadow duration-300 hover:shadow-blue-500/50">
          
          {/* Botón de volver en la esquina superior derecha */}
          <button 
            onClick={() => window.history.back()} 
            className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Volver
          </button>

          {/* Imagen de Juan */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-600 shadow-lg">
            <Image src={juanImage} alt="Juan Pérez" className="object-cover w-full h-full" />
          </div>

          {/* Información general de Juan */}
          <h3 className="text-4xl font-bold text-blue-700 mb-2 tracking-wide hover:underline hover:text-blue-500 transition duration-300">
            Juan Pérez
          </h3>
          <p className="text-gray-700 text-center text-lg mb-4 italic">
            Dr. en Bioinformática, Universidad de Ciencias de la Vida
          </p>
          <p className="text-gray-700 text-center text-lg mb-4">
            <strong>Localización:</strong> Santiago, Chile
          </p>
          
          {/* Información sobre la carrera de Juan */}
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            Juan Pérez es un reconocido bioinformático con un Doctorado en Bioinformática de la Universidad de Ciencias de la Vida. Su investigación se centra en el desarrollo de software para la interpretación de datos genómicos. Ha contribuido a múltiples proyectos en el ámbito de la genómica personalizada y ha publicado más de 25 artículos en revistas científicas de alto impacto.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            Actualmente, el Dr. Pérez está trabajando en algoritmos para el análisis de datos de secuenciación de nueva generación (NGS) con el fin de mejorar la detección temprana de enfermedades hereditarias.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            Además, es miembro activo del grupo de investigación en Biología Computacional de su universidad, donde colabora en proyectos internacionales.
          </p>

          {/* Sección de habilidades */}
          <div className="w-full mb-6">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Habilidades</h4>
            <ul className="grid grid-cols-2 gap-4 text-gray-800 text-center">
              <li>🔬 Desarrollo de software genómico</li>
              <li>💻 Análisis de datos NGS</li>
              <li>📊 Bioinformática</li>
              <li>⚙️ Programación en Python y R</li>
              <li>🧬 Genómica y Biología Computacional</li>
              <li>📈 Visualización de datos</li>
              <li>🔍 Investigación en biotecnología</li>
              <li>🌱 Colaboración en proyectos internacionales</li>
            </ul>
          </div>

          {/* Sección de publicaciones destacadas */}
          <div className="w-full mb-6">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Publicaciones Destacadas</h4>
            <ul className="text-gray-700 text-lg list-disc list-inside">
              <li>
                <strong>Advancements in Genomic Data Analysis for Personalized Medicine</strong> 
                <br />
                <em>REVISTA Journal of Bioinformatics, 2023</em>
                <br />
                Juan Pérez, Lise Mangiante, Nicolás Alcala
                <br />
                <a href="http://dx.doi.org/10.1000/jbi.2023.0001" className="text-blue-600 hover:underline">Ver más</a>
              </li>
              <li>
                <strong>Machine Learning Applications in Genomic Research</strong> 
                <br />
                <em>REVISTA Nature Biotechnology, 2023</em>
                <br />
                Juan Pérez, Lise Mangiante, Alexandra Sexton-Oates
                <br />
                <a href="http://dx.doi.org/10.1000/nb.2023.0002" className="text-blue-600 hover:underline">Ver más</a>
              </li>
              <li>
                <strong>Innovations in NGS Data Processing for Rare Disease Diagnosis</strong> 
                <br />
                <em>REVISTA Genomics, 2023</em>
                <br />
                Juan Pérez, Lise Mangiante
                <br />
                <a href="http://dx.doi.org/10.1000/gen.2023.0003" className="text-blue-600 hover:underline">Ver más</a>
              </li>
              <li>
                <strong>Understanding Genetic Variations in Cancer Genomics</strong> 
                <br />
                <em>REVISTA Bioinformatics Reviews, 2022</em>
                <br />
                Juan Pérez, [... ]
                <br />
                <a href="#" className="text-blue-600 hover:underline">Ver más</a> {/* Enlace temporal */}
              </li>
            </ul>
          </div>

          {/* Enlaces a redes sociales */}
          <div className="w-full mb-6 flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/juan-perez"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/juanperez"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default JuanProfile;
