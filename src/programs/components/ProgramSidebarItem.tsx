'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  title: string
  path: string
}

export const ProgramSidebarItem = ({ title, path }: Props) => {
  const pathName = usePathname()

  return (
    <>
      {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
      <li className='text-white'>
        <Link
          href={path}
          className={`
            ${
              pathName === path
                ? `relative flex items-center space-x-4 rounded-s-sm bg-sky-600 px-4 py-3`
                : 'group flex items-center space-x-4 rounded-s-sm px-4 py-3 text-gray-300 hover:text-blue-400'
            }`}
        >
          <span className='font-medium'>{title}</span>
        </Link>
      </li>
    </>
  )
}
