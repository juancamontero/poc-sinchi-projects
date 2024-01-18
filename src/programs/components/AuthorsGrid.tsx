import Link from 'next/link'
import { BsPerson } from 'react-icons/bs'
import { getAuthorsByProjectId } from '..'

type Props = {
  idProject: number
}

export const AuthorsGrid = async ({ idProject }: Props) => {
  const authors = await getAuthorsByProjectId(idProject)
  return (
    <>
      <div className='flex flex-row flex-nowrap items-start justify-between gap-2'>
        <BsPerson size={48} />
        <div className='flex flex-row flex-wrap gap-1 items-start'>
          {authors.map((author) => (
            <Link
              className='inline-flex items-center hover:text-blue-600'
              href={`/programs/user/${author.id}`}
              key={author.id}
            >
              <div className='flex-grow flex flex-col pl-4'>
                <span className='text-xs font-medium text-gray-900  hover:text-blue-600'>
                  {author.name}
                </span>
                <span className='text-xs font-medium text-gray-600  hover:text-blue-600'>
                  {author.email}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
