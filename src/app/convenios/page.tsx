import {
  ProjectList,
  ProjectListHeader,
  getAllProjectsWithConvenio,
} from '@/programs'

export default async function ConveniosPage() {
  const projects = await getAllProjectsWithConvenio()

  return (
    <>
   
      <ProjectListHeader
        title='de todos los convenios'
        preTitle='Proyectos'
        projectsCount={projects.length ?? 0}
      />
      {projects && <ProjectList projects={projects} />}
    </>
  )
}
