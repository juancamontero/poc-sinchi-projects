import Link from 'next/link'
import { GoProjectRoadmap } from 'react-icons/go'

interface Props {
  title: string
  homeUrl: string
  subTitle?: string
}

export const TopBrandWidget = ({ title, subTitle, homeUrl }: Props) => {
  return (
    <>
      <div className='-mx-6 px-6 py-4 flex flex-col gap-1'>
        <Link href={homeUrl} title='home'>
          <GoProjectRoadmap size={56} className='mx-auto text-[#943A4A] mb-3' />
          {/* <Image
        width={28}
        height={28}
        src='/logo_nav.png'
        alt='sinchi logo'
      /> */}
        </Link>

        <div className=' flex flex-col flex-wrap justify-start items-center'>
          <h1 className='hidden text-center text-base font-semibold text-gray-200 lg:block ml-1'>
            {title}
          </h1>
          <h2 className='hidden text-center text-xs font-semibold text-gray-300 lg:block ml-1'>
            {subTitle ?? ' '}
          </h2>
        </div>
      </div>
      {/* Dynamic title */}
      <div className='text-center py-1 md:py-2 shadow-md'>
        <h5 className='text-xl font-semibold text-gray-50 lg:block tracking-wide'>
          Programas
        </h5>
      </div>
    </>
  )
}
