import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Image from 'next/image';
import backgroundImage from '../images/header-background.webp'; // Imagen de fondo
import alexImage from '../images/Perfil_Alex_Genova.jpg';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Componente de perfil para Alex con más información y diseño futurista
const AlexProfile: FC = memo(() => {
  return (
    <Page title="Perfil de Alex Di Genova" description="Conoce más sobre Alex Di Genova, Profesor Asociado en Ingeniería de Sistemas Complejos.">
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

        {/* Tarjeta de Alex con estilo futurista y más información */}
        <div className="z-10 max-w-4xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center transition-shadow duration-300 hover:shadow-blue-500/50">
          
          {/* Botón de volver en la esquina superior derecha */}
          <button 
            onClick={() => window.history.back()} 
            className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Volver
          </button>

          {/* Imagen de Alex */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-600 shadow-lg">
            <Image src={alexImage} alt="Alex Di Genova" className="object-cover w-full h-full" />
          </div>

          {/* Información general de Alex */}
          <h3 className="text-4xl font-bold text-blue-700 mb-2 tracking-wide hover:underline hover:text-blue-500 transition duration-300">
            Alex Di Genova
          </h3>
          <p className="text-gray-700 text-center text-lg mb-4 italic">
            Profesor Asociado, Universidad Adolfo Ibáñez
          </p>
          <p className="text-gray-700 text-center text-lg mb-4 italic">
            Doctor en Ingeniería de Sistemas Complejos, Universidad Adolfo Ibáñez
          </p>
          <p className="text-gray-700 text-center text-lg mb-4">
            <strong>Localización:</strong> Rancagua, Chile
          </p>
          
          {/* Información sobre la carrera de Alex */}
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            Alex Di Genova es Ingeniero en Bioinformática de la Universidad de Talca y Doctor en Ingeniería de Sistemas Complejos de la Universidad Adolfo Ibáñez. Su línea de investigación se centra en el desarrollo de nuevos algoritmos para el análisis de datos genómicos. Ha publicado más de 30 artículos científicos en revistas ISI y ha participado en proyectos genómicos tanto nacionales como internacionales.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            Actualmente, el Dr. Di Genova está desarrollando métodos y algoritmos computacionales para caracterizar reordenamientos genómicos en distintos tipos de cáncer humano, con el objetivo de comprender cómo estos procesos mutacionales contribuyen a la progresión y evolución de esta enfermedad. 
          </p>
          <p className="text-gray-600 text-center text-sm mb-4 text-justify">
            En el Instituto de Ciencias de la Ingeniería, participa en el área de Biología Computacional y Biotecnología.
          </p>

          {/* Sección de habilidades */}
          <div className="w-full mb-6">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Habilidades</h4>
            <ul className="grid grid-cols-2 gap-4 text-gray-800 text-center">
              <li>🔬 Desarrollo de algoritmos</li>
              <li>💻 Análisis de datos genómicos</li>
              <li>📊 Bioinformática</li>
              <li>⚙️ Programación en Python y R</li>
              <li>🧬 Genómica</li>
              <li>📈 Análisis de datos NGS</li>
              <li>🔬 Biología Computacional</li>
              <li>🌱 Participación en proyectos genómicos</li>
            </ul>
          </div>

          {/* Sección de publicaciones destacadas */}
          <div className="w-full mb-6">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Publicaciones Destacadas</h4>
            <ul className="text-gray-700 text-lg list-disc list-inside">
              <li>
                <strong>Multiomic analysis of malignant pleural mesothelioma identifies molecular axes and specialized tumor profiles driving intertumor heterogeneity</strong> 
                <br />
                <em>REVISTA Nature Genetics, 2023</em>
                <br />
                Alex Di Genova, Lise Mangiante, Nicolas Alcala, Alexandra Sexton-Oates, Matthieu Foll
                <br />
                <a href="http://dx.doi.org/10.1038/s41588-023-01321-1" className="text-blue-600 hover:underline">Ver más</a>
              </li>
              <li>
                <strong>A molecular phenotypic map of malignant pleural mesothelioma</strong> 
                <br />
                <em>REVISTA GigaScience, 2023</em>
                <br />
                Alex Di Genova, Lise Mangiante, Alexandra Sexton-Oates, Catherine Voegele, Lynnette Fernandez-Cuesta
                <br />
                <a href="http://dx.doi.org/10.1093/gigascience/giac128" className="text-blue-600 hover:underline">Ver más</a>
              </li>
              <li>
                <strong>Editorial: Applications of biological networks in biomedicine</strong> 
                <br />
                <em>REVISTA Frontiers in Molecular Biosciences, 2023</em>
                <br />
                Vinicius Maracaja-Coutinho, Alex Di Genova, Anne Siegel, Mauricio Latorre
                <br />
                <a href="http://dx.doi.org/10.3389/fmolb.2022.1005183" className="text-blue-600 hover:underline">Ver más</a>
              </li>
              <li>
                <strong>Genome sequencing and transcriptomic analysis of the Andean killifish Orestias ascotanensis reveals adaptation to high-altitude aquatic life</strong> 
                <br />
                <em>REVISTA Genomics, 2022</em>
                <br />
                Alex Di Genova, [...]
                <br />
                <a href="#" className="text-blue-600 hover:underline">Ver más</a> {/* Enlace temporal */}
              </li>
            </ul>
          </div>

          {/* Enlaces a redes sociales */}
          <div className="w-full mb-6 flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/alex-digenova"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/alexdigenova"
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

export default AlexProfile;
