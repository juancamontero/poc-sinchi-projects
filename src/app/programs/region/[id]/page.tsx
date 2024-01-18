import { getRegionById, getProjectsByRegionId, ProjectListHeader, ProjectList } from "@/programs"


  
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
//       const region = await getRegionById(Number(params.id)) 
  
//       return {
//         title: `Proyectos  - ${region?.name ??  ''}`,
//         description: `Proyectos en ${region?.name ??  ''}`,
//       }
//     } catch (error) {
//       return {
//         title: `Proyectos región`,
//         description: `Error : ${error}`,
//       }
//     }
//   }
  
  export default async function ProjectsByRegionPage({ params }: Props) {
    const { id } = params
    const region = await getRegionById(Number(id))
    const projects = (await getProjectsByRegionId(Number(id))) ?? []
  
    return (
      <div>
        <ProjectListHeader title={region?.name ?? ''} preTitle='Proyectos de la región del' />
        <ProjectList projects={projects} />
      </div>
    )
  }