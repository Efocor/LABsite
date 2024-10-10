import { FC, memo } from 'react';
import Socials from '../Socials'; // Suponiendo que tienes los íconos de redes sociales listos
import { SectionId } from '../../data/data';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <div className="relative bg-white px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14 border-t-2 border-neutral-300">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-white p-1 ring-white ring-offset-2 focus:outline-none focus:ring-2"
        href={`/#${SectionId.Hero}`}
      >
        <img
          src="C: Users/HP/Downloads/WhatsApp Image 2024-09-01 at 17.38.23" // Cambia esto por el logo que quieras
          className="h-8 w-8"
          alt="Logo"
        />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <p className="text-neutral-700 text-lg text-center">
        Somos un equipo de investigación que, con pasión y colaboración, transforma ideas en realidad y construye el futuro.
      </p>
      <div className="flex gap-x-4 text-neutral-700">
        <Socials /> {/* Asegúrate que los íconos tengan estilos consistentes */}
      </div>
      <span className="text-sm text-neutral-600">
        © Copyright 2018 - {currentYear} | UOHLAB
      </span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
