// export const metadata = {
//  title: 'Programas -',

import { Sidebar, TopMenu } from '@/components'

// };
export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar />
      <div className='relative ml-auto mb-2 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen '>
        <div className='px-2 pt-2 overflow-y-scroll overflow-x-scroll h-screen bg-white'>{children}</div>
      </div>
    </>
  )
}
