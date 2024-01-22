'use server'

import prisma from '@/lib/prisma'

export const getAuthorsByProjectId = async (idPost: number) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        Project: {
          some: {
            id: idPost,
          },
        },
      },
    })
    return users
  } catch (error) {
    throw new Error(`getAuthorsByProjectId ${error}`)
  }
}

export const getUserById = async (id: number)=> {
    try {
      const user = await prisma.user.findFirst({
        where: {
          id,
        },
      })
      return user
    } catch (error) {
      throw new Error(`getUserById ${error}`)
    }
  }


export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      include: {
        _count: {
          select: { Project: true },
        },
      },
      orderBy: {
        Project: { _count: 'desc' },
      },
    })
    return users
  } catch (error) {
    throw new Error(`getAllUsers ${error}`)
  }
}
