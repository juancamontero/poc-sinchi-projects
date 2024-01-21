
import { getAllPrograms } from '@/programs'
import { ProgramScreen } from '@/programs/screens'

// };
export default async function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: call the API to get menu items
  const programs = await getAllPrograms()

  return (
    <div>
      <ProgramScreen 
      programs={programs} 
      title='Programsa'
      baseUrl={'/programs'} 
      baseTitle={'Todos los programas'}>
        {children}
      </ProgramScreen>
    </div>
  )
}
