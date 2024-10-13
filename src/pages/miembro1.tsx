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
        <div className="z-10 max-w-4xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-blue-500/50">
          
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
          <p className="text-gray-600 text-center text-sm mb-4">
            Carol se desempeñó como investigadora postdoctoral en la Universidad de O'Higgins, ubicada en Rancagua, en estrecha colaboración con el Centro Nacional de Investigación Científica (CNRS) de Francia y el Centro de Investigação em Biodiversidade e Recursos Genéticos (CIBIO) de Portugal. Durante este periodo, lideró la generación del genoma de referencia de <i>Silene latifolia</i>, enfocándose en el ensamblaje y anotación del cromosoma Y, el cual es uno de los más grandes conocidos en el ámbito de las especies vegetales, alcanzando 550 megabases, y representa un modelo de estudio fundamental para la comprensión de la evolución de los cromosomas sexuales.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4">
            En Chile, ha participado en proyectos de gran relevancia a nivel nacional, como la secuenciación de diversas especies del Desierto de Atacama y la primera secuenciación y anotación de las variantes genéticas en la población mapuche nativa chilena (Huilliche).
          </p>
          <p className="text-gray-600 text-center text-sm mb-4">
            Su principal motivación ha sido comprender la biología desde una perspectiva genómica y en la interpretación de datos ómicos, con un enfoque particular en especies no modelo.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4">
            Actualmente, su línea de investigación se centra en el desarrollo de algoritmos para predecir redes de interacción entre miARNs y ARNm en especies no modelo, especialmente en plantas nativas, con el objetivo de entender cómo estas evolucionan en la determinación del sexo y cómo se adaptan a su entorno.
          </p>
          <p className="text-gray-600 text-center text-sm mb-4">
            Carol lleva a cabo investigaciones en el área de Biología Computacional y Biotecnología en el Instituto de Ciencias de la Ingeniería.
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

          {/* Sección de investigaciones destacadas */}
          <div className="w-full mb-6">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Investigaciones Destacadas</h4>
            <ul className="text-gray-700 text-lg list-disc list-inside">
              <li>
                <strong>Development of new algorithms to advance on the discovery of microRNAs</strong> 
                <br />
                <em>Thesis, Nov 2020</em>
                <br />
                Carol Moraga Quinteros
                <br />
                <br />
                MicroRNAs (miRNAs) are small non-coding RNAs that are key players in the regulation of gene expression. miRNAs are involved in a wide range of biological processes including cell cycle, differentiation, apoptosis, and disease. In the last decade, with the increasing accessibility of high-throughput sequencing technologies, sRNAs-seq experiments have...
                <br />
                <a href="https://www.researchgate.net/publication/349096038_Development_of_new_algorithms_to_advance_on_the_discovery_of_microRNAs" className="text-blue-600 hover:underline">Ver más</a>
              </li>
              <li>
                <strong>Shotgun proteomics of peach fruit reveals major metabolic pathways associated to ripening</strong> 
                <br />
                <em>Preprint, Aug 2020</em>
                <br />
                Ricardo Nilo Poyanco, Carol Moraga Quinteros, Gianfranco Benedetto, Andréa Miyasaka Almeida
                <br />
                <br />
                Background Fruit ripening in <i>Prunus persica</i> melting varieties involves several physiological changes that have a direct impact on the fruit organoleptic quality and storage potential. By studying the proteomic differences between the mesocarp of mature and ripe fruit, it would be possible to highlight critical molecular processes involved in the fruit...
                <br />
                <a href="https://www.researchgate.net/publication/344541877_Shotgun_proteomics_of_peach_fruit_reveals_major_metabolic_pathways_associated_to_ripening" className="text-blue-600 hover:underline">Ver más</a>
              </li>
              <li>
                <strong>BrumiR: A toolkit for de novo discovery of microRNAs from sRNA-seq data</strong> 
                <br />
                <em>Preprint, Aug 2020</em>
                <br />
                Carol Moraga Quinteros, Evelyn Sanchez, Mariana Galvao Ferrarini, Marie-France Sagot
                <br />
                <br />
                MicroRNAs (miRNAs) are small non-coding RNAs that are key players in the regulation of gene expression. In the last decade, with the increasing accessibility of high-throughput sequencing technologies, different methods have been developed to identify miRNAs, most of which rely on pre-existing reference genomes. However, when a reference genome is...
                <br />
                <a href="https://www.researchgate.net/publication/343528122_BrumiR_A_toolkit_for_de_novo_discovery_of_microRNAs_from_sRNA-seq_data" className="text-blue-600 hover:underline">Ver más</a>
              </li>
            </ul>
          </div>

          {/* Enlaces a redes sociales */}
          <div className="w-full mb-6 flex justify-center space-x-4">
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
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default CarolProfile;
