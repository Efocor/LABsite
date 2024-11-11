import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo, useEffect, useState } from 'react';

import { heroData, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const { imageSrc, name, description, actions } = heroData;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Cambiar la imagen cada 3 segundos con un efecto de desplazamiento suave
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
        setIsTransitioning(false);
      }, 500); // Duración de la animación (ajusta según sea necesario)
    }, 5000); // Cambiar cada 3 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonta
  }, [imageSrc.length]);

  // Cambiar de imagen manualmente
  const handleImageChange = (direction: 'left' | 'right') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => {
        if (direction === 'left') {
          return (prevIndex - 1 + imageSrc.length) % imageSrc.length; // Decrementar y manejar el ciclo
        } else {
          return (prevIndex + 1) % imageSrc.length; // Incrementar y manejar el ciclo
        }
      });
      setIsTransitioning(false);
    }, 500); // Duración de la animación
  };

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        {/* Contenedor con las imágenes deslizándose */}
        <div
          className={classNames(
            'absolute inset-0 overflow-hidden',  // Asegura que el contenedor de las imágenes esté en el fondo y no afecte al contenido
            isTransitioning ? 'transition-all duration-500 ease-in-out' : ''
          )}
        >
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          >
            {imageSrc.map((src, index) => (
              <Image
                key={index}
                alt={`${name}-image-${index}`}
                className="w-full h-full object-cover"
                style={{ marginTop: '-10%' }}
                src={src}
                placeholder="blur"
                priority
              />
            ))}
          </div>
        </div>

        {/* Controles de navegación para cambiar las imágenes */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
          onClick={() => handleImageChange('left')}
        >
          <ChevronDownIcon className="h-8 w-8 rotate-90" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
          onClick={() => handleImageChange('right')}
        >
          <ChevronDownIcon className="h-8 w-8 rotate-[-90deg]"  />
        </button>

        {/* Contenido principal */}
        <div className="z-10 max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/70 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl font-montserrat">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({ href, text, primary, Icon }) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}
                >
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}
          >
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Inicio';
export default Hero;
