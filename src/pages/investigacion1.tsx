import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import testimonialImage from '../images/header-background.webp';

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const SignalingNetworkModelingDetail: FC = () => (
  <article className="relative p-6 bg-white bg-opacity-90 shadow-lg rounded-lg mb-8">
    <button
      className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      onClick={() => window.history.back()}
    >
      Volver
    </button>
    <h2 className="text-3xl font-bold text-blue-700 mb-2">Modelado de Redes de Señalización</h2>
    <p className="text-sm text-gray-500">Universidad O'Higgins • Abril 2023</p>
    <p className="text-lg text-gray-700 mt-4 mb-4">
      El modelado de redes de señalización es un área de estudio crucial en la biología moderna, ya que permite comprender cómo
      las células reciben, procesan y responden a señales tanto internas como externas. Estas redes de señalización son
      responsables de activar respuestas celulares específicas, que son esenciales para funciones como la defensa contra
      patógenos, el crecimiento celular y la diferenciación.
    </p>
    <p className="text-lg text-gray-700 mb-4">
      Las señales pueden ser diversas, incluyendo hormonas, factores de crecimiento y citoquinas. Cada una de estas
      señales se une a receptores en la superficie celular, lo que desencadena una cascada de eventos bioquímicos dentro de
      la célula. Este proceso, conocido como transducción de señales, es fundamental para la comunicación celular. Al
      modelar estas redes, los investigadores pueden identificar los componentes clave que regulan la respuesta celular y
      cómo se interrelacionan entre sí.
    </p>
    <p className="text-lg text-gray-700 mb-4">
      Uno de los enfoques más innovadores en el modelado de redes de señalización es el uso de algoritmos computacionales
      para simular la dinámica de estas redes. Mediante el uso de modelos matemáticos y algoritmos de aprendizaje
      automático, los científicos pueden predecir cómo las células reaccionarán ante diferentes condiciones. Esto es
      particularmente útil en la investigación del cáncer, donde las células tumorales a menudo alteran las vías de
      señalización para promover su propio crecimiento y supervivencia.
    </p>
    <p className="text-lg text-gray-700 mb-4">
      El trabajo en este campo no solo tiene implicaciones en la biología fundamental, sino que también puede conducir al
      desarrollo de nuevas terapias. Por ejemplo, al comprender cómo las células cancerosas manipulan las redes de
      señalización, se pueden diseñar medicamentos que bloqueen estas vías y restauren la función normal de las células.
      Asimismo, el modelado de redes de señalización puede ayudar a identificar biomarcadores para la detección temprana
      de enfermedades.
    </p>
    <p className="text-lg text-gray-700 mb-4">
      En resumen, el modelado de redes de señalización es un campo en expansión que ofrece una nueva visión sobre los
      procesos celulares complejos. La Universidad O'Higgins se enorgullece de ser parte de esta investigación, que no
      solo amplía nuestra comprensión de la biología celular, sino que también sienta las bases para innovaciones en la
      medicina y la biotecnología.
    </p>
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
              {/* Noticia expandida sobre el modelado de redes de señalización */}
              <SignalingNetworkModelingDetail />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default Noticias;
