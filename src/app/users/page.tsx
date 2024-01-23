import {
  ProjectList,
  ProjectListHeader,
  getAllProjectsWithUsers,
} from '@/programs'

export default async function UsersPage() {
  const projects = await getAllProjectsWithUsers()

  return (
    <>
      <ProjectListHeader
        title='de todos los autores'
        preTitle='Proyectos'
        projectsCount={projects.length ?? 0}
      />

      {projects && <ProjectList projects={projects} />}
    </>
  )
}
