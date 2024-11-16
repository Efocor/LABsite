import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Page from '../../components/Layout/Page';
import Footer from '../../components/Sections/Footer';
import testimonialImage from '../../images/header-background.webp';

const Header = dynamic(() => import('../../components/Sections/Header'), { ssr: false });

interface Member {
  name: string;
  photo: string;
  description: string;
  link: string;
}

const MemberProfile: FC<Member> = ({ name, photo, description, link }) => (
  <Link
    className="bg-white bg-opacity-90 shadow-lg rounded-lg p-6 mb-8 flex flex-col items-center transition-transform transform hover:scale-105"
    href={link}
  >
    <Image alt={name} className="rounded-full w-32 h-32 mb-4 object-cover" src={photo} />
    <h3 className="text-2xl font-bold text-blue-700 mb-2 hover:underline">{name}</h3>
    <ReactMarkdown className="text-gray-700 mb-2">
     {description}
    </ReactMarkdown>
  </Link>
);

interface MiembrosProps {
  members: Member[];
}

const Miembros: FC<MiembrosProps> = memo(({ members }) => {
  return (
    <Page
      description="Conoce a nuestro equipo de expertos en bioinformática e investigación científica."
      title="Miembros"
    >
      <Header />
      <main className="bg-gray-20 min-h-screen flex flex-col items-center">
        {/* Contenedor principal con fondo de imagen */}
        <div className="relative min-h-screen w-full flex justify-center items-center">
          <Image
            alt="Background image"
            className="absolute z-0 h-full w-full object-cover"
            placeholder="blur"
            priority
            src={testimonialImage}
          />
          <div className="z-10 max-w-screen-lg px-4 lg:px-0">

            {/* Sección de Miembros Actuales */}
            <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 mb-8">
              <h2 className="text-4xl font-semibold text-center text-blue-700 mb-6">Miembros Actuales</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                  <MemberProfile
                    key={index}
                    name={member.name}
                    photo={member.photo}
                    description={member.description}
                    link={member.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

// Función para obtener los paths de los miembros y cargarlos desde los archivos .md
export async function getStaticProps() {
  const membersDirectory = path.join(process.cwd(), 'src/pages/miembros');
  const filenames = fs.readdirSync(membersDirectory);

  const members: Member[] = filenames
    .filter((filename) => filename.endsWith('.md')) // Filtra archivos que no son .md (como los .tsx)
    .map((filename) => {
      const filePath = path.join(membersDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      const slug = data.slug || filename.replace(/\.md$/, '').toLowerCase();
      return {
        name: data.name || 'Sin nombre',
        photo: data.photo || '/images/default-photo.jpg',
        description: data.description || 'Sin descripción',
        link: `/miembros/${slug}`, // URL dinámica para cada miembro
      };
    });

  return {
    props: {
      members,
    },
  };
}

export default Miembros;