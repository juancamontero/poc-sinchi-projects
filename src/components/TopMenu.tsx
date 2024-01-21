'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiMenuBurger } from 'react-icons/ci'
import { IoSearchOutline } from 'react-icons/io5'

const menuItems = [
  { text: 'Programas', path: '/programs' },
  { text: 'Autores', path: '/users' },
  { text: 'Departamentos', path: '/regions' },
  { text: 'Convenios', path: '/convenios' },
  { text: 'Etiquetas', path: '/tags' },
]

export const TopMenu = () => {
  const pathName = usePathname()

  return (
    <div className='sticky top-0 h-24 lg:h-16 border-b bg-gray-800 border-gray-700 lg:py-2.5'>
      {/* menu desktop start */}
      <div className='flex flex-row lg:items-center flex-nowrap justify-between lg:space-x-4 lg:px-6 2xl:container'>
        <h5 hidden className='text-2xl font-medium text-gray-300 lg:block'>
          Criterios
        </h5>

        {/* Menu hamburguesa start */}
        <button className='h-24  w-24  border-r lg:hidden text-white'>
          <CiMenuBurger size={24} className='m-auto' />
        </button>
        {/* Menu end */}

        <div className='flex flex-row content-start lg:justify-end flex-wrap w-full lg:gap-4 gap-2 lg:p-0 p-3'>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={
                pathName.includes(item.path)
                  ? 'inline-block pt-1 pb-1 px-2 border lg:pb-2 border-gray-600 rounded-md bg-sky-700 text-gray-200 text-xs lg:text-sm font-medium  cursor-pointer hover:text-blue-400 h-7'
                  : 'inline-block pt-1 pb-1 px-2 border lg:pb-2 border-gray-600 rounded-md bg-gray-700 text-gray-200 text-xs lg:text-sm font-medium  cursor-pointer hover:text-blue-400 h-7'
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

