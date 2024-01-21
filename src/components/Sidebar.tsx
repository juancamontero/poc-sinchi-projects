import { SidebarItem, TopBrandWidget } from '.'
import { getAllPrograms } from '@/programs'
import { GoProjectRoadmap } from 'react-icons/go'
import Link from 'next/link'

export const Sidebar = async () => {
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
      icon: <></>,
    }
    sidebarItems.push(newItem)
  })

  return (
    <>
      <aside className='fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r  border-slate-100 bg-white px-0 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]'>
        <div className=''>
          <TopBrandWidget
           
          />
  


{/* List starts */}
          <div className='overflow-y-auto h-svh w-full px-1 sm:px-2 shadow-inner mt-2'>
            <ul className='space-y-2 tracking-wide mt-1'>
              {/* TODO: src/components <SidebarItem /> */}
              {sidebarItems.map((item) => (
                <SidebarItem key={item.path} {...item} />
              ))}
              {/* {sidebarItems.map((item) => (
                <SidebarItem key={item.path} {...item} />
              ))}
              {sidebarItems.map((item) => (
                <SidebarItem key={item.path} {...item} />
              ))}
              {sidebarItems.map((item) => (
                <SidebarItem key={item.path} {...item} />
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
