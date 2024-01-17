import { Project } from '@prisma/client'
import { ProjectItem } from '..'

interface Props {
  projects: Project[]
}

export const ProjectList = (props: Props) => {
  const { projects } = props

  if (!projects) return <></>

  return (
    <>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-2 mx-auto'>
          <div className='flex flex-wrap  gap-3'>
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
