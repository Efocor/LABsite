import {
  AcademicCapIcon,
  // ArrowDownTrayIcon,
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
import heroImage1 from '../images/header-backgroundfix.webp';
import heroImage2 from '../images/Imagen_inicio_2.jpg';
import heroImage3 from '../images/Imagen_inicio_3.jpg';
import heroImage4 from '../images/MicroARNs-1-1024x683.jpg';
import heroImage5 from '../images/a.jpg';
import testimonialImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
// import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import profilepic from '../images/profilepic.jpg';
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
  title: 'Laboratorio de Bioinformática',
  description:
    'Este sitio fue creado con el motivo de muestra de las actividades del laboratorio de Bioinformática de la UOH',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'Inicio',
  About: 'Nosotros',
  Miembros: 'Miembros',
  Contact: 'Contacto',
  Portfolio: 'Proyectos',
  Resume: 'Investigación',
  Skills: 'skills',
  Stats: 'stats',
  Software: 'Infraestructura',
  Noticias: 'Noticias',
  Testimonials: 'Noticia',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = { 
  imageSrc: [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5],  // Arreglo de imágenes
  name: `Estudios de Ciencia e Investigación`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        La ciencia no es solo un conjunto de conocimientos, es una{' '}
        <strong className="text-stone-100">forma de pensar</strong>, que nos impulsa a{' '}
        <strong className="text-stone-100">cuestionar, explorar y descubrir</strong> lo que aún no conocemos.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.About}`,
      text: 'Nosotros',
      primary: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contacto',
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
    {
      label: 'Áreas de Investigación',
      text: 'Nos enfocamos en diversas áreas, incluyendo inteligencia artificial, biotecnología, y nanotecnología. A través de proyectos innovadores y colaboraciones con universidades y empresas, buscamos desarrollar soluciones que puedan transformar industrias y mejorar la calidad de vida.',
      Icon: MapIcon,
    },
    {
      label: 'Compromiso y Futuro',
      text: 'Además de nuestra labor investigativa, nos dedicamos a la educación, ofreciendo programas que forman a jóvenes científicos. Nuestro compromiso es con la transferencia de conocimiento y tecnología que tenga un impacto positivo en la sociedad. Con una mirada al futuro, estamos enfocados en expandir nuestras capacidades y continuar liderando la innovación científica.',
      Icon: CalendarIcon,
    },
    {label: 'Nacionalidad', text: 'Chilena', Icon: FlagIcon},
    {label: 'Intereses', text: 'Genómica, Reino Plantae, Cancer, Software', Icon: SparklesIcon},
    {label: 'Centro de Estudio', text: 'Universidad de O´Higgins', Icon: AcademicCapIcon},
    {label: 'Integrantes', text: '10', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Infraestructura',
    skills: [
      {
        name: 'Wengan',
        level: 10,
      },
      {
        name: 'PlataCheck',
        level: 4,
      },
      {
        name: 'DNASeq',
        level: 3,
      },
    ],
  },
  {
    name: 'Investigación',
    skills: [
      {
        name: 'Paper sobre secuenciación de DNA',
        level: 9,
      },
      {
        name: 'Paper sobre algoritmo de IA para análisis de DNA',
        level: 7,
      },
      {
        name: 'Paper sobre cancer',
        level: 6,
      },
    ],
  },
  {
    name: 'Tecnologías en operación',
    skills: [
      {
        name: 'HPC',
        level: 10,
      },
      {
        name: 'NGS',
        level: 5,
      },
      {
        name: 'Organovo´s NovoGen Bioprinter',
        level: 4,
      },
    ],
  },
  {
    name: 'Eventos o simposios',
    skills: [
      {
        name: 'Serie de charlas universitarias',
        level: 9,
      },
      {
        name: 'Participaciones en congresos',
        level: 4,
      },
      {
        name: 'Participación en eventos de la Universidad',
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
    description:
      'Proyecto financiado por el Gobierno Regional, que busca implementar tecnología HPC avanzada en la Región de O’Higgins, para formar y capacitar estudiantes y profesionales en HPC.',
    url: '/proyecto1',
    image: porfolioImage1,
  },
  {
    title: 'Modelo de crecimiento de plantas',
    description:
      'El modelado de crecimiento de plantas se enfoca en simular el desarrollo de las plantas bajo diversas condiciones ambientales como luz, agua y nutrientes.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Sistemas de Diagnóstico Portátiles Basados en ADN',
    description:
      'Desarrollo de dispositivos portátiles que utilizan tecnología de secuenciación rápida de ADN para la detección de enfermedades en tiempo real.',
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
    date: 'Abril 2023',
    location: 'Universidad O´Higgins',
    title: 'Modelado de redes de Señalización',
    content: (
      <p>
        Explora cómo las señales internas y externas son procesadas para activar respuestas específicas, como la defensa
        contra patógenos.
      </p>
    ),
  },
  /* {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },*/
];

export const experience: TimelineItem[] = [
  {
    date: 'Marzo 2024',
    location: 'Universidad O´Higgins',
    title: 'Modelado de fotosíntesis',
    content: (
      <p>
        El modelado de fotosíntesis simula cómo las plantas convierten la luz solar en energía química, teniendo en
        cuenta factores como intensidad de luz, concentración de CO2 y temperatura.
      </p>
    ),
  },
  /* {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },*/
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '10 de agosto de 2024',
      text: 'El Centro de Innovación Tecnológica Marca un Hito con Avances Significativos en la Optimización de Redes',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/CICB%27s_Laboratory.jpg',
    },
    {
      name: '31 de agosto de 2024',
      text: 'Reunión de Investigación: El equipo del Centro de Innovación Tecnológica presentó avances en la optimización de redes, revisó resultados preliminares y discutió estrategias para futuros desafíos. Se definieron metas y pasos a seguir en el proyecto.',
      image: 'https://uchile.cl/dam/jcr:796858c8-4355-4329-87cb-dcdb1397fde2/IMG_9110%20jpg.jpg',
    },
    {
      name: '9 de marzo de 2024',
      text: 'Avance en IA: Avance en IA MédicaNuevo algoritmo mejora la precisión diagnóstica en un 25% usando imágenes médicas.',
      image:
        'https://iccsi.com.ar/wp-content/uploads/que-avances-recientes-son-emocionantes-en-el-campo-de-la-ia-1.webp',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Ponte en contacto.',
  description:
    'Si tienes alguna pregunta o comentario, no dudes en contactarnos. Estamos aquí para ayudarte. También puedes encontrarnos en:',
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
      text: '@biocompu_uoh',
      href: 'https://www.instagram.com/biocompu_uoh/',
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
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/biocompu_uoh/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/ici_uoh'},
];
