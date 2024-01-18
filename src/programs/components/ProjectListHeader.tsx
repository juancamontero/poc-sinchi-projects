// 'use client'


// import { useParams, usePathname } from 'next/navigation'

interface Props {
  title: string
  preTitle?: string
  email?: string
}

export const ProjectListHeader = ({ title, preTitle, email }: Props) => {
  // const params = useParams()
  // const pathName = usePathname()

  // let baseNav = ''
  // if (params.state) {
  //   baseNav = pathName.replace(`/${params.state}`, '')
  // } else {
  //   baseNav = pathName
  // }

  return (
    <div className='bg-slate-800 w-full p-8 flex flex-col items-start mb-6'>
      {preTitle && <h2 className='text-gray-300 text-sm'>{preTitle}</h2>}
      <h1 className='text-white text-2xl'>{title}</h1>
      {email && (
        <a
          className='text-xs mb-2 text-slate-100 hover:text-sky-200'
          href={`mailto:${email}`}
        >
          {email}
        </a>
      )}
      {/* <div className='flex flex-row flex-wrap gap-1 mt-2 text-[10px]'>
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
      </div> */}
    </div>
  )
}
