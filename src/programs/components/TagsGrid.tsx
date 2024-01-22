import Link from 'next/link'
import { getTagsByProjectId } from '..'

type Props = {
  idProject: number
}
export const TagsGrid = async ({ idProject }: Props) => {
  const tags = await getTagsByProjectId(idProject)

  if (!tags) return <></>
  return (
    <>
      <div className='flex flex-row flex-wrap w-full gap-1'>
        {tags.map((tag) => (
          <Link
            key={tag.id}
            className='inline-block py-1 px-2 rounded bg-slate-200 text-slate-500 text-xs font-medium tracking-widest cursor-pointer hover:text-blue-400'
            href={`/tags/${tag.id}`}
          >
            {tag.name}
          </Link>
        ))}
      </div>
    </>
  )
}
