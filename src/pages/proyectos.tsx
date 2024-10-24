import dynamic from 'next/dynamic';
import Image from 'next/image';
import {FC, memo, useState} from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import testimonialImage from '../images/header-background.webp'; // Asegúrate de que esta imagen esté disponible

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

// Componente para mostrar detalles del proyecto
const ProjectDetail: FC<{
  date: string;
  title: string;
  content: string;
  percentage: number;
  tools: string[];
  logs: string[];
}> = ({date, title, content, percentage, tools, logs}) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para mostrar/ocultar detalles

  return (
    <article
      className="relative p-6 bg-white shadow-lg rounded-lg mb-6 border border-gray-300 transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}>
      <h2 className="text-xl font-bold text-blue-600 mb-2">{title}</h2>
      <p className="text-sm text-gray-500">{date}</p>
      {isOpen && (
        <div className="mt-4 text-gray-700">
          <p className="text-lg mb-2">{content}</p>
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span>Progreso:</span>
              <span className="font-semibold">{percentage}%</span>
            </div>
            <div className="bg-gray-300 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{width: `${percentage}%`}} />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-blue-600">Herramientas:</h3>
            <ul className="list-disc ml-5">
              {tools.map((tool, index) => (
                <li className="text-gray-600" key={index}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-blue-600">Bitácora:</h3>
            <ul className="list-disc ml-5">
              {logs.map((log, index) => (
                <li className="text-gray-600" key={index}>
                  {log}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
};

// Componente principal del proyecto
const Proyecto: FC = memo(() => {
  // Datos de ejemplo de los proyectos
  const projectData = [
    {
      date: '15 de octubre de 2024',
      title: 'Supercomputación para Innovación en Salud Regional',
      content: `El proyecto financiado por el Gobierno Regional tiene como objetivo implementar tecnología de supercomputación (HPC) avanzada en la Región de O’Higgins. Esta iniciativa busca transformar el paisaje de la salud regional a través de la creación de un entorno de aprendizaje y formación para estudiantes y profesionales en el uso de tecnologías de HPC.`,
      percentage: 70,
      tools: ['Python', 'R', 'CUDA', 'TensorFlow'],
      logs: [
        'Inicio del proyecto',
        'Primera reunión con stakeholders',
        'Desarrollo de la plataforma inicial',
        'Implementación de módulos de capacitación',
      ],
    },
    {
      date: '10 de octubre de 2024',
      title: 'Análisis Predictivo de Datos de Salud',
      content: `Desarrollo de modelos predictivos para el análisis de datos de salud, utilizando técnicas avanzadas de Machine Learning para optimizar la atención médica.`,
      percentage: 50,
      tools: ['Python', 'Scikit-learn', 'Pandas'],
      logs: ['Recolección de datos', 'Entrenamiento del modelo', 'Validación de resultados'],
    },
    {
      date: '05 de octubre de 2024',
      title: 'Plataforma de Telemedicina Avanzada',
      content: `Implementación de una plataforma de telemedicina que facilita consultas a distancia entre médicos y pacientes, integrando inteligencia artificial para diagnósticos.`,
      percentage: 30,
      tools: ['React', 'Node.js', 'MongoDB'],
      logs: ['Diseño de la UI', 'Integración de API', 'Pruebas de usuario'],
    },
    {
      date: '20 de septiembre de 2024',
      title: 'Sistema de Gestión de Datos Clínicos',
      content: `Desarrollo de un sistema que permite la gestión eficiente de datos clínicos para mejorar la atención al paciente y optimizar procesos en el hospital.`,
      percentage: 80,
      tools: ['Java', 'Spring Boot', 'MySQL'],
      logs: ['Definición de requerimientos', 'Implementación de la base de datos', 'Despliegue en producción'],
    },
    {
      date: '12 de octubre de 2024',
      title: 'Proyecto de Genómica Personalizada',
      content: `Desarrollo de herramientas para el análisis y la interpretación de datos genómicos con el fin de ofrecer tratamientos personalizados a los pacientes.`,
      percentage: 45,
      tools: ['BioPython', 'Jupyter Notebook', 'Nextflow'],
      logs: ['Configuración del entorno', 'Análisis de muestras', 'Presentación de resultados preliminares'],
    },
    {
      date: '01 de octubre de 2024',
      title: 'Optimización de Procesos en Laboratorios Clínicos',
      content: `Implementación de métodos de optimización para reducir tiempos de espera y mejorar la precisión en los diagnósticos en laboratorios clínicos.`,
      percentage: 60,
      tools: ['Minitab', 'Excel', 'R'],
      logs: ['Análisis de procesos actuales', 'Desarrollo de propuestas de mejora', 'Implementación de cambios'],
    },
  ];

  return (
    <Page
      description="Explora nuestros proyectos de innovación en bioinformática y tecnología avanzada."
      title="Proyectos de Innovación en Bioinformática">
      <Header />
      <main className="bg-gray-900 min-h-screen flex flex-col items-center">
        {/* Contenedor principal con fondo de imagen */}
        <div className="relative w-full flex justify-center items-center">
          {/* Imagen de fondo optimizada con Next.js */}
          <Image
            alt="Background image"
            className="absolute z-0 h-full w-full object-cover"
            placeholder="blur"
            priority
            src={testimonialImage}
          />
          <div className="z-10 max-w-screen-lg px-4 lg:px-0 py-8">
            <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">
              Proyectos de Innovación en Bioinformática
            </h1>

            {/* Cuadro de introducción */}
            <div className="mb-8 p-4 bg-blue-200 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-600">Bienvenido a nuestros Proyectos</h2>
              <p className="text-gray-700">
                Aquí encontrarás una selección de nuestros proyectos más innovadores en el campo de la bioinformática,
                diseñados para mejorar la salud y la calidad de vida en nuestra comunidad. Haz clic en cada proyecto
                para obtener más detalles.
              </p>
            </div>

            {/* Sección de proyectos */}
            <section className="flex flex-col gap-6">
              {projectData.map((project, index) => (
                <ProjectDetail
                  content={project.content}
                  date={project.date}
                  key={index}
                  logs={project.logs}
                  percentage={project.percentage}
                  title={project.title}
                  tools={project.tools}
                />
              ))}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default Proyecto;
