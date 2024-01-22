import { getAllUsers } from '@/programs'
import { ProgramScreen } from '@/programs/screens'

// };
export default async function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO 1: call the API to get menu items
  const users = await getAllUsers()

  // TODO 2: Build the menu items according  to items received

  let sidebarItems = [
    {
      title: 'Todos los autores/investigadores', //This will be the first sidebar item text
      path: '/users', //This will be the first sidebar item text and the base for the others items
    },
  ]
  // TODO 3: set titles and paths correctly
  const sectionTitle = 'Autores / Investigadores'

  users.forEach((item) => {
    let newItem = {
      title: `${item.name} (${item._count.Project})`,
      path: `${sidebarItems[0].path}/${item.id}`,
      // icon: <></>,
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
