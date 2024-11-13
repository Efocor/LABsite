import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link'; // Importa Link de Next.js
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import bill from '../images/bill-gates.jpg';
import carol1 from '../images/Carol-Moraga-1.jpg';
import testimonialImage from '../images/header-background.webp';
import david1 from '../images/David-Salas.jpg';
import nairo1 from '../images/nairo-torres.jpg';
import alex1 from '../images/Perfil_Alex_Genova.jpg';
import felipe1 from '../images/FELIPE GOMEZ.jpg';
import ana1 from '../images/ana-maria-rusque.jpg';
import susan1 from '../images/susan-calfunao.jpg';
import jona1 from '../images/jonathan-canan.jpg';
// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

// Componente para el perfil de los miembros con link
const MemberProfile: FC<{
  name: string;
  photo: string;
  description: string;
  link: string; // Agregamos el link
}> = ({name, photo, description, link}) => (
  <Link
    className="bg-white bg-opacity-90 shadow-lg rounded-lg p-6 mb-8 flex flex-col items-center transition-transform transform hover:scale-105"
    href={link}>
    <Image alt={name} className="rounded-full w-32 h-32 mb-4 object-cover" src={photo} />
    <h3 className="text-2xl font-bold text-blue-700 mb-2 hover:underline">{name}</h3>
    <p className="text-gray-700 mb-2">{description}</p>
  </Link>
);

const Miembros: FC = memo(() => {
  return (
    <Page
      description="Conoce a nuestro equipo de expertos en bioinformática e investigación científica."
      title="Miembros">
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
            <h1 className="text-5xl font-bold text-center text-blue-900 mb-12">Nuestro Equipo</h1>

            {/* Sección de Miembros Actuales */}
            <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 mb-8">
              <h2 className="text-4xl font-semibold text-center text-blue-700 mb-6">Miembros Actuales</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <MemberProfile
                  description="Ingeniera en Bioinformática y doctora en Bioinformática."
                  link="/miembro1" // Enlace a la página del miembro
                  name="Dra. Carol Moraga"
                  photo={carol1}
                />
                <MemberProfile
                  description="Doctor en Ingeniería de Sistemas Complejos."
                  link="/miembro2" // Cambia esto al enlace correspondiente
                  name="Dr. Alex Di Genova"
                  photo={alex1}
                />
                <MemberProfile
                  description="Ingeniero Civil Matemático"
                  link="/miembro3" // Cambia esto al enlace correspondiente
                  name="David Salas"
                  photo={david1}
                />
                <MemberProfile
                  description="Físico de la Universidad del Valle"
                  link="/miembro5" // Cambia esto al enlace correspondiente
                  name="Nairo Torres"
                  photo={nairo1}
                />
                <MemberProfile
                  description="Ingeniero Civil en Computación"
                  link="/miembro6" // Cambia esto al enlace correspondiente
                  name="Felipe Gómez"
                  photo={felipe1}
                />
                <MemberProfile
                  description="Ingeniera Civil Industrial Universidad de Concepción"
                  link="/miembro7" // Cambia esto al enlace correspondiente
                  name="Ana María Rusque"
                  photo={ana1}
                />
                <MemberProfile
                  description="Tecnóloga Médica Morfofisiopatología y Citodiagnóstico"
                  link="/miembro8" // Cambia esto al enlace correspondiente
                  name="Susan Calfunao"
                  photo={susan1}
                />
                <MemberProfile
                  description="Ingeniero en Bioinformática"
                  link="/miembro9" // Cambia esto al enlace correspondiente
                  name="Jonathan Canan"
                  photo={jona1}
                />

              </div>
            </div>

            {/* Sección de Miembros Antiguos */}
            <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8">
              <h2 className="text-4xl font-semibold text-center text-gray-700 mb-6">Miembros Antiguos</h2>
              <p className="text-center text-gray-700 mb-8">
                Aquí se presentan a diversos ex-integrantes o colaboradores a los cuales agradecemos por su valiosa
                contribución.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <MemberProfile
                  description="Especializado en bioinformática y desarrollo de software genómico."
                  link="/miembro4" // Cambia esto al enlace correspondientes
                  name="Dr. Juan Pérez"
                  photo={bill} // Cambia la imagen
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default Miembros;
