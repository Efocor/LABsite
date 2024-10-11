import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Image from 'next/image';
import testimonialImage from '../images/header-background.webp';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const NewsArticle: FC<{ date: string; title: string; summary: string; content: string; link: string }> = ({ date, title, summary, content, link }) => (
  <article className="p-6 bg-white bg-opacity-90 shadow-lg rounded-lg mb-8 transition-transform transform hover:scale-105">
    <h2 className="text-3xl font-bold text-blue-700 mb-2">
      <a href={link} className="hover:underline">
        {title}
      </a>
    </h2>
    <p className="text-sm text-gray-500">{date}</p>
    <p className="text-lg text-gray-700 mt-4 mb-4">{summary}</p>
    <p className="text-gray-600">{content}</p>
    <a href={link} className="inline-block mt-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition">
      Ver más
    </a>
  </article>
);

const Noticias: FC = memo(() => {
  return (
    <Page title="Noticias" description="Últimas noticias sobre avances en bioinformática e investigación científica.">
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
              {/* Noticia 1 */}
              <NewsArticle
                date="31 de agosto de 2024"
                title="Avances en Optimización de Redes en el Centro de Innovación Tecnológica"
                summary="El CIT presentó nuevos avances en la optimización de redes, con innovaciones que prometen revolucionar la eficiencia en la transmisión de datos."
                content={`
                  En una reunión clave celebrada ayer, el equipo del Centro de Innovación Tecnológica (CIT) presentó los últimos avances en su ambicioso proyecto de optimización de redes. 
                  La sesión, que reunió a destacados investigadores, ingenieros y gestores de proyecto, marcó un hito en la evolución de la red tecnológica de la institución. 
                  Durante la jornada, los miembros del equipo compartieron los resultados preliminares de las recientes pruebas y experimentos, revelando mejoras significativas en varios 
                  aspectos cruciales de la optimización de redes.
                  
                  Una de las innovaciones más importantes es un nuevo algoritmo de optimización que ha reducido significativamente los tiempos de respuesta de las redes, lo que podría revolucionar 
                  la gestión de redes a gran escala. Además, el equipo se comprometió a seguir investigando soluciones creativas para garantizar la viabilidad de estas técnicas en entornos comerciales.
                `}
                link="/noticiaej1"
              />

              {/* Noticia 2 */}
              <NewsArticle
                date="15 de septiembre de 2024"
                title="Nueva Plataforma de Secuenciación Genómica para Plantas"
                summary="Investigadores desarrollan una plataforma avanzada para secuenciar el ADN de plantas con mayor eficiencia y precisión."
                content={`
                  Un equipo de bioinformáticos del Instituto de Biotecnología ha lanzado una nueva plataforma de secuenciación de ADN diseñada específicamente para plantas. Esta herramienta avanzada
                  promete acelerar el descubrimiento de genes que controlan características agrícolas importantes, como la resistencia a las plagas y la adaptación a condiciones climáticas extremas.

                  La plataforma incorpora algoritmos de última generación que permiten un análisis más rápido y preciso de las secuencias genómicas, reduciendo los tiempos de procesamiento en un 40%.
                  Además, incluye visualización interactiva de datos para facilitar el trabajo de los investigadores que están desarrollando soluciones agrícolas más sostenibles.
                `}
                link="/noticiaej2"
              />

              {/* Noticia 3 */}
              <NewsArticle
                date="3 de octubre de 2024"
                title="Algoritmo para la Detección Temprana del Cáncer Basado en Inteligencia Artificial"
                summary="Un nuevo algoritmo de inteligencia artificial ofrece una precisión sin precedentes en la detección temprana de células cancerígenas."
                content={`
                  Científicos del Laboratorio de Bioinformática del Centro Nacional de Investigación Médica han desarrollado un algoritmo de inteligencia artificial que mejora la detección
                  temprana de cáncer con una precisión del 95%. Este avance se basa en el análisis automatizado de grandes conjuntos de datos genómicos y patrones celulares.

                  Durante la fase de pruebas, el algoritmo ha demostrado ser efectivo para identificar tumores en sus etapas iniciales, lo que podría aumentar las tasas de supervivencia a largo plazo
                  de pacientes con cáncer. Los investigadores planean continuar refinando la tecnología y prepararla para su despliegue en hospitales de todo el mundo.
                `}
                link="https://www.google.com"
              />

              {/* Noticia 4 */}
              <NewsArticle
                date="20 de octubre de 2024"
                title="Evento Internacional sobre Bioinformática y Nuevas Fronteras en Genómica"
                summary="El simposio anual sobre Bioinformática reunió a expertos para discutir los desafíos y oportunidades en la secuenciación genómica."
                content={`
                  Este mes se llevó a cabo el simposio internacional sobre Bioinformática y Genómica en la Universidad de Cambridge. El evento reunió a más de 500 expertos en bioinformática
                  que discutieron las últimas innovaciones en secuenciación genómica y cómo estas tecnologías pueden aplicarse a diferentes campos, como la agricultura, la biomedicina y la
                  conservación ambiental.

                  Entre los temas discutidos estuvo el uso de inteligencia artificial para analizar grandes volúmenes de datos genómicos, así como el desarrollo de herramientas que permitan
                  una mayor colaboración entre científicos de todo el mundo. Los expertos coincidieron en la necesidad de crear plataformas abiertas para compartir datos y recursos entre
                  instituciones.
                `}
                link="https://www.google.com"
              />

              {/* Noticia 5 */}
              <NewsArticle
                date="5 de noviembre de 2024"
                title="Colaboración entre Laboratorios para la Secuenciación de Microbiomas Marinos"
                summary="Un esfuerzo internacional entre laboratorios de biotecnología busca entender mejor los microbiomas marinos a través de la secuenciación genómica."
                content={`
                  Científicos de varios laboratorios de biotecnología han iniciado un proyecto de colaboración internacional para secuenciar los microbiomas marinos. El proyecto tiene como objetivo
                  identificar nuevas especies microbianas y comprender cómo estos microorganismos interactúan con su entorno, lo que podría tener implicaciones para la biología marina y la salud
                  de los ecosistemas oceánicos.

                  Los primeros resultados sugieren que los microbiomas marinos son más diversos de lo que se pensaba anteriormente, lo que subraya la importancia de continuar investigando estos
                  entornos. Los datos recopilados serán esenciales para futuras investigaciones sobre el cambio climático y su impacto en la vida marina.
                `}
                link="https://www.google.com"
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
