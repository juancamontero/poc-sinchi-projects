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

export const getProjectsByUserId = async (idUser: number) => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        authors: {
          some: {
            id: idUser,
          },
        },
      },
    })
    return projects
  } catch (error) {
    throw new Error(`getProjectsByUserId ${error}`)
  }
}

export const getProjectsByConvenioId = async (idConvenio: number) => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        convenios: {
          some: {
            id: idConvenio,
          },
        },
      },
    })
    return projects
  } catch (error) {
    throw new Error(`getProjectsByConvenioId ${error}`)
  }
}


export const getAllProjectsWithConvenio = async () => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ year: 'desc' }],
      where: {
        convenios: {
          some: {}
        }
      },
      include: {
        convenios: true
      }
    })
    return projects
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getAllProjectsWithRegion = async () => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ year: 'desc' }],
      where: {
        departamentos: {
          some: {}
        }
      },
      include: {
        departamentos: true
      }
    })
    return projects
  } catch (error) {
    throw new Error(`${error}`)
  }
}