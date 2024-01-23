import { NoProjects } from '@/components'
import {
    ProjectList,
    ProjectListHeader,
    getConvenioById,
    getProjectsByConvenioId,
  } from '@/programs'
import { Metadata } from 'next'
  
  interface Props {
    params: {
      id: number
    }
  }

  
    export async function generateMetadata({ params }: Props): Promise<Metadata> {
      try {
        const convenio= await getConvenioById(Number(params.id))
  
        return {
          title: `Proyectos  - ${convenio?.name ??  ''}`,
          description: `Proyectos bajo convenio ${convenio?.name ??  ''}`,
        }
      } catch (error) {
        return {
          title: `Proyectos convenios`,
          description: `Error : ${error}`,
        }
      }
    }
  
  export default async function ProjectsByConvenioPage({ params }: Props) {
    const { id } = params
    const convenio = await getConvenioById(Number(id))
    const projects = (await getProjectsByConvenioId(Number(id))) ?? []
  
    return (
      <div>
        <ProjectListHeader
          title={convenio?.name ?? ''}
          preTitle='Proyectos bajo convenio con'
          projectsCount={projects.length}
        />
        <ProjectList projects={projects} />
      </div>
    )
  }
  