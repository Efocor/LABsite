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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imageSrc.length]);

  const handleImageChange = (direction: 'left' | 'right') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => {
        if (direction === 'left') {
          return (prevIndex - 1 + imageSrc.length) % imageSrc.length;
        } else {
          return (prevIndex + 1) % imageSrc.length;
        }
      });
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Image Slider */}
        <div
          className={classNames(
            'absolute inset-0 flex h-full transition-transform duration-500 ease-in-out',
            isTransitioning ? 'transition-all duration-500 ease-in-out' : ''
          )}
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {imageSrc.map((src, index) => (
            <div key={index} className="relative h-full w-full flex-shrink-0">
              <Image
                alt={`${name}-image-${index}`}
                className="h-full w-full object-cover object-center"
                src={src}
                placeholder="blur"
                priority
              />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
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
          <ChevronDownIcon className="h-8 w-8 rotate-[-90deg]" />
        </button>

        {/* Main Content */}
        <div className="z-10 max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/70 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl font-montserrat">
              {name}
            </h1>
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
