'use server'

import prisma from '@/lib/prisma'

export const getProjectsByProgramId = async (idProgram: number) => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        idProgram,
      },
      orderBy: [{ year: 'desc' }],
    })
    return projects
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getAllProjects = async () => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ year: 'desc' }],
    })
    return projects
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getProjectsByTagId = async (idTag: number) => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        tags: {
          some: {
            id: idTag,
          },
        },
      },
    })

    return projects
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getProjectsByRegionId = async (idRegion: number) => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        departamentos: {
          some: {
            id: idRegion,
          },
        },
      },
    })
    return projects
  } catch (error) {
    throw new Error(`getProjectsByRegionId ${error}`)
  }
}
