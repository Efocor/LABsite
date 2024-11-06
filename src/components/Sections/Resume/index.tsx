import {FC, memo} from 'react';
//import Link from 'next/link';
import {useRouter} from 'next/router'; // Importa useRouter
import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const router = useRouter(); // Define el hook aquí
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Investigaciones">
          <div className="flex items-start mb-4">
            {/* Cuadrado para la imagen */}
            <div className="w-40 h-40 bg-gray-200 mr-4 flex items-center justify-center">
              <img
                alt="Education"
                className="object-cover h-full w-full rounded"
                src="https://8e93beb6.rocketcdn.me/storage/2023/08/shutterstock_1028408488.webp" // Reemplaza esto con la URL de tu imagen
              />
            </div>
            <div className="flex-1">
              {/* Elementos de la sección de educación */}
              {education.map((item, index) => (
                <TimelineItem item={item} key={`${item.title}-${index}`} />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            {/* Botón "Ver más" */}
            <button className="w-max rounded-full border-2 border-black-700 bg-green-900 px-10 py-3 text-sm font-medium text-white shadow-md outline-none hover:bg-green-600 transition duration-200"
            onClick={() => router.push('/investigacion1')}>
            Ver más
            </button>
          </div>
        </ResumeSection>

        <ResumeSection title="Trabajos">
          <div className="flex items-start mb-4">
            {/* Cuadrado para la imagen */}
            <div className="w-40 h-40 bg-gray-200 mr-4 flex items-center justify-center">
              <img
                alt="Work"
                className="object-cover h-full w-full rounded"
                src="https://www.fundacionaquae.org/wp-content/uploads/2022/04/fotosintesis-de-las-plantas.jpg" // Reemplaza esto con la URL de tu imagen para "Work"
              />
            </div>
            <div className="flex-1">
              {/* Elementos de la sección de trabajo */}
              {experience.map((item, index) => (
                <TimelineItem item={item} key={`${item.title}-${index}`} />
              ))}
            </div>
          </div>

          {/* Contenedor para centrar el botón */}
          <div className="flex justify-center mt-4">
            {/* Botón "Ver más" */}
            <button className="w-max rounded-full border-2 border-black-700 bg-green-900 px-10 py-3 text-sm font-medium text-white shadow-md outline-none hover:bg-green-600 transition duration-200"
            onClick={() => router.push('/investigacion2')}>
            Ver más
            </button>
          </div>
        </ResumeSection>

        <ResumeSection title="Avances">
          <p className="pb-8">
            Aquí puedes ver un resumen de avance de eventos, actividades, sistemas e investigaciones.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
