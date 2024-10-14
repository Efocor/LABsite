import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Image from 'next/image';
import testimonialImage from '../images/header-background.webp';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// Componente principal
const AboutUs: FC = memo(() => {
  return (
    <Page title="Sobre Nosotros" description="Conoce más sobre nuestro equipo y misión.">
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
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Acerca de Nosotros</h1>

            {/* Descripción General */}
            <section className="p-6 bg-white rounded-lg shadow-lg mb-10 backdrop-blur-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Laboratorio de Innovación y Desarrollo Científico</h2>
              <p className="text-gray-700 mb-4">
                En nuestro laboratorio, nos comprometemos a explorar y expandir los límites del conocimiento. Con un equipo diverso de científicos e ingenieros, nuestra misión es abordar desafíos complejos a través de la investigación interdisciplinaria. Cada día, nos esforzamos por fomentar un ambiente donde la creatividad y la innovación florezcan, llevando a cabo proyectos que pueden transformar el paisaje científico y tecnológico.
              </p>
              <p className="text-gray-700 mb-4">
                Nos dedicamos a formar a los futuros líderes en ciencia, brindando no solo formación académica, sino también oportunidades prácticas que preparan a nuestros estudiantes para enfrentar los desafíos del mundo real. Creemos firmemente que la investigación no solo debe ser un ejercicio intelectual, sino también un motor para el cambio positivo en nuestra sociedad.
              </p>
            </section>

            {/* Información básica */}
            <section className="p-6 bg-white rounded-lg shadow-lg mb-10 backdrop-blur-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Información Adicional</h2>
              <p className="text-gray-700 mb-2"><strong>Nacionalidad:</strong> Chilena</p>
              <p className="text-gray-700 mb-2"><strong>Intereses:</strong> Genómica, Reino Plantae, Cáncer, Software, Inteligencia Artificial, Innovación Tecnológica</p>
              <p className="text-gray-700 mb-2"><strong>Centro de Estudio:</strong> Universidad de O'Higgins</p>
              <p className="text-gray-700 mb-4"><strong>Integrantes:</strong> 10</p>
              <p className="text-gray-700 mb-4">
                En nuestro equipo, contamos con investigadores de diversas disciplinas, lo que nos permite abordar problemas desde múltiples ángulos. Cada miembro aporta su experiencia única, creando un entorno de colaboración donde las ideas pueden fluir libremente.
              </p>
            </section>

            {/* Áreas de Investigación */}
            <section className="p-6 bg-white rounded-lg shadow-lg mb-10 backdrop-blur-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Áreas de Investigación</h2>
              <p className="text-gray-700 mb-4">
                Nuestros proyectos se centran en varias áreas de vanguardia, incluyendo inteligencia artificial, biotecnología y nanotecnología. Cada área es un campo fértil para la innovación, y buscamos continuamente formas de aplicar nuestras investigaciones a problemas prácticos que afectan a la sociedad.
              </p>
              <p className="text-gray-700 mb-4">
                Por ejemplo, en inteligencia artificial, estamos desarrollando modelos que pueden ayudar a predecir enfermedades y mejorar la calidad de vida de los pacientes. En biotecnología, investigamos nuevas formas de tratamiento que pueden revolucionar la medicina moderna. A través de estas iniciativas, estamos comprometidos a hacer una diferencia significativa en la vida de las personas.
              </p>
            </section>

            {/* Compromiso y Futuro */}
            <section className="p-6 bg-white rounded-lg shadow-lg mb-10 backdrop-blur-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Compromiso y Futuro</h2>
              <p className="text-gray-700 mb-4">
                Nuestra dedicación a la educación y la investigación es inquebrantable. A través de programas de formación, buscamos inspirar a la próxima generación de científicos a explorar, descubrir y crear. Estamos convencidos de que el futuro de la ciencia depende de la capacidad de los jóvenes para pensar críticamente y abordar problemas complejos con creatividad.
              </p>
              <p className="text-gray-700 mb-4">
                Al mirar hacia adelante, nuestra meta es expandir nuestras capacidades y continuar liderando la innovación científica. Queremos forjar nuevas colaboraciones, aumentar nuestra presencia en el ámbito internacional y seguir contribuyendo al desarrollo sostenible y responsable de la tecnología.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default AboutUs;

