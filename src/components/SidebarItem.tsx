'use client'

import { useContext } from 'react'
import { UiContext } from '@/screens/ProgramScreen'

import Link from 'next/link'
import { usePathname } from 'next/navigation'


export interface SideBarItemProps {
  title: string
  path: string
}


export const SidebarItem = ({ title, path }: SideBarItemProps) => {
  const pathName = usePathname()
  const { toggleMenu } = useContext(UiContext)

  return (
    <>
      {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
      <li className='text-white' >
        <Link
          href={path}
          className={`
            ${
              pathName === path
                ? `relative flex items-center space-x-4 rounded-s-sm bg-sky-600 px-4 py-3`
                : 'group flex items-center space-x-4 rounded-s-sm px-4 py-3 text-gray-300 hover:text-blue-400'
            }`}
            onClick={() => toggleMenu()}
            
        >
          <span className='font-medium'>{title}</span>
        </Link>
      </li>
    </>
  )
}
