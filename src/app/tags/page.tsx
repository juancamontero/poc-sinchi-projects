import { ProjectList , getAllProjectsWithTags } from '@/programs'

export default async function ProgramasPage() {
  const projects = await getAllProjectsWithTags()

  return (
    <div className='bg-white'>
      <div className='bg-slate-800 w-full p-8 flex flex-col items-start mb-6'>
        <h1 className='text-white text-2xl'>
          Proyectos de todos los programas
        </h1>
      </div>
      {/* {JSON.stringify(projects)} */}

      {projects && <ProjectList projects={projects } />}
    </div>
  )
}
