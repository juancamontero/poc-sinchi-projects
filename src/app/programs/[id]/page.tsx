// import { Metadata } from 'next'
import { Metadata } from 'next'

import {
  ProjectList,
  ProjectListHeader,
  getProgramNameById,
  getProjectsByProgramId,
} from '@/programs'

interface Props {
  params: {
    id: number
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const name = await getProgramNameById(Number(params.id))

    return {
      title: `${name ?? ''} - Programa`,
      description: `Proyectos del programa ${name ?? ''}`,
    }
  } catch (error) {
    return {
      title: `Proyectos programa`,
      description: `Error : ${error}`,
    }
  }
}

export default async function ProgramPage({ params }: Props) {
  const { id } = params
  const title = await getProgramNameById(Number(id))

  const projects = (await getProjectsByProgramId(Number(id))) ?? []

  const projectsCount = projects.length

  return (
    <>
      <ProjectListHeader 
      title={title} 
      preTitle='Proyectos del programa'
      projectsCount={projectsCount}
      />
      <ProjectList projects={projects} />
    </>
  )
}
