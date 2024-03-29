'use server'

import prisma from '@/lib/prisma'

export const getRegionsByProjectId = async (idProject: number) => {
  try {
    const departamentos = await prisma.departamento.findMany({
      where: {
        Project: {
          some: {
            id: idProject,
          },
        },
      },
    })
    return departamentos
  } catch (error) {
    throw new Error(`getRegionsByProjectId ${error}`)
  }
}

export const getRegionById = async (id: number) => {
  try {
    const depto = await prisma.departamento.findFirst({
      where: {
        id,
      },
    })
    return depto
  } catch (error) {
    throw new Error(`getRegionsByProjectId ${error}`)
  }
}

export const getAllRegions = async () => {
  try {
    const convenios = await prisma.departamento.findMany({
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
    throw new Error(`getAllRegions ${error}`)
  }
}