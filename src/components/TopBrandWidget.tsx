import Link from 'next/link'
import { GoProjectRoadmap } from 'react-icons/go'

interface Props {
  widgetTitle?: string
  title?: string
  baseUrl?: string
  subTitle?: string
}

export const TopBrandWidget = ({
  widgetTitle = ' SINCHI | proyectos',
  subTitle = 'Prueba de concepto',
  baseUrl = '/',
}: Props) => {
  return (
    <>
      <Link
        href={baseUrl}
        title='home'
        className='lg:mx-auto -mx-6 px-6 py-1 lg:p-4 flex flex-row gap-1 lg:justify-start justify-center'
      >
        <span className='my-auto'>
          <GoProjectRoadmap className='mx-auto text-[#943A4A] h-10 w-10 lg:w-14 lg:h-14' />
        </span>

        <div className=' flex flex-col flex-wrap justify-start items-start py-1'>
          <h1 className='text-left text-base font-semibold text-gray-200 lg:block ml-1'>
            {widgetTitle}
          </h1>
          <h2 className='text-left  text-xs font-semibold text-gray-300 lg:block ml-1'>
            {subTitle ?? ' '}
          </h2>
        </div>
      </Link>

    </>
  )
}
