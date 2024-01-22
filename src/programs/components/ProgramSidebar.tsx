import { useContext } from 'react'
import { Program } from '@prisma/client'

import { UiContext } from '../screens/ProgramScreen'

import { TopBrandWidget } from '@/components'

import { ProgramSidebarItem } from '@/programs'
import { VscChromeClose } from 'react-icons/vsc'

export interface SideBarItemProps {
  title: string
  path: string
}

interface Props {
  sidebarItems: SideBarItemProps[]
  title: string // Title of the section, text to be rendered on top of sidebar menu
}

export const ProgramSidebar = ({ sidebarItems, title }: Props) => {
  const { isHide, toggleMenu } = useContext(UiContext)

  return (
    <>
      <aside
        className={`fixed top-0 z-10  flex h-screen w-full flex-col  justify-between border-r  px-3 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] bg-gray-800 border-gray-700 ${
          isHide && 'ml-[-100%]'
        }`}
      >
        <div className='w-full'>
          <TopBrandWidget title={title} />

          {/* List starts */}
          <div className='overflow-y-auto h-[72svh] w-full px-1 sm:px-2 shadow-inner mt-2 '>
            <ul className='mt-8 space-y-2 tracking-wide'>
              {/* TODO: src/components <SidebarItem /> */}
              {sidebarItems.map((item) => (
                <ProgramSidebarItem
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
