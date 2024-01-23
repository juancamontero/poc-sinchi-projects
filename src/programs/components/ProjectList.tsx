import { Project } from '@prisma/client'
import { ProjectItem } from '..'


interface Props {
  projects: Project[]
}

export const ProjectList = (props: Props) => {
  const { projects } = props

  if (!projects) return (<h1>No hay proyectos disponibles</h1>)

  return (
    <>
      <section className='text-gray-600 overflow-hidden'>
        <div className='container lg:px-5 px-2 lg:py-2 py-1 mx-auto'>
          {/* <Suspense fallback={(<h1>...Loading...</h1>)}> */}
            <div className='flex flex-wrap  gap-3'>
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          {/* </Suspense> */}
        </div>
      </section>
    </>
  )
}
