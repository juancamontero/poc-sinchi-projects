import { TbLoaderQuarter } from 'react-icons/tb'

type Props = {
  message?: string
}

export const LoaderGeneral = ({ message = 'cargando' }: Props) => {
  return (
    <div className='relative overflow-hidden  flex flex-col items-center justify-center h-dvh w-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-800 m-auto'>
      <svg
        className='animate-spin mb-3 h-16 w-16 text-sky-200'
        viewBox='0 0 24 24'
      >
        <TbLoaderQuarter />
      </svg>
      {/* <h2 className='text-sky-300  text-xl whitespace-normal max-w-xs text-center'>
        ... {message} ...
      </h2> */}
    </div>
  )
}
