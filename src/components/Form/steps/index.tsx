import { Country } from './Country'
import { Developer } from './Developer'
import { EducationLevel } from './EducationLevel'
import { Experience } from './Experience'
import { Framework } from './Framework'
import { KnowledgeDB } from './KnowledgeDB'
import { Lenguaje } from './Lenguaje'
import { ProjectTime } from './ProjectTime'
import { TypeProject } from './TypeProject'

export const steps = [
  {
    title: 'País',
    description: 'Seleccione el país de origen',
    step: <Country key="country" />,
  },
  {
    title: 'Tipo de desarrollador',
    description: 'Seleccione el tipo de desarrollador que eres',
    step: <Developer key="developer" />,
  },
  {
    title: 'Lenguaje de programación',
    description: 'Elija el lenguaje de programación principal para el proyecto',
    step: <Lenguaje key="lenguaje" />,
  },
  {
    title: 'Nivel educativo',
    description: 'Indique su nivel educativo más alto alcanzado',
    step: <EducationLevel key="educationLevel" />,
  },
  {
    title: 'Experiencia laboral',
    description: 'Seleccione su experiencia laboral en el campo de desarrollo de software',
    step: <Experience key="experience" />,

  },
  {
    title: 'Framework',
    description: 'Framework con el cual vas a trabajar o hacer el proyecto',
    step: <Framework key="framework" />,
  },
  {
    title: 'Conocimiento en base de datos SQL',
    description: 'Indique su nivel de conocimiento en bases de datos SQL',
    step: <KnowledgeDB key="knowledgeDB" />,
  },
  {
    title: 'Tiempo de duración del proyecto',
    description: 'Especifique la duración estimada del proyecto',
    step: <ProjectTime key="projectTime" />,
  },
  {
    title: 'Tipo de proyecto',
    description: 'Seleccione el tipo de proyecto que desarrollará',
    step: <TypeProject key="typeProject" />,
  }
]
