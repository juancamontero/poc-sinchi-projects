'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiBookmarkCheck } from 'react-icons/ci'

interface Props {
  icon?: React.ReactNode
  title: string
  path: string
}

export const SidebarItem = ({ title, path, icon }: Props) => {
  const pathName = usePathname()

  return (
    <>
      {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
      <li className='border-b-2 border-b-slate-100'>
        <Link
          href={path}
          className={`px-2 py-2 flex items-center space-x-4  text-gray-600 group
            hover:bg-gradient-to-r hover:bg-slate-600 hover:text-white
            ${
              pathName === path
                ? `relative px-2 py-2 flex items-center space-x-4 rounded-sm text-white bg-gradient-to-r from-slate-800 to-slate-600`
                : ''
            }`}
        >
          {icon}
          <span className='font-medium text-sm'>{title}</span>
        </Link>
      </li>
    </>
  )
}
