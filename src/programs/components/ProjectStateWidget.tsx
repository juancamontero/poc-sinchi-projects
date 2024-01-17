type Props = {
  completed: boolean
}
export const ProjectStateWidget = ({ completed }: Props) => {
  return (
    <>
      <span
        className={`inline-block py-1 px-4 text-center roundedtext-xs font-medium tracking-widest w-40 mb-2 text-xs
        ${completed ? ' bg-green-200' : ' bg-yellow-200 text-slate-900'}`}
      >
        {completed ? 'TERMINADO' : 'EN EJECUCIÓN'}
      </span>
    </>
  )
}
