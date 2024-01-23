import { HiEmojiSad } from 'react-icons/hi'
import { TbHandFinger } from 'react-icons/tb'

interface Props {
  message?: string
}

export const NoProjects = (props: Props) => {
  const { message } = props
  return (
    <div className='w-10/12 h-full flex flex-col justify-around items-center m-auto p-2 lg:p-8 bg-gray-50 '>
      <span className='text-sky-600'>
        <TbHandFinger size={72}/>
      </span>
      <h1 className='text-sky-600 text-4xl lg:text-7xl font-bold py-4 text-center'>No tiene proyectos en la base de datos</h1>
      <span className='text-red-600 mt-8'>
        <HiEmojiSad size={68}/>
      </span>

      {message && <h6>{message}</h6>}
    </div>
  )
}
