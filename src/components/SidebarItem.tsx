'use client'

import { useContext } from 'react'
import { UiContext } from '@/screens/ProgramScreen'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
      <li className='text-white p-0 m-0'>
        <Link
          href={path}
          className={`
            ${
              pathName === path
                ? `relative flex items-start space-x-4 rounded-s-sm bg-sky-600 px-4 py-3`
                : 'group flex items-start space-x-4 rounded-s-sm px-4 py-3 text-gray-300 hover:text-blue-400'
            }`}
          onClick={() => toggleMenu()}
        >
          {!(pathName === path) && projectsCount > 0 ? (
            <span className='text-sky-600 font-extrabold text-3xl w-10 lg:mr-1'>{`${projectsCount}`}</span>
          ) : (
            <></>
          )}

          <span className='font-medium ml-1'>{title}</span>
        </Link>
      </li>
    </>
  )
}
