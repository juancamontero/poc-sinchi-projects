import { getTagById, getProjectsByTagId, ProjectListHeader, ProjectList } from "@/programs"

interface Props {
    params: {
      id: number
    }
  }

export default async function ProjectsByTagPage({ params }: Props) {
    const { id } = params
    const tag = await getTagById(Number(id))
    const projects = (await getProjectsByTagId(Number(id))) ?? []
  
    return (
      <div>
        <ProjectListHeader
          title={tag?.name ?? ''}
          preTitle='Proyectos con la etiqueta'
          projectsCount={projects.length}
        />
        <ProjectList projects={projects} />
      </div>
    )
  }