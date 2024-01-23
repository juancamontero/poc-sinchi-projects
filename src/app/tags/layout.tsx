import { getAllTags } from '@/programs'
import { ProgramScreen } from '@/screens'

export const revalidate = 43200 // revalidate at  every 12 hour

export default async function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO 1: call the API to get menu items
  const tags = await getAllTags()

  // TODO 2: Build the menu items according  to items received

  let sidebarItems = [
    {
      title: 'Todas las etiquetas', //This will be the first sidebar item text
      path: '/tags', //This will be the first sidebar item text and the base for the others items
      projectsCount: 0
    },
  ]
  // TODO 3: set titles and paths correctly
  const sectionTitle = 'Etiquetas'

  tags.forEach((item) => {
    let newItem = {
      title: `${item.name}`,
      path: `${sidebarItems[0].path}/${item.id}`,
      projectsCount: item._count.Project
    }
    sidebarItems.push(newItem)
  })

  return (
    <div>
      <ProgramScreen sidebarItems={sidebarItems} title={sectionTitle ?? ''}>
        {children}
      </ProgramScreen>
    </div>
  )
}
