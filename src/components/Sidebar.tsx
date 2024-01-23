'use client'

import { useContext } from 'react'
import { UiContext } from '@/screens/ProgramScreen'

import { SidebarItem, TopBrandWidget } from '@/components'
import { SideBarItemProps } from './SidebarItem'

interface Props {
  sidebarItems: SideBarItemProps[]
  title: string // Title of the section, text to be rendered on top of sidebar menu
}

export const Sidebar = ({ sidebarItems, title }: Props) => {
  const { isHide } = useContext(UiContext)

  return (
    <>
      <aside
        className={`fixed top-0 z-10  flex h-screen w-full flex-col  justify-between border-r  lg:px-3 pb-3 transition duration-300  lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] bg-gray-800 border-gray-700 ${
          isHide && 'ml-[-100%]'
        }`}
      >
        <div className='w-full'>
          <TopBrandWidget title={title} />
          {/* Dynamic title */}
          <div className='text-center py-1 lg:py-2 border-b border-t border-gray-700 mb-2'>
            <h5 className='text-xl font-semibold text-gray-200 lg:block tracking-wide'>
              {title}
            </h5>
          </div>

          {/* List starts */}
          <div className='overflow-y-auto h-[75svh] w-full px-1  mt-1 '>
            <ul className='mt-4 lg:mt-8 space-y-2 tracking-wide lg:px-2 bg-slate-800 md:px-12'>
              {/* TODO: src/components <SidebarItem /> */}
              {sidebarItems.map((item) => (
                <SidebarItem
                  key={`${item.title.replace(/\s/g, '_')}${item.path}`}
                  {...item}
                />
              ))}
            </ul>
          </div>
          {/* sidebar footer out starts */}

          {/* sidebar footer out ends */}
        </div>
      </aside>
    </>
  )
}