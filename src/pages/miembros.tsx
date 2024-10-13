import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Image from 'next/image';
import testimonialImage from '../images/header-background.webp';
import carol1 from '../images/Carol-Moraga-1.png';
import alex1 from '../images/Perfil_Alex_Genova.jpg';
import laura1 from '../images/Laura.jpg';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Componente para el perfil de los miembros
const MemberProfile: FC<{
  name: string;
  photo: string;
  description: string;
  studies: string;
  research: string;
  email: string;
  linkedin: string;
  publications: string[];
}> = ({ name, photo, description, studies, research, email, linkedin, publications }) => (
  <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-6 mb-8 flex flex-col items-center transition-transform transform hover:scale-105">
    <Image src={photo} alt={name} className="rounded-full w-32 h-32 mb-4" />
    <h3 className="text-2xl font-bold text-blue-700 mb-2">{name}</h3>
    <p className="text-gray-700 mb-2">{description}</p>
    <p className="text-sm text-gray-500 mt-2">{studies}</p>
    <p className="text-sm text-gray-500 mt-1">Investigación: {research}</p>
    <p className="text-sm text-gray-500 mt-1">Correo: <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a></p>
    <p className="text-sm text-gray-500 mt-1">LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{linkedin}</a></p>
    <h4 className="text-lg font-semibold mt-4">Publicaciones:</h4>
    <ul className="list-disc list-inside text-gray-600 mt-2">
      {publications.map((pub, index) => (
        <li key={index}>{pub}</li>
      ))}
    </ul>
  </div>
);

const Miembros: FC = memo(() => {
  return (
    <Page title="Miembros" description="Conoce a nuestro equipo de expertos en bioinformática e investigación científica.">
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
                  name="Carol Moraga"
                  photo={carol1}
                  description="Carol Moraga es Ingeniera en Bioinformática de la Universidad de Talca (2010) y doctora en Bioinformática de la Universidad Claude Bernard Lyon 1, Francia (2020)."
                  studies="PhD en Bioinformática, Université Claude Bernard Lyon 1, Francia"
                  research="Desarrollo de algoritmos para predecir redes de interacción entre miRNAs:mRNAs en especies no modelo, específicamente en plantas nativas."
                  email="carol.moraga@bioinstituto.edu"
                  linkedin="https://www.linkedin.com/in/carolmoraga"
                  publications={[
                    "Romo Vidal, E. V., Moyano, T. C., Bustos, B. I., Pérez-Palma, E., & Moraga, C. (2019). 'Whole Genome Sequence, Variant Discovery and Annotation in Mapuche-Huilliche Native South Americans.' Scientific Reports.",
                    "Moraga, C., et al. (2022). 'Generación del genoma de referencia de Silene Latifolia.' Journal of Botany.",
                  ]}
                />
                <MemberProfile
                  name="Alex Di Genova"
                  photo={alex1}
                  description="Ingeniero en Bioinformática de la Universidad de Talca y Doctor en Ingeniería de Sistemas Complejos de la Universidad Adolfo Ibáñez."
                  studies="Doctor en Ingeniería de Sistemas Complejos, Universidad Adolfo Ibáñez"
                  research="Desarrollo de nuevos algoritmos para el análisis de datos genómicos."
                  email="alex.digenova@bioinstituto.edu"
                  linkedin="https://www.linkedin.com/in/alexdigenova"
                  publications={[
                    "Di Genova, A., et al. (2023). 'Multiomic analysis of malignant pleural mesothelioma identifies molecular axes and specialized tumor profiles driving intertumor heterogeneity.' Nature Genetics.",
                    "Di Genova, A., et al. (2023). 'A molecular phenotypic map of malignant pleural mesothelioma.' GigaScience.",
                    "Maracaja-Coutinho, V., Di Genova, A., et al. (2023). 'Applications of biological networks in biomedicine.' Frontiers in Molecular Biosciences.",
                  ]}
                />
                <MemberProfile
                  name="Dra. Laura Cheng"
                  photo={laura1}
                  description="Especialista en genómica y biología molecular."
                  studies="PhD en Genómica, Universidad de Oxford."
                  research="Estudios sobre secuenciación de ADN y su aplicación en medicina personalizada."
                  email="laura.cheng@bioinstituto.edu"
                  linkedin="https://www.linkedin.com/in/lauraperez"
                  publications={[
                    "Pérez, L. (2024). 'Medicina personalizada y genómica: Nuevas perspectivas.' Personalized Medicine Journal.",
                    "Pérez, L., et al. (2023). 'Impacto de la genómica en el tratamiento del cáncer.' Cancer Research.",
                  ]}
                />
              </div>
            </div>

            {/* Sección de Miembros Antiguos */}
            <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8">
              <h2 className="text-4xl font-semibold text-center text-gray-700 mb-6">Miembros Antiguos</h2>
              <p className="text-center text-gray-700 mb-8">
                Agradecemos a nuestros antiguos miembros por su valiosa contribución a nuestro equipo y les deseamos éxito en sus futuros proyectos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Puedes agregar más perfiles de miembros antiguos aquí */}
                <MemberProfile
                  name="Dr. Juan Pérez"
                  photo={laura1} // Cambia la imagen
                  description="Juan Pérez es un exmiembro del equipo que se especializó en bioinformática y desarrollo de software para el análisis genómico."
                  studies="PhD en Bioinformática, Universidad de Chile"
                  research="Desarrollo de herramientas bioinformáticas para el análisis de genomas en especies vegetales."
                  email="juan.perez@bioinstituto.edu"
                  linkedin="https://www.linkedin.com/in/juanperez"
                  publications={[
                    "Pérez, J. (2018). 'Herramientas bioinformáticas para el análisis genómico.' Journal of Bioinformatics.",
                    "Pérez, J. (2020). 'Nuevas técnicas para la secuenciación genómica en plantas.' Plant Science.",
                  ]}
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

