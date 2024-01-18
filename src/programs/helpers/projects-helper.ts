import prisma from '@/lib/prisma'

// import { seedPrograms } from "./seed-constants"

import { Convenio, Project, User } from '@prisma/client'

export const getAuthorsByProjectId = async (
  idPost: number
): Promise<User[]> => {
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
    throw new Error(`${error}`)
  }
}

export const getConveniosByProjectId = async (
  idPost: number
): Promise<Convenio[]> => {
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
    throw new Error(`${error}`)
  }
}

export const getProjectsByUserId = async (
  idUser: number
): Promise<Project[] | null> => {
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
    throw new Error(`${error}`)
  }
}

export const getUserById = async (id: number): Promise<User | null> => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    })
    return user
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getProjectsByConvenioId = async (
  idConvenio: number
): Promise<Project[] | null> => {
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
    throw new Error(`${error}`)
  }
}

export const getConvenioById = async (id: number): Promise<Convenio | null> => {
  try {
    const convenio = await prisma.convenio.findFirst({
      where: {
        id,
      },
    })
    return convenio
  } catch (error) {
    throw new Error(`${error}`)
  }
}
