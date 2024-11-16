import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Page from '../../components/Layout/Page';
import Footer from '../../components/Sections/Footer';
import backgroundImage from '../../images/header-background.webp';

const Header = dynamic(() => import('../../components/Sections/Header'), { ssr: false });

interface Project {
  title: string;
  shortTitle: string;
  date: string;
  percentage: number;
  tools: string[];
  logs: string[];
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString('es-ES', options);
};

const Pagination: FC<{
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}> = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrev = () => currentPage > 1 && onPageChange(currentPage - 1);
  const handleNext = () => currentPage < totalPages && onPageChange(currentPage + 1);

  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Anterior
      </button>
      <span className="bg-green-700 text-white font-bold text-sm rounded-md p-3 shadow-md flex items-center justify-center border border-green-700">
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Siguiente
      </button>
    </div>
  );
};

const ProjectListPage: FC<{ projects: Project[] }> = ({ projects }) => {
  const projectsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <Page title="Proyectos" description="Lista de proyectos">
      <Header />
      <main className="bg-gray-900 min-h-screen flex flex-col items-center relative">
        <Image
          alt="Background image"
          className="absolute z-0 h-full w-full object-cover opacity-80"
          placeholder="blur"
          priority
          src={backgroundImage}
        />
        <div className="z-10 max-w-6xl w-full mt-20 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-6 tracking-wide">Lista de Proyectos</h1>
          {currentProjects.map((project) => (
            <Link key={project.shortTitle} href={`/proyecto/${project.shortTitle}`}>
              <article className="relative p-6 bg-white shadow-lg rounded-lg mb-6 border border-gray-300 transition-transform duration-300 hover:scale-105 cursor-pointer w-full">
                <h2 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h2>
                <p className="text-sm text-gray-500">
                  {project.date !== 'Fecha desconocida' ? formatDate(project.date) : project.date}
                </p>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span>Progreso:</span>
                    <span className="font-semibold">{project.percentage}%</span>
                  </div>
                  <div className="bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${project.percentage}%` }}
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
      <Footer />
    </Page>
  );
};

export async function getStaticProps() {
  const projectsDirectory = path.join(process.cwd(), 'src/pages/proyecto');
  const filenames = fs.readdirSync(projectsDirectory).filter((filename) => filename.endsWith('.md'));

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      title: data.title || 'Proyecto sin título',
      shortTitle: data.shortTitle || filename.replace(/\.md$/, ''),
      date: data.date ? new Date(data.date).toISOString() : 'Fecha desconocida', // Convertimos a cadena ISO
      percentage: data.porcentaje || 0,
      tools: data.tools || [],
      logs: data.logs || [],
    };
  });

  return {
    props: {
      projects,
    },
  };
}

export default ProjectListPage;