import Link from 'next/link'
import { ProjectStateWidget } from '..'

import { TagsGrid } from './TagsGrid'
import { IoLinkOutline } from 'react-icons/io5'
import { GoNote } from 'react-icons/go'

import { RegionsGrid } from './RegionsGrid'
import { AuthoresGrid } from './AuthoresGrid'
import { ConveniosGrid } from './ConveniosGrid'
import { ProgramasGrid } from './ProgramasGrid'
import { Project } from '@prisma/client'


type Props = {
  project: Project
}

export const ProjectItem = ({ project }: Props) => {
  const {
    id,
    idProgram,
    title,
    description,
    completed,
    year,
    urlResumen,
    urlProject,
  } = project

  return (
    <div className='p-4 flex flex-col flex-wrap items-start bg-slate-100 w-full'>
      {/* Category item */}
      {/* TODO : Category/Tags Grid */}
      <div className='flex flex-row justify-between w-full mb-2'>
        <h2 className='text-left text-xl font-extrabold text-gray-900'>
          {year}
        </h2>
        <ProjectStateWidget completed={completed} />
      </div>
      {/* <TagsGrid idProject={id} /> */}

      {/* TITLE */}
      <h2 className=' text-xl font-medium text-gray-900 mt-4 mb-2'>
        {title}
      </h2>
      {/* Description */}
      <p className='text-sm leading-relaxed mb-8'>{description}</p>

      <div className='flex flex-row justify-between w-full'>
        {/* links */}
        <div className='flex flex-col  items-start flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-3/4'>
          {urlResumen ? (
            <Link
              target='_blank'
              className='text-blue-500 inline-flex items-center mb-2'
              href={urlResumen}
            >
              <GoNote size={24} />
              <span className='ml-3 text-sm'>Resumen ejecutivo</span>
            </Link>
          ) : (
            <></>
          )}
          {urlProject ? (
            <Link
              target='_blank'
              className='text-blue-500 inline-flex items-center mb-2'
              href={urlProject}
            >
              <IoLinkOutline size={24} />
              <span className='ml-3 text-sm'>Url proyecto</span>
            </Link>
          ) : (
            <></>
          )}
        </div>

        {/* <RegionsGrid idProject={id} /> */}
      </div>

      {/* autores */}
      {/* <AuthoresGrid idProject={id}  /> */}
      <div className='flex flex-row justify-between mt-4 w-full bg-slate-200 p-6'>
        {/* <ConveniosGrid idProject={id} /> */}
        <ProgramasGrid idProject={id} />
      </div>
      {/* TODO: Convenio */}
    </div>
  )
}
