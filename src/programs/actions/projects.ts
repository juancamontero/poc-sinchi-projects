'use server'

import prisma from '@/lib/prisma'

export const getProjectsByProgramId = async (
  idProgram: number
) => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        idProgram
      },
      orderBy: [{ year: 'desc' }, { title: 'asc' }],
    })
    return projects
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getAllProjects = async () => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ year: 'desc' }, { title: 'asc' }],
    })
    return projects
  } catch (error) {
    throw new Error(`${error}`)
  }
}
