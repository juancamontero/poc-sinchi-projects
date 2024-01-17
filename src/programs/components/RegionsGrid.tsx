import Link from 'next/link'
import { getRegionsByProjectId } from '..'

type Props = {
  idProject: number
}

export const RegionsGrid = async ({ idProject }: Props) => {
  const regions = await getRegionsByProjectId(idProject)

  if (!regions) return <></>
  return (
    <>
      <div className='flex flex-row flex-wrap w-full gap-1 ml-4 justify-end'>
        {regions.map((reg) => (
          <Link
            href={`/programas/region/${reg.id}`}
            key={reg.id}
            className='h-6 inline-block py-1 px-2 rounded bg-slate-300 text-green-900 text-xs font-medium tracking-widest cursor-pointer hover:text-green-400'
          >
            {reg.name}
          </Link>
        ))}
      </div>
    </>
  )
}
