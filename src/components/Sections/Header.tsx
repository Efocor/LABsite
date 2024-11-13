import { Dialog, Transition } from '@headlessui/react';
import { Bars3BottomRightIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { FC, Fragment, memo, useCallback, useMemo, useState } from 'react';

import { SectionId } from '../../data/data';
import { useNavObserver } from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para la búsqueda
  const navSections = useMemo(
    () => [
      SectionId.Hero,
      SectionId.About,
      SectionId.Portfolio,
      SectionId.Noticias,
      SectionId.Software,
      SectionId.Contact,
    ],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // Actualiza el estado con la entrada del usuario
  };

  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
const [matchingElements, setMatchingElements] = useState<Element[]>([]);

const handleSearchSubmit = (event: React.FormEvent) => {
  event.preventDefault();

  const searchQueryLower = searchQuery.toLowerCase();

  // Realizar nueva búsqueda si el término cambió o si es la primera búsqueda
  if (matchingElements.length === 0 || currentMatchIndex === 0) {
    const allContentElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
    const foundElements = Array.from(allContentElements).filter(element =>
      element.textContent?.toLowerCase().includes(searchQueryLower)
    );

    setMatchingElements(foundElements);
    setCurrentMatchIndex(0);
  }

  if (matchingElements.length > 0) {
    const elementToHighlight = matchingElements[currentMatchIndex];
    
    // Scroll con margen superior para que el texto encontrado esté centrado
    elementToHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });

    console.log('Contenido encontrado:', elementToHighlight.textContent);

    // Avanza al siguiente índice y vuelve al inicio si llegamos al final
    setCurrentMatchIndex((currentMatchIndex + 1) % matchingElements.length);
  } else {
    console.log('Contenido no encontrado');
  }
};

  return (
    <>
      <MobileNav
        currentSection={currentSection}
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
        navSections={navSections}
        searchQuery={searchQuery}
      />
      <DesktopNav
        currentSection={currentSection}
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
        navSections={navSections}
        searchQuery={searchQuery}
      />
    </>
  );
});

const DesktopNav: FC<{
  navSections: SectionId[];
  currentSection: SectionId | null;
  searchQuery: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (event: React.FormEvent) => void;
}> = memo(({ navSections, currentSection, searchQuery, handleSearch, handleSearchSubmit }) => {
  const baseClass =
    '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
  const activeClass = classNames(baseClass, 'text-orange-500');
  const inactiveClass = classNames(baseClass, 'text-neutral-100');

  return (
    <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/40 p-4 backdrop-blur sm:block" id={headerID}>
      <nav className="flex justify-center items-center">
        <div className="flex gap-x-8">
          {navSections.map(section =>
            section === 'Nosotros' ? (
              <DropdownNavItem
                activeClass={activeClass}
                currentSection={currentSection}
                inactiveClass={inactiveClass}
                key={section}
              />
            ) : section === 'Infraestructura' ? (
              <InfraestructuraDropdownNavItem
                activeClass={activeClass}
                currentSection={currentSection}
                inactiveClass={inactiveClass}
                key={section}
              />
            ) : (
              <NavItem
                activeClass={activeClass}
                current={section === currentSection}
                inactiveClass={inactiveClass}
                key={section}
                section={section}
              />
            ),
          )}
        </div>
        {/* Barra de búsqueda con margen agregado */}
        <form className="flex items-center ml-4 mt-1 relative" onSubmit={handleSearchSubmit}>
          <input
            className="p-2 pl-10 pr-10 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={handleSearch}
            placeholder="Buscar..."
            type="text"
            value={searchQuery}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </form>
      </nav>
    </header>
  );
});

const DropdownNavItem: FC<{ activeClass: string; inactiveClass: string; currentSection: string | null }> = memo(
  ({ activeClass, inactiveClass, currentSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const isActive = currentSection === 'Nosotros';

    return (
      <div className="relative flex-shrink-0">
        <button
          className={classNames(isActive ? activeClass : inactiveClass, 'flex items-center')}
          onClick={toggleDropdown}>
          Nosotros
          <ChevronDownIcon className="w-5 h-5 ml-1" />
        </button>
        {/* Hacer visible el dropdown en móviles */}
        {isOpen && (
          <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 sm:block">
            <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/nosotros">
              Nosotros
            </Link>
            <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/miembros">
              Miembros
            </Link>
            <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/investigacion">
              Investigación
            </Link>
          </div>
        )}
      </div>
    );
  },
);

const InfraestructuraDropdownNavItem: FC<{ activeClass: string; inactiveClass: string; currentSection: string | null }> =
  memo(({ activeClass, inactiveClass, currentSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const isActive = currentSection === 'Infraestructura';

    return (
      <div className="relative flex-shrink-0">
        <button
          className={classNames(isActive ? activeClass : inactiveClass, 'flex items-center')}
          onClick={toggleDropdown}>
          Infraestructura
          <ChevronDownIcon className="w-5 h-5 ml-1" />
        </button>
        {/* Hacer visible el dropdown en móviles */}
        {isOpen && (
          <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 sm:block">
            <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/infraestructura">
              Infraestructura
            </Link>
            <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/lab_secuenciacion">
              Lab. Secuenciación
            </Link>
            <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/lab_super_computo">
              Lab. Super Computo
            </Link>
          </div>
        )}
      </div>
    );
  });


  const MobileNav: FC<{
    navSections: SectionId[];
    currentSection: SectionId | null;
    searchQuery: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearchSubmit: (event: React.FormEvent) => void;
  }> = memo(({ navSections, currentSection, searchQuery, handleSearch, handleSearchSubmit }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Controla qué dropdown está abierto
  
    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);
  
    const handleDropdownToggle = (section: string) => {
      // Alterna entre abrir y cerrar el dropdown para la sección
      setOpenDropdown(openDropdown === section ? null : section);
    };
  
    const baseClass =
      'p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-0'; // Eliminar focus:ring
    const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold');
    const inactiveClass = classNames(baseClass, 'text-white font-medium'); // Asegúrate de que las letras sean blancas por defecto
  
    return (
      <>
        <button
          aria-label="Menu Button"
          className="fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/80 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
          onClick={toggleOpen}>
          <Bars3BottomRightIcon className="h-8 w-8 text-white" />
          <span className="sr-only">Open sidebar</span>
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 bg-stone-800">
                <nav className="mt-5 flex flex-col gap-y-4 px-2">
                  {navSections.map(section => (
                    <div key={section}>
                      {/* Si la sección es "Nosotros" o "Infraestructura", se maneja como un dropdown */}
                      {section === 'Nosotros' || section === 'Infraestructura' ? (
                        <div>
                          <button
                            className={classNames(
                              currentSection === section ? activeClass : inactiveClass,
                              'flex items-center'
                            )}
                            onClick={() => handleDropdownToggle(section)}>
                            {section}
                            <ChevronDownIcon className="w-4 h-4 ml-1" />
                          </button>
                          {/* Muestra las subsecciones si el dropdown está abierto */}
                          {openDropdown === section && (
                            <div className="pl-4 mt-1">
                              {section === 'Nosotros' && (
                                <div>
                                  <Link
                                    className="block px-4 py-2 text-white hover:bg-gray-700"
                                    href="/nosotros">
                                    Nosotros
                                  </Link>
                                  <Link
                                    className="block px-4 py-2 text-white hover:bg-gray-700"
                                    href="/miembros">
                                    Miembros
                                  </Link>
                                  <Link
                                    className="block px-4 py-2 text-white hover:bg-gray-700"
                                    href="/investigacion">
                                    Investigación
                                  </Link>
                                </div>
                              )}
                              {section === 'Infraestructura' && (
                                <div>
                                  <Link
                                    className="block px-4 py-2 text-white hover:bg-gray-700"
                                    href="/infraestructura">
                                    Infraestructura
                                  </Link>
                                  <Link
                                    className="block px-4 py-2 text-white hover:bg-gray-700"
                                    href="/lab_secuenciacion">
                                    Lab Secuenciación
                                  </Link>
                                  <Link
                                    className="block px-4 py-2 text-white hover:bg-gray-700"
                                    href="/lab_super_computo">
                                    Lab. Super Computo
                                  </Link>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <NavItem
                          activeClass={activeClass}
                          current={section === currentSection}
                          inactiveClass={inactiveClass}
                          key={section}
                          onClick={toggleOpen}
                          section={section}
                        />
                      )}
                    </div>
                  ))}
                  {/* Barra de búsqueda en el menú móvil */}
                  <form className="flex items-center mt-4" onSubmit={handleSearchSubmit}>
                    <input
                      className="p-2 rounded-l-md border border-gray-400"
                      onChange={handleSearch}
                      placeholder="Buscar..."
                      type="text"
                      value={searchQuery}
                    />
                    <button className="p-2 bg-blue-500 text-white rounded-r-md" type="submit">
                      Buscar
                    </button>
                  </form>
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  });

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({ section, current, inactiveClass, activeClass, onClick }) => {
  const isSoftwareSection = section === 'Infraestructura';
  const isNewsSection = section === 'Noticias';
  const isContactSection = section === 'Contacto';
  const isProyectosSection = section === 'Proyectos';
  const isNosotrosSection = section === 'Nosotros';

  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={
        isSoftwareSection
          ? '/infraestructura'
          : isNewsSection
          ? '/noticias'
          : isContactSection
          ? '/contacto'
          : isProyectosSection
          ? '/proyectos'
          : isNosotrosSection
          ? '/nosotros'
          : `/#${section}`
      }
      key={section}
      onClick={onClick}>
      {section}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
