'use client'

import { useContext } from 'react'
import { UiContext } from '@/screens/ProgramScreen'

import { CiMenuBurger } from 'react-icons/ci'

import { TopMenuItem } from './TopMenuItem'


const menuItems = [
  { text: 'Programas', path: '/programs' },
  { text: 'Autores', path: '/users' },
  { text: 'Regiones', path: '/regions' },
  { text: 'Convenios', path: '/convenios' },
  { text: 'Etiquetas', path: '/tags' },
]

export const TopMenu = () => {

  const { toggleMenu } = useContext(UiContext)

  return (
    <div className='sticky top-0 h-20 lg:h-14 border-b bg-gray-800 border-gray-700 lg:py-2.5'>
      {/* menu desktop start */}
      <div className='flex flex-row lg:my-auto lg:items-center flex-nowrap justify-between lg:space-x-4 lg:px-6 2xl:container'>
        <h5 hidden className='text-2xl font-medium text-gray-300 lg:block'>
          Proyectos
        </h5>

        {/* Menu hamburguesa start */}
        {/* lg:hidden */}
        <button 
          className='h-20 w-20 lg:hidden border-r border-gray-700 text-white font-bold'
          onClick={()=>toggleMenu()}
        > 
          <CiMenuBurger size={28} className='m-auto' />
        </button>
        {/* Menu end */}

        <div className='flex flex-row content-start lg:justify-end flex-wrap w-full lg:gap-4 gap-2 lg:p-0 p-2'>
          {menuItems.map((item) => (
            <TopMenuItem key={item.path} item={item}/>
          ))}
        </div>

        {/*TODO search bar */}
      </div>
    </div>
  )
}

