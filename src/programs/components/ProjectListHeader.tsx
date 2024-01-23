// 'use client'

// import { useParams, usePathname } from 'next/navigation'

interface Props {
  title: string
  preTitle?: string
  subTitle?: string
  projectsCount?: number
}

export const ProjectListHeader = ({
  title,
  preTitle,
  subTitle,
  projectsCount=0,
}: Props) => {
  // const params = useParams()
  // const pathName = usePathname()

  // let baseNav = ''
  // if (params.state) {
  //   baseNav = pathName.replace(`/${params.state}`, '')
  // } else {
  //   baseNav = pathName
  // }

  return (
    <div className='bg-slate-800 w-full lg:p-8 py-6 flex flex-row lg:flex-wrap flex-nowrap items-center gap-3 mb-6 justify-start px-2'>


      {projectsCount > 0 && (
        <h2 className='text-sky-600 font-extrabold lg:text-7xl  text-6xl pr-1 w-20 text-center lg:w-auto px-2'>
          {projectsCount}
        </h2>
      )}

      <div className='flex flex-col items-start px-1 w-auto'>
        {preTitle && (
          <h2 className='text-gray-300 text-sm lg:pr-0 pr-1'>{preTitle}</h2>
        )}
        <h1 className='text-white text-xl lg:text-2xl'>{title}</h1>
        {subTitle && (
          <a
            className='text-xs mb-2 text-slate-100 hover:text-sky-200'
            href={`mailto:${subTitle}`}
          >
            {subTitle}
          </a>
        )}
      </div>
    </div>
  )
}

//TODO: Completed filters
{
  /* <div className='flex flex-row flex-wrap gap-1 mt-2 text-[10px]'>
        <Link
          href={`${baseNav}`}
          className={`inline-block py-1 px-2  font-medium tracking-widest cursor-pointer hover:bg-slate-50 ${
            params.state
              ? ' bg-slate-200 text-slate-500'
              : ' text-slate-200 bg-slate-500'
          }`}
        >
          Todos
        </Link>

        <Link
          href={`${baseNav}/terminados`}
          className={`inline-block py-1 px-2  font-medium tracking-widest cursor-pointer hover:bg-slate-50 ${
            params.state === 'terminados'
              ? 'text-slate-700 bg-green-200'
              : 'bg-slate-200 text-slate-500'
          }`}
        >
          Terminados
        </Link>

        <Link
          href={`${baseNav}/no-terminados`}
          className={`inline-block py-1 px-2  font-medium tracking-widest cursor-pointer hover:bg-slate-50 ${
            params.state === 'no-terminados'
              ? 'text-slate-700 bg-yellow-200'
              : 'bg-slate-200 text-slate-500'
          }`}
        >
          En ejecucción
        </Link>
      </div> */
}
