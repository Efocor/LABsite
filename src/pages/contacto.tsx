import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import Contact from '../components/Sections/Contact';  // Mantener solo la sección de contacto
import Footer from '../components/Sections/Footer';
import { homePageMeta } from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header /> {/* Header superior */}
      <Contact />  {/* Mostrar solo la sección Contact entre Hero y Footer */}
      <Footer />  {/* Footer en la parte inferior */}
    </Page>
  );
});

export default Home;
