import dynamic from 'next/dynamic';
import Image from 'next/image';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import testimonialImage from '../images/header-background.webp'; // Asegúrate de que esta imagen esté disponible

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
                  Un equipo de bioinformáticos del Instituto de Biotecnología ha lanzado una nueva plataforma de secuenciación de ADN diseñada específicamente para plantas. Esta herramienta avanzada promete acelerar el descubrimiento de genes que controlan características agrícolas importantes, como la resistencia a las plagas y la adaptación a condiciones climáticas extremas.

                  La plataforma incorpora algoritmos de última generación que permiten un análisis más rápido y preciso de las secuencias genómicas, reduciendo los tiempos de procesamiento en un 40%. Además, incluye visualización interactiva de datos para facilitar el trabajo de los investigadores que están desarrollando soluciones agrícolas más sostenibles.

                  Los beneficios de esta nueva plataforma incluyen una reducción del tiempo de procesamiento, análisis más preciso de las secuencias genómicas, visualización interactiva para un mejor entendimiento de los datos y facilitación del descubrimiento de genes relevantes para la agricultura.

                  El desarrollo de esta plataforma es un paso crucial hacia la innovación en la biotecnología agrícola. Los investigadores están entusiasmados con las posibilidades que esta tecnología abrirá en términos de producción de cultivos y sostenibilidad. La secuenciación de ADN permitirá no solo identificar genes de interés, sino también contribuir al desarrollo de nuevas variedades de plantas que sean más resistentes a enfermedades y condiciones adversas.

                  Con la nueva plataforma, se espera que los científicos puedan realizar estudios más profundos sobre la genética de las plantas. Esto no solo beneficiará la investigación académica, sino que también tendrá un impacto directo en la industria agrícola, ayudando a los agricultores a adoptar prácticas más eficientes y sostenibles.

                  La colaboración entre bioinformáticos, agrónomos y agricultores será fundamental para maximizar el potencial de esta nueva herramienta. A medida que se avance en la implementación de esta plataforma, los resultados podrían transformar la forma en que se cultivan y manejan los recursos agrícolas a nivel global.

                  Los investigadores del Instituto de Biotecnología planean llevar a cabo una serie de talleres y seminarios para capacitar a otros científicos y profesionales en el uso de esta plataforma. A medida que el mundo enfrenta desafíos ambientales cada vez mayores, la investigación en biotecnología se vuelve aún más crucial. La nueva plataforma de secuenciación genómica para plantas podría ser una pieza clave en la búsqueda de soluciones que permitan una agricultura más resiliente y adaptativa.
                `}
                date="15 de septiembre de 2024"
                title="Nueva Plataforma de Secuenciación Genómica para Plantas"
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
