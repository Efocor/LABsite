import dynamic from 'next/dynamic';
import Image from 'next/image';
import {FC, memo, useState} from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import testimonialImage from '../images/header-background.webp';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

// Define el tipo de los miembros
interface Member {
  name: string;
  image: string;
}

// Componente para mostrar detalles del proyecto
const ProjectDetail: FC<{
  date: string;
  title: string;
  content: string;
  percentage: number;
  tools: string[];
  logs: string[];
  members: Member[];
}> = ({date, title, content, percentage, tools, logs, members}) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="mt-4">
  <h3 className="font-bold text-blue-600 mb-4">Miembros:</h3>
  <div className="flex space-x-4">
    {members.map((member, index) => (
      <div className="flex items-center" key={index}>
        <Image
          src={member.image}
          alt={member.name}
          width={50}  // Tamaño de la imagen
          height={50} // Tamaño de la imagen
          className="rounded-full" // Hace la imagen circular
        />
        <span className="ml-2 text-gray-600">{member.name}</span>
      </div>
    ))}
  </div>
</div>

          
        </div>
      )}
    </article>
  );
};


// Componente de Paginación
const Pagination: FC<{
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}> = ({totalPages, currentPage, onPageChange}) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
        Anterior
      </button>
      <span className="bg-green-700 text-white font-bold text-sm rounded-md p-3 shadow-md flex items-center justify-center border border-green-700 transition duration-300 hover:bg-green-700 hover:shadow-lg">
        <span className="mr-1">Página</span>
        <span className="text-sm">{currentPage}</span>
        <span className="mx-1">de</span>
        <span className="text-sm">{totalPages}</span>
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
        Siguiente
      </button>
    </div>
  );
};

// Componente principal del proyecto con paginación
const Proyecto: FC = memo(() => {
  const projectsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

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
      members: [
        { name: 'Ana María Rusque', image: '/images/ana-maria-rusque.jpg' },
        { name: 'Juan Pérez', image: '/images/bill-gates.jpg' },
        { name: 'David Salas', image: '/images/David-Salas.jpg' },
      ],

    },
    {
      date: '10 de octubre de 2024',
      title: 'Análisis Predictivo de Datos de Salud',
      content: `Desarrollo de modelos predictivos para el análisis de datos de salud, utilizando técnicas avanzadas de Machine Learning para optimizar la atención médica.`,
      percentage: 50,
      tools: ['Python', 'Scikit-learn', 'Pandas'],
      logs: ['Recolección de datos', 'Entrenamiento del modelo', 'Validación de resultados'],
      members : [
        { name: 'Felipe Gómez', image: '/images/FELIPE GOMEZ.jpg' },
      ],
    },
    {
      date: '05 de octubre de 2024',
      title: 'Plataforma de Telemedicina Avanzada',
      content: `Implementación de una plataforma de telemedicina que facilita consultas a distancia entre médicos y pacientes, integrando inteligencia artificial para diagnósticos.`,
      percentage: 30,
      tools: ['React', 'Node.js', 'MongoDB'],
      logs: ['Diseño de la UI', 'Integración de API', 'Pruebas de usuario'],
      members : [
        { name: 'Carol Moraga', image: '/images/Carol-Moraga-1.jpg' },
        { name: 'Susan Calfunao', image: '/images/susan-calfunao.jpg' },
      ],
    },
    {
      date: '20 de septiembre de 2024',
      title: 'Sistema de Gestión de Datos Clínicos',
      content: `Desarrollo de un sistema que permite la gestión eficiente de datos clínicos para mejorar la atención al paciente y optimizar procesos en el hospital.`,
      percentage: 80,
      tools: ['Java', 'Spring Boot', 'MySQL'],
      logs: ['Definición de requerimientos', 'Implementación de la base de datos', 'Despliegue en producción'],
      members : [
        { name: 'Alex Di Genova', image: '/images/perfil_alex_genova.jpg' },
      ],
    },
    {
      date: '12 de octubre de 2024',
      title: 'Proyecto de Genómica Personalizada',
      content: `Desarrollo de herramientas para el análisis y la interpretación de datos genómicos con el fin de ofrecer tratamientos personalizados a los pacientes.`,
      percentage: 45,
      tools: ['BioPython', 'Jupyter Notebook', 'Nextflow'],
      logs: ['Configuración del entorno', 'Análisis de muestras', 'Presentación de resultados preliminares'],
      members : [
        { name: 'Juan Pérez', image: '/images/bill-gates.jpg' },
        { name: 'Carol Moraga', image: '/images/Carol-Moraga-1.jpg' },
      ],
    },
    {
      date: '01 de octubre de 2024',
      title: 'Optimización de Procesos en Laboratorios Clínicos',
      content: `Implementación de métodos de optimización para reducir tiempos de espera y mejorar la precisión en los diagnósticos en laboratorios clínicos.`,
      percentage: 60,
      tools: ['Minitab', 'Excel', 'R'],
      logs: ['Análisis de procesos actuales', 'Desarrollo de propuestas de mejora', 'Implementación de cambios'],
      members : [
        { name: 'Dr. Juan Pérez', image: '/images/bill-gates.jpg' },
        { name: 'Felipe Gómez', image: '/images/FELIPE GOMEZ.jpg' },
      ],
    },
  ];

  // Cálculo del índice de proyectos para cada página
  const totalPages = Math.ceil(projectData.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const selectedProjects = projectData.slice(startIndex, startIndex + projectsPerPage);

  return (
    <Page
      description="Explora nuestros proyectos de innovación en bioinformática y tecnología avanzada."
      title="Proyectos de Innovación en Bioinformática">
      <Header />
      <main className="bg-gray-900 min-h-screen flex flex-col items-center">
        <div className="relative w-full flex justify-center items-center">
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
            <div className="mb-8 p-4 bg-blue-200 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-600">Bienvenido a nuestros Proyectos</h2>
              <p className="text-gray-700">
                Aquí encontrarás una selección de nuestros proyectos más recientes enfocados en la investigación,
                desarrollo y la aplicación de soluciones innovadoras en el campo de la bioinformática y la tecnología
                avanzada. Te recomendamos visitar las otras secciones para poder ver más detalles sobre miembros u otros temas
                relacionados a los proyectos aquí presentados.
              </p>
            </div>
            {/* Mostrar los proyectos */}
            <section>
              {selectedProjects.map((project, index) => (
                <ProjectDetail key={index} {...project} />
              ))}
            </section>
            {/* Componente de paginación */}
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default Proyecto;