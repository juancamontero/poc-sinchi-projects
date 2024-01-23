import {
  ProjectList,
  ProjectListHeader,
  getAllProjectsWithRegion,
} from '@/programs'

export default async function RegionsPage() {
  const projects = await getAllProjectsWithRegion()

  return (
    <>
      <ProjectListHeader
        title='de todos las regiones'
        preTitle='Proyectos'
        projectsCount={projects.length ?? 0}
      />
      {/* {JSON.stringify(projects)} */}

      {projects && <ProjectList projects={projects} />}
    </>
  )
}
