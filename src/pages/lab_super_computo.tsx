import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, memo } from 'react';
import Link from 'next/link'; // Asegúrate de importar Link desde next/link

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import { homePageMeta } from '../data/data';
import labImage from '../images/SoftwareItems/lab2.jpg'; // Imagen compartida (mantenemos la misma imagen)
import superComputoBackground from '../images/header-background.webp'; // Imagen de fondo

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Sección del laboratorio de supercómputo
const SuperComputingLabSection: FC = () => (
  <section className="p-6 bg-white rounded-lg shadow-lg mb-10 backdrop-blur-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Laboratorio de Supercómputo</h2>
    <p className="text-gray-700 mb-4">
      El laboratorio de supercómputo es un centro de investigación dedicado a resolver problemas complejos mediante el
      uso de tecnologías avanzadas de computación. Equipado con clústeres de computadoras de alto rendimiento (HPC),
      este laboratorio está diseñado para ejecutar simulaciones masivas, modelar fenómenos naturales, analizar grandes
      cantidades de datos y realizar investigaciones interdisciplinarias en áreas como la física, la biología computacional
      y la inteligencia artificial.
    </p>
    <p className="text-gray-700 mb-4">
      Gracias a su infraestructura de vanguardia, el laboratorio de supercómputo permite a los investigadores ejecutar
      algoritmos y modelos que requieren una capacidad de procesamiento extremadamente alta. Además, se optimiza el uso
      de recursos para garantizar una ejecución eficiente y sin fallos en los proyectos más exigentes.
    </p>
    <div className="mt-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Áreas de Aplicación</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Simulaciones físicas:</strong> Modelado de sistemas complejos, como fenómenos meteorológicos, astrofísicos y biológicos.</li>
        <li><strong>Big Data:</strong> Análisis y procesamiento de grandes volúmenes de datos para investigaciones científicas.</li>
        <li><strong>Inteligencia Artificial:</strong> Desarrollo de algoritmos de aprendizaje automático y procesamiento de datos en tiempo real.</li>
      </ul>
    </div>
    <div className="mt-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Infraestructura y Recursos</h3>
      <p className="text-gray-700">
        El laboratorio cuenta con un clúster de supercomputadoras de última generación, con procesadores multinúcleo,
        memoria de alta velocidad y almacenamiento distribuido, lo que permite realizar simulaciones paralelizadas de
        gran escala. El acceso a este hardware está optimizado mediante sistemas de gestión de colas que asignan recursos
        de manera eficiente y garantizan tiempos de ejecución reducidos para los proyectos más exigentes.
      </p>
    </div>

    {/* Agregar el texto y los enlaces debajo */}
    <div className="mt-8 text-center">
      <p>
        <strong>Persona a cargo:</strong> <Link href="/miembro2" className="text-blue-600 hover:underline">Alex Di Genova</Link>
      </p>
      <p>
        <Link href="/contacto" className="text-blue-600 hover:underline">Contacta con nosotros</Link>
      </p>
    </div>

    {/* Imagen centrada dentro del rectángulo blanco */}
    <div className="mt-8 flex justify-center">
      <Image src={labImage} alt="Imagen del laboratorio de supercómputo" className="rounded-lg max-w-full" />
    </div>
  </section>
);

// Componente principal de la página de laboratorio de supercómputo
const SuperComputingLabPage: FC = memo(() => {
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
            src={superComputoBackground}
          />
          <div className="z-10 max-w-screen-lg px-4 lg:px-0">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Laboratorio de Supercómputo</h1>
            <div className="relative mb-10">
              {/* Rectángulo blanco sobre el fondo */}
              <div className="absolute inset-0 bg-white opacity-80 z-10"></div>
              <div className="relative z-20">
                <SuperComputingLabSection />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default SuperComputingLabPage;
