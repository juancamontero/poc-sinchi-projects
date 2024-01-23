import {
  ProjectList,
  ProjectListHeader,
  getAllProjectsWithTags,
} from '@/programs'

export default async function TagsPage() {
  const projects = await getAllProjectsWithTags()

  return (
    <>
      <ProjectListHeader
        title='con alguna etiqueta'
        preTitle='Proyectos'
        projectsCount={projects.length ?? 0}
      />

      {projects && <ProjectList projects={projects} />}
    </>
  )
}
