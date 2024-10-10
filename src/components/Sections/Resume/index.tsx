import { FC, memo } from 'react';

import { education, experience, SectionId, skills } from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import { SkillGroup } from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Investigaciones">
          <div className="flex items-start mb-4">
            {/* Cuadrado para la imagen */}
            <div className="w-40 h-40 bg-gray-200 mr-4 flex items-center justify-center">
              <img
                src="https://8e93beb6.rocketcdn.me/storage/2023/08/shutterstock_1028408488.webp" // Reemplaza esto con la URL de tu imagen
                alt="Education"
                className="object-cover h-full w-full rounded"
              />
            </div>
            <div className="flex-1">
              {/* Elementos de la sección de educación */}
              {education.map((item, index) => (
                <TimelineItem item={item} key={`${item.title}-${index}`} />
              ))}
            </div>
          </div>
          
          {/* Botón "Ver más" */}
          <button className="mt-4 px-3 py-2 bg-green-800 text-white rounded hover:bg-green-600 transition duration-200">
            Ver más
          </button>
        </ResumeSection>

        <ResumeSection title="Work">
  <div className="flex items-start mb-4">
    {/* Cuadrado para la imagen */}
    <div className="w-40 h-40 bg-gray-200 mr-4 flex items-center justify-center">
      <img
        src="https://www.fundacionaquae.org/wp-content/uploads/2022/04/fotosintesis-de-las-plantas.jpg" // Reemplaza esto con la URL de tu imagen para "Work"
        alt="Work"
        className="object-cover h-full w-full rounded"
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
    <button className="w-max rounded-full border-2 border-black-700 bg-green-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-green-600 transition duration-200">
      Ver más
    </button>
  </div>
</ResumeSection>


        <ResumeSection title="Skills">
          <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
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
