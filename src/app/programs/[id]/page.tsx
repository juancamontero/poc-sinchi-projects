import { Metadata } from 'next'
import {
  ProjectList,
  ProjectListHeader,
//   getProgramNameById,
//   getProjectsByProgramId,
} from '@/programs'
import { seedPrograms } from '@/programs/helpers/seed-constants'

interface Props {
  params: {
    id: number
  }
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const name = seedPrograms[Number(params.id-1)].name   //await getProgramNameById(Number(params.id))

    return {
      title: `${name ?? ''} - Proyectos`,
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
  const title = seedPrograms[Number(id-1)].name //await getProgramNameById(Number(id))

//   const projects = (await getProjectsByProgramId(Number(id))) ?? []

  return (
    <>
      <ProjectListHeader title={title} preTitle='Programa' />
      {/* <ProjectList projects={projects} /> */}
    </>
  )
}