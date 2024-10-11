import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'; // Importa useRouter

import { isMobile } from '../../config';
import { portfolioItems, SectionId } from '../../data/data';
import { PortfolioItem } from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-white" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-black">Proyectos</h2>
        <div className="w-full flex flex-wrap justify-center gap-6">
          {portfolioItems.map((item, index) => {
            const { title, image } = item;
            return (
              <div className="w-[300px] h-[300px] pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{ item: PortfolioItem }> = memo(({ item: { url, title, description } }) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter(); // Crea una instancia de useRouter

  useEffect(() => {
    // Evita errores de estilo de hidratación configurando mobile en useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      } else {
        // Si no es móvil, navega a la URL especificada en la misma pestaña
        event.preventDefault(); // Evita la acción por defecto del enlace
        router.push(url); // Navega a la URL
      }
    },
    [mobile, showOverlay, router, url], // Asegúrate de incluir router y url en las dependencias
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
        { 'opacity-0 hover:opacity-80': !mobile },
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      onClick={handleItemClick}
      ref={linkRef} // Mantén la referencia al link
    >
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});