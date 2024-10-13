import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import Contact from '../components/Sections/Contacto';
import Footer from '../components/Sections/Footer';
import { homePageMeta } from '../data/data';
import Image from 'next/image';
import testimonialImage from '../images/header-background.webp';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />

      <main className="bg-gray-100 min-h-screen flex flex-col items-center relative">
        <div className="relative min-h-screen w-full flex justify-center items-center">
          <Image
            alt="Background image"
            className="absolute z-0 h-full w-full object-cover"
            placeholder="blur"
            priority
            src={testimonialImage}
          />
          <div className="z-10 max-w-screen-lg px-4 lg:px-0">
            <Contact />  {/* Mostrar la sección de contacto */}
          </div>
        </div>
      </main>

      <Footer />
    </Page>
  );
});

export default Home;
