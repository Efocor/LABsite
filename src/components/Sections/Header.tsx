import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon, ChevronDownIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

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
    [], // Se han eliminado Miembros e Investigación de esta lista
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // Actualiza el estado con la entrada del usuario
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const matchingSection = navSections.find(section => section.toLowerCase().includes(searchQuery.toLowerCase()));

    if (matchingSection) {
      const sectionElement = document.querySelector(`#${matchingSection}`);
      sectionElement?.scrollIntoView({behavior: 'smooth'});
    } else {
      console.log('Sección no encontrada');
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
}> = memo(({navSections, currentSection, searchQuery, handleSearch, handleSearchSubmit}) => {
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

const DropdownNavItem: FC<{activeClass: string; inactiveClass: string; currentSection: string | null}> = memo(
  ({activeClass, inactiveClass, currentSection}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const isActive = currentSection === 'Nosotros';

    return (
      <div className="relative">
        <button
          className={classNames(isActive ? activeClass : inactiveClass, 'flex items-center')}
          onClick={toggleDropdown}>
          Nosotros
          <ChevronDownIcon className="w-5 h-5 ml-1" />
        </button>
        {isOpen && (
          <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10">
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

const MobileNav: FC<{
  navSections: SectionId[];
  currentSection: SectionId | null;
  searchQuery: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (event: React.FormEvent) => void;
}> = memo(({navSections, currentSection, searchQuery, handleSearch, handleSearchSubmit}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const baseClass =
    'p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500';
  const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold');
  const inactiveClass = classNames(baseClass, 'text-neutral-200 font-medium');

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
              <nav className="mt-5 flex flex-col gap-y-2 px-2">
                {navSections.map(section => (
                  <NavItem
                    activeClass={activeClass}
                    current={section === currentSection}
                    inactiveClass={inactiveClass}
                    key={section}
                    onClick={toggleOpen}
                    section={section}
                  />
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
}> = memo(({section, current, inactiveClass, activeClass, onClick}) => {
  const isSoftwareSection = section === 'Software';
  const isNewsSection = section === 'Noticias';
  const isContactSection = section === 'Contacto';
  const isProyectosSection = section === 'Proyectos';
  const isNosotrosSection = section === 'Nosotros';

  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={
        isSoftwareSection
          ? '/software'
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
