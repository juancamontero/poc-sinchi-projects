

import { SidebarItem } from '.'
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
// ⁄
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
      <aside className='h-full ml-[-100%] absolute z-10 top-0 pb-3 px-3 w-full flex flex-col justify-between border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]'>
        <div className=''>
          <Link className='px-6 py-4 border-b-2 border-b-slate-100 z-0' href='/programs'>

          <GoProjectRoadmap size={68} className='mx-auto text-[#943A4A] mb-3'/>
            {/* <Image
              src='/logo_nav.png'
              className='mx-auto'
              alt='sinchi logo'
              width={52}
              height={52}
            /> */}
            <div>
              <h5
                hidden
                className='text-center text-xl text-gray-600 font-medium lg:block'
              >
                Proyectos SINCHI
              </h5>
              <h6 className='text-center'> Prueba de concepto</h6>
            </div>
          </Link>
          <div className='mt-8 text-left'>
            <h5 className='hidden mt-4 text-xl font-semibold text-gray-600 lg:block'>
              PROGRAMAS
            </h5>
            {/* <span className='hidden text-gray-400 lg:block'>Admin</span> */}
          </div>

          <ul className='space-y-2 tracking-wide mt-8'>
            {/* TODO: src/components <SidebarItem /> */}
            {sidebarItems.map((item) => (
              <SidebarItem key={item.path} {...item} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}
