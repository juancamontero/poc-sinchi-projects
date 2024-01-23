'use client'

import { useContext } from 'react'
import { UiContext } from '@/screens/ProgramScreen'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoChevronBackSharp } from 'react-icons/io5'
import { PiBackspaceBold } from 'react-icons/pi'

export interface SideBarItemProps {
  title: string
  path: string
  projectsCount: number
}

export const SidebarItem = ({
  title,
  path,
  projectsCount,
}: SideBarItemProps) => {
  const pathName = usePathname()
  const { toggleMenu } = useContext(UiContext)

  return (
    <>
      {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
      <li className='text-white p-0 m-0 w-full'>
        <Link
          href={path}
          className={`
            ${
              pathName === path
                ? `flex flex-row items-start rounded-s-sm  px-2 py-3 bg-sky-600`
                : 'flex flex-row items-start rounded-s-sm px-2 py-3 text-gray-300 hover:text-blue-400'
            }`}
          onClick={() => toggleMenu()}
        >
          {projectsCount === 0 ? (
            <span
              className={` font-extrabold text-3xl lg:mr-1 text-left w-1/5 ${
                pathName === path ? 'text-gray-300':'text-sky-600' 
              }`}
            >
              <PiBackspaceBold className='w-9 h-9'/>
            </span>
          ) : (
            <p className='text-sky-600 font-extrabold text-3xl lg:mr-1 w-1/5 text-left'>
              {projectsCount}
            </p>
          )}

          <p className='font-medium w-4/5 text-left pt-1 ml-2'>{title}</p>
        </Link>
      </li>
    </>
  )
}
