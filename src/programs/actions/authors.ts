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
