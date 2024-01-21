'use client'
import { createContext } from 'react'

import { Program } from '@prisma/client'

import { TopMenu } from '@/components'
import { ProgramSidebar } from '..'
import { useUi } from './useUi'

interface Props {
  children: React.ReactNode
  programs: Program[]
  title: string // Title of the section, text to be rendered on top of sidebar menu
  baseUrl: string //The base URL of the layout where tje screen is rendered
  baseTitle: string //The will be used to render the first sidebar item
}

interface UiContextProps {
  isHide: boolean
  toggleMenu: () => void
}

export const UiContext = createContext({} as UiContextProps)
const { Provider } = UiContext

export const ProgramScreen = ({
  children,
  programs,
  title,
  baseUrl,
  baseTitle,
}: Props) => {
  const { isHide, toggleMenu } = useUi(true)
  return (
    <>
      <Provider value={{ isHide, toggleMenu }}>
        <ProgramSidebar
          programs={programs}
          title={title}
          baseUrl={baseUrl}
          baseTitle={baseTitle}
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
