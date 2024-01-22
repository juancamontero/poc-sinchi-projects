import Link from 'next/link'
import { getConveniosByProjectId } from '..'

type Props = {
  idProject: number
}
export const ConveniosGrid = async ({ idProject }: Props) => {
  const convenios = await getConveniosByProjectId(idProject)
  if (!convenios) return <></>
  return (
    <div className='flex flex-col'>
      <h6 className='text-sm font-semibold text-slate-700 mb-2'>Convenios</h6>
      <div className='flex flex-row flex-wrap w-full gap-1 items-start'>
        {convenios.map((conv) => (
          <Link
            href={`/convenios/${conv.id}`}
            key={conv.id}
            className='h-6 inline-block py-1 px-2 rounded bg-slate-500 text-slate-50 text-xs font-medium tracking-widest cursor-pointer hover:text-blue-300'
          >
            {conv.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
