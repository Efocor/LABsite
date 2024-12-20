import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import { homePageMeta } from '../data/data';
import testimonialImage from '../images/header-background.webp';
import SoftwareItems from './SoftwareItems'; // Importa tu nuevo componente

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Componente para la sección de software
const SoftwareSection: FC = () => (
  <section className="z-10 max-w-4xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center transition-shadow duration-300 hover:shadow-blue-500/50 mb-20">
    <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Software construidos en el laboratorio</h2>
    <p className="text-lg text-gray-700 mb-4 text-justify">
      En el laboratorio de Bioinformática, hemos desarrollado un conjunto de herramientas de software de código abierto
      para facilitar la investigación en genómica de alto rendimiento. Nuestro software está diseñado con la
      reproducibilidad en mente, utilizando tecnologías de contenedorización como Docker y Singularity para garantizar
      que nuestros flujos de trabajo se ejecuten de manera consistente en diferentes entornos y plataformas.
    </p>
    <p className="text-lg text-gray-700 mb-6 text-justify">
      Nuestro software está optimizado para ejecutarse en clústeres de computación de alto rendimiento (HPC),
      aprovechando al máximo los recursos de computación de alto rendimiento para permitir un análisis rápido de
      conjuntos de datos genómicos a gran escala.
    </p>
    {/* Llama al nuevo componente aquí */}
    <SoftwareItems /> {/* Este es el componente que muestra las imágenes y enlaces del software */}
    <h3 className="text-xl font-bold text-gray-800 mb-2">Herramientas de Software</h3>
    <h4 className="text-lg font-semibold text-gray-700 mb-1">Ensamblaje del Genoma</h4>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li>
        <strong>Wengan:</strong> Un ensamblador híbrido ultra-rápido y preciso que puede utilizar datos de lectura larga
        y corta para la reconstrucción óptima del genoma.
      </li>
      <li>
        <strong>Fast-SG:</strong> Un algoritmo sin alineación para la construcción ultra-rápida de grafos de andamiaje a
        partir de lecturas cortas o largas.
      </li>
      <li>
        <strong>FastKM:</strong> Una herramienta para la coincidencia ultra-rápida de k-mers utilizando hashing rodante
        y perfecto.
      </li>
      <li>
        <strong>hic-scaffolding-nf:</strong> Un pipeline de Nextflow para el andamiaje de ensamblajes genómicos con
        lecturas Hi-C.
      </li>
      <li>
        <strong>k-count:</strong> Un pipeline de Nextflow para contar k-mers y estimar el tamaño del genoma a partir de
        datos de secuenciación de genomas completos (WGS).
      </li>
    </ul>
    <h4 className="text-lg font-semibold text-gray-700 mb-1">Genómica del Cáncer</h4>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li>
        <strong>purple-nf:</strong> Un pipeline de Nextflow para la detección de variantes de número de copias somáticas
        (CNV) utilizando PURPLE.
      </li>
      <li>
        <strong>sv_somatic_cns:</strong> Una herramienta para el llamado de variantes estructurales somáticas a partir
        de datos de WGS emparejados.
      </li>
      <li>
        <strong>ampliconarchitect-nf:</strong> Un pipeline de Nextflow para descubrir ADN extracromosómico (ecDNA) en
        genomas cancerosos.
      </li>
      <li>
        <strong>nf-gene-fusions:</strong> Un pipeline de Nextflow para detectar fusiones de mRNA somáticas.
      </li>
    </ul>
    <h4 className="text-lg font-semibold text-gray-700 mb-1">Utilidades Generales</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li>
        <strong>alnsl:</strong> Un pipeline de Nextflow para la alineación de lecturas cortas de WGS.
      </li>
      {/* Agrega más herramientas según sea necesario */}
    </ul>
    {/* Botón de descarga para Wengan */}
    <br />
    <h4 className="text-lg font-semibold text-gray-700 mb-1 text-[24px]">Sección de descargas</h4>
    <div className="mt-6">
      <a
        className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300  text-[24px]"
        href="https://github.com/camoragaq/BrumiR" // Reemplaza con la URL de descarga real
        rel="noopener noreferrer"
        target="_blank">
        Visitar BrumiR
      </a>
    </div>
  </section>
);

// Componente principal
const Home: FC = memo(() => {
  const { title, description } = homePageMeta;

  return (
    <Page description={description} title={title}>
      <Header />
      <main className="bg-gray-100 min-h-screen flex flex-col items-center">
        {/* Contenedor principal con fondo de imagen */}
        <div className="relative min-h-screen w-full flex justify-center items-center">
          {/* Imagen de fondo optimizada con Next.js */}
          <Image
            alt="Background image"
            className="absolute z-0 h-full w-full object-cover"
            placeholder="blur"
            priority
            src={testimonialImage}
          />
          <div className="z-10 max-w-screen-lg px-4 lg:px-0">
            
            <SoftwareSection />
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default Home;
