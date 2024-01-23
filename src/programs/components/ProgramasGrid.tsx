import Link from 'next/link'
import { getProgramByProjectId } from '..'

type Props = {
  idProject: number
}
export const ProgramasGrid = async ({ idProject }: Props) => {
  const program = await getProgramByProjectId(idProject)
  if (!program) return <></>

  return (
    <div className='flex flex-col lg:mb-0 mb-2'>
      <h6 className='text-sm font-semibold text-slate-700 mb-1 lg:mb-2'>
        Programa
      </h6>
      <div className='flex flex-row w-full gap-1 items-start'>
        <Link
          className='h-fit inline-block py-1 px-2 rounded bg-slate-700 text-slate-50 text-xs font-medium tracking-widest cursor-pointer hover:text-sky-200'
          href={`/programs/${program.id}`}
        >
          {program.name}
        </Link>
      </div>
    </div>
  )
}
