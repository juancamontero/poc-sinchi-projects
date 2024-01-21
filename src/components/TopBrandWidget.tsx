import Link from 'next/link'
import { GoProjectRoadmap } from 'react-icons/go'

interface Props {
  widgetTitle?: string
  title?: string
  baseUrl?: string
  subTitle?: string
}

export const TopBrandWidget = ({
  widgetTitle = ' SINCHI | Prueba concepto',
  subTitle = 'Portal proyectos',
  baseUrl = '/',
  title = 'Programas',
}: Props) => {
  return (
    <>
      <div className='-mx-6 px-6 py-4 flex flex-col gap-1'>
        <Link href={baseUrl} title='home'>
          <GoProjectRoadmap size={56} className='mx-auto text-[#943A4A] mb-3' />
        </Link>

        <div className=' flex flex-col flex-wrap justify-start items-center'>
          <h1 className='text-center text-base font-semibold text-gray-200 lg:block ml-1'>
            {widgetTitle}
          </h1>
          <h2 className='text-center text-xs font-semibold text-gray-300 lg:block ml-1'>
            {subTitle ?? ' '}
          </h2>
        </div>
      </div>
      {/* Dynamic title */}
      <div className='text-center py-1 md:py-2 shadow-md'>
        <h5 className='text-xl font-semibold text-gray-50 lg:block tracking-wide'>
          {title}
        </h5>
      </div>
    </>
  )
}
