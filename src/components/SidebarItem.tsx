'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  title: string
  path: string
}

export const SidebarItem = ({ title, path }: Props) => {
  const pathName = usePathname()

  return (
    <>
      {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
      <li>
        <Link
          href={path}
          className={`
            ${
              pathName === path
                ? `relative flex items-center space-x-4 bg-slate-500 px-2 py-2 text-gray-100`
                : 'flex items-center space-x-4 px-2 py-2 text-gray-600 hover:text-gray-100 hover:bg-slate-400'
            }`}
        >
          <span className='font-medium text-xs'>{title}</span>
        </Link>
      </li>
    </>
  )
}
