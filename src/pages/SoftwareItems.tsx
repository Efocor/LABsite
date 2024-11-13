// SoftwareItems.tsx
import Image from 'next/image';
import React from 'react';
import Link from 'next/link'; // Importa Link de Next.js

import lab1 from '../images/SoftwareItems/lab1.jpg';
import lab2 from '../images/SoftwareItems/lab2.jpg';

// Define la estructura de cada software
interface SoftwareItem {
  title: string;
  description: string;
  image: string;
  url: string;
}

// Puedes importar tus items de software desde data.tsx
const softwareItems: SoftwareItem[] = [
  {
    title: 'Laboratorio de Secuenciación',
    description: 'Información del laboratorio.',
    image: lab1, // Cambia la ruta a la imagen real
    url: '/lab_secuenciacion', // Ruta interna para la página de Lab 1
  },
  {
    title: 'Laboratorio de Super Computo',
    description: 'Información del laboratorio.',
    image: lab2,
    url: '/lab_super_computo', // Ruta interna para la página de Lab 2
  },
  // Agrega más elementos según sea necesario
];

const SoftwareItems: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-6 mt-6">
    {softwareItems.map((item, index) => (
      <div className="w-[300px] h-[300px] pb-6" key={`${item.title}-${index}`}>
        <div className="relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
          <Image alt={item.title} className="h-full w-full" src={item.image} />
          <Link
            className="absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300 opacity-0 hover:opacity-80 flex flex-col justify-center items-center"
            href={item.url} // Usa el componente Link para la navegación interna
          >
            <h2 className="text-center font-bold text-white">{item.title}</h2>
            <p className="text-xs text-white">{item.description}</p>
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default SoftwareItems;
