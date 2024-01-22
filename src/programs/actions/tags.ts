'use server'

import prisma from '@/lib/prisma'

export const getTagsByProjectId = async (idPost: number) => {
  try {
    const tags = await prisma.tag.findMany({
      where: {
        Project: {
          some: {
            id: idPost,
          },
        },
      },
    })
    return tags
  } catch (error) {
    throw new Error(`Tags connection not available: ${error}`)
  }
}

export const getTagById = async (id: number) => {
  try {
    const tag = await prisma.tag.findFirst({
      where: {
        id,
      },
    })
    return tag
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getAllTags = async () => {
  try {
    const convenios = await prisma.tag.findMany({
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
    throw new Error(`getAllTags ${error}`)
  }
}
