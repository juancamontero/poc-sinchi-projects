'use server'
import prisma from '@/lib/prisma'
import { Program } from '@prisma/client'

export const getAllPrograms = async () => {
  try {
    const programs = await prisma.program.findMany({
      include: {
        _count: {
          select: { Project: true },
        },
      },
      orderBy: {
        order: 'asc',
      },
    })
    return programs
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getProgramByProjectId = async (
  idPost: number
): Promise<Program | null> => {
  try {
    const program = await prisma.program.findFirst({
      where: {
        Project: {
          some: {
            id: idPost,
          },
        },
      },
    })
    return program
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getProgramNameById = async (id: number) => {
  try {
    const program = await prisma.program.findFirst({
      where: {
        id,
      },
    })
    return program?.name ?? 'program'
  } catch (error) {
    throw new Error(`${error}`)
  }
}
