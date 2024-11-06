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
    <h2 className="text-3xl font-bold text-blue-700 mb-2">Modelado de fotosíntesis</h2>
    <p className="text-sm text-gray-500">Universidad O'Higgins • Abril 2022</p>
    <p className="text-lg text-gray-700 mt-4 mb-4">
    El modelado de la fotosíntesis es una disciplina clave dentro de la biología y las ciencias ambientales, ya que permite entender 
    cómo las plantas convierten la luz solar en energía química. para sustentar su crecimiento. Este proceso fundamental no solo es 
    crucial para la supervivencia de las plantas, sino que también juega un papel esencial en la regulación de los ecosistemas 
    globales, dado que influye en el ciclo del carbono y la producción de oxígeno
    </p>
    <p className="text-lg text-gray-700 mb-4">
    La fotosíntesis es un proceso biológico complejo que involucra una serie de reacciones bioquímicas, donde el dióxido de carbono
     y el agua se convierten en glucosa y oxígeno utilizando la energía solar. Estas reacciones tienen lugar en estructuras
      especializadas dentro de las células vegetales, como los cloroplastos. Mediante el modelado computacional de estos procesos, 
      los científicos pueden simular cómo diferentes factores, como la intensidad de la luz, la concentración de CO2 y la temperatura,
       afectan la eficiencia fotosintética.
    </p>
    <p className="text-lg text-gray-700 mb-4">
    Uno de los enfoques más avanzados en el modelado de la fotosíntesis es la integración de modelos matemáticos que 
    describen las reacciones químicas, el flujo de energía. y el intercambio de gases dentro de la planta. Utilizando 
    simulaciones computacionales, los investigadores pueden predecir cómo las plantas responderán a cambios ambientales, 
    lo cual es particularmente valioso en el contexto del cambio climático, donde la disponibilidad de recursos y 
    las condiciones climáticas pueden alterar la capacidad fotosintética de las especies vegetales.
    </p>
    <p className="text-lg text-gray-700 mb-4">
    Este tipo de modelado no solo mejora nuestra comprensión de la fisiología vegetal, sino que también tiene
    aplicaciones prácticas en la agricultura y la biotecnología. Al optimizar las condiciones que maximizan la fotosíntesis,
     es posible mejorar los rendimientos de los cultivos y desarrollar plantas más resistentes a condiciones de estrés ambiental, 
     como la sequía. Además, el modelado de la fotosíntesis puede contribuir al diseño de cultivos con mayor capacidad de 
     captura de carbono, ayudando a mitigar los efectos del cambio climático.
    </p>
    <p className="text-lg text-gray-700 mb-4">
    En resumen, el modelado de la fotosíntesis es una herramienta poderosa que abre nuevas posibilidades para la 
    investigación agrícola y ambiental. Con avances en la simulación computacional, los científicos pueden no solo 
    entender mejor cómo las plantas generan energía, sino también mejorar su eficiencia y su capacidad de adaptación 
    a los desafíos globales. Este campo promete ser un motor clave para el desarrollo de soluciones innovadoras en la 
    lucha contra el cambio climático y en la mejora de la seguridad alimentaria. 
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
