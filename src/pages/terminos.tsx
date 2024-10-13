import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Image from 'next/image';
import testimonialImage from '../images/header-background.webp'; // Asegúrate de que esta imagen esté disponible
import Link from 'next/link'; // Importa Link de Next.js

// Importación dinámica del Header
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const TermsOfService: FC = memo(() => {
  return (
    <Page title="Términos de Uso" description="Términos de uso del servicio proporcionado.">
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
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Términos de Uso</h1>

            <article className="relative p-6 bg-white bg-opacity-90 shadow-lg rounded-lg mb-8">
              {/* Botón Volver */}
              <Link href="/contacto">
                <button 
                  className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Volver
                </button>
              </Link>

              <h2 className="text-2xl font-semibold text-blue-700 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-lg text-gray-700 mt-4 mb-4">
                Al acceder y utilizar nuestro servicio, usted acepta estar sujeto a estos términos de uso y a
                todas las leyes y regulaciones aplicables. Si no está de acuerdo con estos términos, le
                recomendamos que no utilice nuestro servicio.
              </p>

              <h2 className="text-2xl font-semibold text-blue-700 mb-4">2. Modificaciones</h2>
              <p className="text-lg text-gray-700 mt-4 mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Le recomendamos
                que revise periódicamente esta página para estar al tanto de cualquier cambio.
              </p>

              <h2 className="text-2xl font-semibold text-blue-700 mb-4">3. Uso del Servicio</h2>
              <p className="text-lg text-gray-700 mt-4 mb-4">
                Usted se compromete a utilizar el servicio de manera responsable y a no realizar actividades
                que puedan dañar el servicio o a otros usuarios.
              </p>

              <h2 className="text-2xl font-semibold text-blue-700 mb-4">4. Limitación de Responsabilidad</h2>
              <p className="text-lg text-gray-700 mt-4 mb-4">
                No seremos responsables de ningún daño directo, indirecto, incidental, especial o
                consecuente que surja del uso o la incapacidad de uso del servicio.
              </p>

              <h2 className="text-2xl font-semibold text-blue-700 mb-4">5. Legislación Aplicable</h2>
              <p className="text-lg text-gray-700 mt-4 mb-4">
                Estos términos se regirán e interpretarán de acuerdo con las leyes de [Tu País]. Cualquier
                disputa que surja en relación con estos términos será resuelta en los tribunales de [Tu País].
              </p>

              <h2 className="text-2xl font-semibold text-blue-700 mb-4">6. Contacto</h2>
              <p className="text-lg text-gray-700 mt-4 mb-4">
                Si tiene alguna pregunta sobre estos términos, no dude en contactarnos a través de nuestro
                <Link href="/contacto">
                  <span className="text-blue-600 underline-none"> formulario de contacto</span>
                </Link>.
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
});

export default TermsOfService;
