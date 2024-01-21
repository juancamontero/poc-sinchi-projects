import { TopMenu } from '@/components'
import { ProgramSidebar } from '@/programs'

// };
export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* ProgramScreen */}
      <ProgramSidebar />
      <div className='ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'>
        <TopMenu />
      {/* ProgramScreen ends */}

        {/* content start */}
        <div className='p-0 2xl:container'>{children}</div>

        {/* content ends */}
      </div>
    </div>
  )
}
