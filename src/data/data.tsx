import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/header-background.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'Nosotros',
  Contact: 'contact',
  Portfolio: 'Proyectos',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'Noticias',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Estudios de Ciencia e Investigación`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      La ciencia no es solo un conjunto de conocimientos, es una <strong className="text-stone-100">forma de pensar</strong>, que nos impulsa
        a <strong className="text-stone-100">cuestionar, explorar y descubrir</strong> lo que aún no conocemos.
      </p>
      {/*
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
      */}
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `El Laboratorio de Innovación y Desarrollo Científico se especializa en explorar nuevas fronteras tecnológicas y científicas, abordando desafíos complejos con un enfoque interdisciplinario. Nuestra misión es impulsar el progreso científico y tecnológico mediante la investigación de vanguardia y la formación de futuros líderes en ciencia.`,
  aboutItems: [
    {label: 'Áreas de Investigación', text: 'Nos enfocamos en diversas áreas, incluyendo inteligencia artificial, biotecnología, y nanotecnología. A través de proyectos innovadores y colaboraciones con universidades y empresas, buscamos desarrollar soluciones que puedan transformar industrias y mejorar la calidad de vida.', Icon: MapIcon},
    {label: 'Compromiso y Futuro', text: 'Además de nuestra labor investigativa, nos dedicamos a la educación, ofreciendo programas que forman a jóvenes científicos. Nuestro compromiso es con la transferencia de conocimiento y tecnología que tenga un impacto positivo en la sociedad. Con una mirada al futuro, estamos enfocados en expandir nuestras capacidades y continuar liderando la innovación científica.', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Supercomputación para innovación en Salud Regional: HPC-UOH y HRLBO Juntos hacia la Medicina de Precisión',
    description: 'Proyecto financiado por el Gobierno Regional, que busca implementar tecnología HPC avanzada en la Región de O’Higgins, para formar y capacitar estudiantes y profesionales en HPC.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Modelo de crecimiento de plantas',
    description: 'El modelado de crecimiento de plantas se enfoca en simular el desarrollo de las plantas bajo diversas condiciones ambientales como luz, agua y nutrientes.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Sistemas de Diagnóstico Portátiles Basados en ADN',
    description: 'Desarrollo de dispositivos portátiles que utilizan tecnología de secuenciación rápida de ADN para la detección de enfermedades en tiempo real.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
 /**{
    title: 'Hola wua ',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
  {
    title: 'Project title 12',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage12,
  },

*/


];         

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'El Centro de Innovación Tecnológica Marca un Hito con Avances Significativos en la Optimización de Redes',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Ponte en contacto.',
  description: 'Aqui is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'biolab@uoh.cl',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'UOH, Rancagua',
      href: 'https://www.google.com/maps/place/Universidad+de+O%27Higgins/@-34.1644082,-70.7416439,15z/data=!4m2!3m1!1s0x0:0xa4ea8df808816683?sa=X&ved=1t:2428&ictx=111',
    },
    {
      type: ContactType.Instagram,
      text: '@la_uoh',
      href: 'https://www.instagram.com/la_uoh/',
    },
    {
      type: ContactType.Github,
      text: 'camoragaq',
      href: 'https://github.com/camoragaq',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/camoragaq'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://www.uoh.cl/investigacion/academico/carol-moraga/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/camoragaq/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/la_uoh/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/ici_uoh'},
];
