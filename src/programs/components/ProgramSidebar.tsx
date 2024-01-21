
import { ProgramSidebarItem, getAllPrograms } from '@/programs'
import { GoProjectRoadmap } from 'react-icons/go'
import Link from 'next/link'
import { TopBrandWidget } from '@/components'

export const ProgramSidebar = async () => {
  let sidebarItems = [
    {
      title: 'Todos los programas',
      path: '/programs',
    },
  ]
  //
  const programs = await getAllPrograms()

  programs.forEach((prog) => {
    let newItem = {
      title: prog.name,
      path: `/programs/${prog.id}`,
      // icon: <></>,
    }
    sidebarItems.push(newItem)
  })

  return (
    <>
      <aside className='fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r  px-3 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] bg-gray-800 border-gray-700'>
        <div className='w-full'>
          <TopBrandWidget
            title={'SINCHI | Prueba concepto'}
            subTitle='Portal proyectos'
            homeUrl={'/'}
          />
  


{/* List starts */}
          <div className='overflow-y-auto h-[72svh] w-full px-1 sm:px-2 shadow-inner mt-2 '>
            <ul className='mt-8 space-y-2 tracking-wide'> 
              {/* TODO: src/components <SidebarItem /> */}
              {sidebarItems.map((item) => (
                <ProgramSidebarItem key={item.path} {...item} />
              ))}
              {/* {sidebarItems.map((item) => (
                <ProgramSidebarItem key={item.path} {...item} />
              ))}
              {sidebarItems.map((item) => (
                <ProgramSidebarItem key={item.path} {...item} />
              ))}
              {sidebarItems.map((item) => (
                <ProgramSidebarItem key={item.path} {...item} />
              ))} */}
            </ul>
          </div>
          {/* sidebar footer out starts */}
       
          {/* sidebar footer out ends */}
        </div>
      </aside>
    </>
  )
}
