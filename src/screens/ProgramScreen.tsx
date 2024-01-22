'use client'
import { createContext } from 'react'
import { useUi } from './useUi'

import { Sidebar, TopMenu } from '@/components'

import { SideBarItemProps } from '@/components/SidebarItem'


interface Props {
  children: React.ReactNode
  sidebarItems: SideBarItemProps[] //ready to be shown on sidebar
  title: string // Title of the section, text to be rendered on top of sidebar menu

}

interface UiContextProps {
  isHide: boolean
  toggleMenu: () => void
}

export const UiContext = createContext({} as UiContextProps)
const { Provider } = UiContext

export const ProgramScreen = ({
  children,
  sidebarItems,
  title,
}: Props) => {
  const { isHide, toggleMenu } = useUi(true)
  return (
    <>
      <Provider value={{ isHide, toggleMenu }}>
        <Sidebar
          sidebarItems={sidebarItems}
          title={title}
        />
        <div className='ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'>
          <TopMenu />

          {/* ProgramScreen ends */}

          {/* content start */}
          <div className='p-0 2xl:container'>{children}</div>

          {/* content ends */}
        </div>
      </Provider>
    </>
  )
}
