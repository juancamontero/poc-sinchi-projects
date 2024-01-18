import {
  getUserById,
  getProjectsByUserId,
  ProjectListHeader,
  ProjectList,
} from '@/programs'

interface Props {
  params: {
    id: number
  }
}

//   export async function generateStaticParams() {
//     const staticProjects = await Array.from({ length: 5 }).map(
//       (v, i) => `${i + 1}`
//     )

//     return staticProjects.map((id) => ({ id: id }))
//   }

//   export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     try {
//       const user = await getUserById(Number(params.id))

//       return {
//         title: `Proyectos  - ${user?.name ??  ''}`,
//         description: `Proyectos con participación de ${user?.name ??  ''}`,
//       }
//     } catch (error) {
//       return {
//         title: `Proyectos del autor`,
//         description: `Error : ${error}`,
//       }
//     }
//   }

export default async function ProjectsByUserPage({ params }: Props) {
  const { id } = params
  const user = await getUserById(Number(id))
  const projects = (await getProjectsByUserId(Number(id))) ?? []

  return (
    <div>
      <ProjectListHeader
        title={user?.name ?? ''}
        preTitle='Proyectos con participación de'
        email={user?.email}
      />
      <ProjectList projects={projects} />
    </div>
  )
}
