import dynamic from 'next/dynamic';
import Image from 'next/image';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import testimonialImage from '../images/header-background.webp';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const NewsDetail: FC<{date: string; title: string; content: string}> = ({date, title, content}) => (
  <article className="relative p-6 bg-white bg-opacity-90 shadow-lg rounded-lg mb-8">
    <button
      className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      onClick={() => window.history.back()}>
      Volver
    </button>
    <h2 className="text-3xl font-bold text-blue-700 mb-2">{title}</h2>
    <p className="text-sm text-gray-500">{date}</p>
    <p className="text-lg text-gray-700 mt-4 mb-4">{content}</p>
  </article>
);

const Noticias: FC = memo(() => {
  return (
    <Page description="Últimas noticias sobre avances en bioinformática e investigación científica." title="Noticias">
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
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Últimas Noticias</h1>

            <section className="space-y-8">
              {/* Noticia única */}
              <NewsDetail
                content={`
                  En una reunión clave celebrada el 31 de agosto de 2024, el equipo del Centro de Innovación Tecnológica (CIT) presentó los últimos avances en su ambicioso proyecto de optimización de redes. La sesión, que reunió a destacados investigadores, ingenieros y gestores de proyecto, marcó un hito en la evolución de la red tecnológica de la institución. Durante la jornada, los miembros del equipo compartieron los resultados preliminares de las recientes pruebas y experimentos, revelando mejoras significativas en varios aspectos cruciales de la optimización de redes.

                  Una de las innovaciones más importantes es un nuevo algoritmo de optimización que ha reducido significativamente los tiempos de respuesta de las redes, lo que podría revolucionar la gestión de redes a gran escala. Este algoritmo ha sido diseñado para adaptarse dinámicamente a las condiciones cambiantes de la red, lo que permite una gestión más eficiente del tráfico y una reducción de la latencia. Además, se ha demostrado que el algoritmo mejora la calidad del servicio en entornos donde la demanda de ancho de banda es alta, lo que resulta especialmente beneficioso para aplicaciones críticas como la telemedicina y la educación a distancia.

                  El equipo también presentó un sistema de monitoreo en tiempo real que permite a los administradores de red detectar y resolver problemas antes de que afecten a los usuarios. Este sistema utiliza técnicas de aprendizaje automático para analizar patrones de tráfico y predecir posibles fallos, permitiendo una respuesta proactiva ante cualquier incidente. Los investigadores subrayaron la importancia de integrar estas soluciones innovadoras en la infraestructura existente para maximizar su efectividad y asegurar una transición fluida hacia la nueva tecnología.

                  Durante la reunión, se destacó la colaboración entre distintas áreas de investigación, lo que ha sido fundamental para el éxito de este proyecto. Los ingenieros de software, los especialistas en redes y los expertos en inteligencia artificial trabajaron juntos para crear un enfoque holístico que aborde todos los aspectos de la optimización de redes. La colaboración interdisciplinaria ha permitido el intercambio de conocimientos y la generación de ideas innovadoras, lo que ha impulsado el desarrollo de soluciones más efectivas.

                  En conclusión, los avances presentados en esta reunión marcan un paso significativo hacia el futuro de la optimización de redes en el CIT. Los investigadores se comprometieron a seguir investigando soluciones creativas para garantizar la viabilidad de estas técnicas en entornos comerciales y académicos. Este proyecto no solo promete mejorar la eficiencia de la red, sino que también establece un modelo a seguir para futuras iniciativas de investigación en el ámbito tecnológico.
                `}
                date="31 de agosto de 2024"
                title="Avances en Optimización de Redes en el Centro de Innovación Tecnológica"
              />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default Noticias;
