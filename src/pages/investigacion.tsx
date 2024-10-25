import dynamic from 'next/dynamic'; 
import Image from 'next/image';
import Link from 'next/link'; // Importa Link de Next.js
import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import testimonialImage from '../images/header-background.webp';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Datos de las investigaciones
const researchData = [
  {
    title: 'Modelado de redes de Señalización',
    description: 'Explora cómo las señales internas y externas son procesadas para activar respuestas específicas, como la defensa contra patógenos.',
    date: 'Abril 2023',
    link: '/research/signal-network-modeling',
  },
  {
    title: 'Investigación en Genómica de Cáncer',
    description: 'Estudio sobre la detección de variantes somáticas utilizando tecnologías de secuenciación de nueva generación.',
    date: 'Junio 2023',
    link: '/research/cancer-genomics',
  },
  {
    title: 'Análisis de Microbiomas',
    description: 'Un enfoque innovador para entender la relación entre microbiomas y enfermedades humanas.',
    date: 'Agosto 2023',
    link: '/research/microbiome-analysis',
  },
  {
    title: 'Desarrollo de Algoritmos',
    description: 'Creación de algoritmos para el análisis de datos ómicos, mejorando la eficiencia y la precisión.',
    date: 'Septiembre 2023',
    link: '/research/algorithm-development',
  },
];

const Research: FC = memo(() => {
  return (
    <Page description="Conoce más sobre nuestros trabajos." title="Investigaciones">
      <Header />
      <main className="bg-gray-20 min-h-screen flex flex-col items-center">
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
            <h1 className="text-5xl font-bold text-center text-blue-900 mb-12">Nuestras investigaciones</h1>
            {/* Cuadro para la descripción general */}
            <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 mb-10">
              <h1 className="text-5xl font-bold text-center text-blue-900 mb-4">Investigaciones en Bioinformática</h1>
              <p className="text-lg text-gray-700 text-center">
                En nuestro laboratorio de bioinformática, nos dedicamos a avanzar en la ciencia a través de investigaciones
                innovadoras. Empleamos técnicas de análisis de datos, modelado computacional y secuenciación de alta
                capacidad para abordar preguntas complejas en biología y medicina. Nuestros proyectos abarcan desde la
                genómica hasta el análisis de microbiomas, siempre buscando comprender mejor los procesos biológicos y
                desarrollar soluciones efectivas.
              </p>
            </div>

            {/* Sección de Investigaciones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {researchData.map((research, index) => (
                <Link
                  key={index}
                  className="bg-white bg-opacity-90 shadow-lg rounded-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105 relative"
                  href={research.link}
                >
                  <h2 className={`text-xl font-semibold text-blue-700 mb-2 ${index === 0 ? 'font-bold' : ''} text-left`}>
                    {research.title}
                  </h2>
                  <div className="w-full flex justify-between items-center mb-2">
                    <span className="text-sm italic text-gray-500">{research.date}</span>
                    <hr className="flex-grow h-1 bg-blue-600 mx-4" />
                  </div>
                  <p className="text-gray-700 mb-4 flex-grow text-left">{research.description}</p>
                  {/* Botón "Más Detalles" separado de la descripción */}
                  <div className="mt-4 w-full flex justify-end">
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                      Más Detalles
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Cuadro para Métodos de Investigación */}
            <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 mb-10">
              <h2 className="text-4xl font-semibold text-center text-blue-700 mb-6">Métodos de Investigación</h2>
              <p className="text-lg text-gray-700 mb-4">
                Nuestro laboratorio emplea una variedad de tecnologías avanzadas para llevar a cabo investigaciones en
                bioinformática. Utilizamos secuenciadores de ADN de última generación, que permiten la lectura rápida y
                precisa de secuencias genómicas, facilitando el análisis de grandes volúmenes de datos biológicos. Estos
                instrumentos son cruciales para nuestros estudios de genómica del cáncer y microbiomas, donde la
                identificación de variantes y la comprensión de la diversidad microbiana son fundamentales.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Además de la secuenciación, nuestras investigaciones incluyen la utilización de computadoras de alto
                rendimiento y servidores especializados que permiten el procesamiento de datos masivos. Implementamos
                algoritmos de machine learning para la interpretación de datos, lo que nos ayuda a identificar patrones
                relevantes y realizar predicciones sobre la biología de los organismos estudiados.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Las salidas a terreno son también un componente vital de nuestro enfoque. Estas actividades nos permiten
                recolectar muestras en ambientes naturales y clínicos, garantizando que nuestros estudios estén
                fundamentados en datos del mundo real. Durante estas salidas, nuestro equipo de investigadores trabaja
                en estrecha colaboración con profesionales de la salud y ecólogos para asegurar una correcta recolección y
                manejo de muestras.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                El modus operandi de nuestro laboratorio combina un enfoque interdisciplinario. Cada proyecto es diseñado
                de manera colaborativa, integrando expertos en biología, informática y estadística. Este trabajo en
                equipo es esencial para abordar preguntas complejas y garantizar que nuestras investigaciones tengan un
                impacto significativo en el campo de la bioinformática.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default Research;