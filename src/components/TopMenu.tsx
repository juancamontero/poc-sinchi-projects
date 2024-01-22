'use client'

import { UiContext } from '@/programs/screens/ProgramScreen'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import { CiMenuBurger } from 'react-icons/ci'


const menuItems = [
  { text: 'Programas', path: '/programs' },
  { text: 'Autores', path: '/users' },
  { text: 'Departamentos', path: '/regions' },
  { text: 'Convenios', path: '/convenios' },
  { text: 'Etiquetas', path: '/tags' },
]

export const TopMenu = () => {
  const pathName = usePathname()
  const { toggleMenu } = useContext(UiContext)

  return (
    <div className='sticky top-0 h-20 lg:h-16 border-b bg-gray-800 border-gray-700 lg:py-2.5'>
      {/* menu desktop start */}
      <div className='flex flex-row lg:my-auto lg:items-center flex-nowrap justify-between lg:space-x-4 lg:px-6 2xl:container'>
        <h5 hidden className='text-2xl font-medium text-gray-300 lg:block'>
          Proyectos
        </h5>

        {/* Menu hamburguesa start */}
        {/* lg:hidden */}
        <button 
          className='h-20  w-20 lg:hidden border-r border-gray-700 text-white font-bold'
          onClick={()=>toggleMenu()}
        > 
          <CiMenuBurger size={28} className='m-auto' />
        </button>
        {/* Menu end */}

        <div className='flex flex-row content-start lg:justify-end flex-wrap w-full lg:gap-4 gap-2 lg:p-0 p-2'>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={
                pathName.includes(item.path)
                  ? 'inline-block pt-1 pb-1 lg:px-2 px-1 border lg:pb-2 border-gray-600 rounded-md bg-gray-700 text-sky-400 text-xs sm:text-xs lg:text-sm font-medium  cursor-pointer hover:text-sky-600 h-7'
                  : 'inline-block pt-1 pb-1 lg:px-2 px-1 border lg:pb-2 border-gray-600 rounded-md bg-gray-700 text-gray-200 text-xs sm:text-xs lg:text-sm font-medium  cursor-pointer hover:text-sky-600 h-7'
              }
            >
              {item.text}
            </Link>
          ))}
        </div>

        {/*TODO search bar */}
      </div>
    </div>
  )
}

