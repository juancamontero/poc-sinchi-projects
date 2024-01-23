import { ProjectList, ProjectListHeader, getAllProjects } from '@/programs'

export default async function ProgramasPage() {
  const projects = await getAllProjects()

  return (
    <>
      <ProjectListHeader
        title='de todos los programas'
        preTitle='Proyectos'
        projectsCount={projects.length ?? 0}
      />
      {/* {JSON.stringify(projects)} */}

      {projects && <ProjectList projects={projects} />}
    </>
  )
}
