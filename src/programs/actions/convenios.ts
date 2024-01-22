'use server'

import prisma from '@/lib/prisma'

export const getConveniosByProjectId = async (idPost: number) => {
  try {
    const convenios = await prisma.convenio.findMany({
      where: {
        Project: {
          some: {
            id: idPost,
          },
        },
      },
    })
    return convenios
  } catch (error) {
    throw new Error(`getConveniosByProjectId ${error}`)
  }
}

export const getConvenioById = async (id: number) => {
  try {
    const convenio = await prisma.convenio.findFirst({
      where: {
        id,
      },
    })
    return convenio
  } catch (error) {
    throw new Error(`getConvenioById ${error}`)
  }
}

export const getAllConvenios = async () => {
  try {
    const convenios = await prisma.convenio.findMany({
      include: {
        _count: {
          select: { Project: true },
        },
      },
      orderBy: {
        Project: { _count: 'desc' },
      },
    })
    return convenios
  } catch (error) {
    throw new Error(`getConveniosByProjectId ${error}`)
  }
}
