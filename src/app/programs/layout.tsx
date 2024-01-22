import { getAllPrograms } from '@/programs'
import { ProgramScreen } from '@/screens'

// };
export default async function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: call the API to get menu items
  const programs = await getAllPrograms()

  // * Build the menu items according  to items received

  let sidebarItems = [
    {
      title: 'Todos los programas', //This will be the first sidebar item text
      path: '/programs', //This will be the first sidebar item text and the base for the others items
    },
  ]
  //

  programs.forEach((prog) => {
    let newItem = {
      title: prog.name,
      path: `${sidebarItems[0].path}/${prog.id}`,
      // icon: <></>,
    }
    sidebarItems.push(newItem)
  })

  return (
    <div>
      <ProgramScreen
        sidebarItems={sidebarItems}
        title='Programa'>
        {children}
      </ProgramScreen>
    </div>
  )
}
