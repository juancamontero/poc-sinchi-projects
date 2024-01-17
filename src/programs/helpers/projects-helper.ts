import prisma from '@/lib/prisma'

// import { seedPrograms } from "./seed-constants"

import {
  Convenio,
  Departamento,
  Program,
  Project,
  Tag,
  User,
} from '@prisma/client'

// export const getAllPrograms =  () => {
export const getAllPrograms = async (): Promise<Program[]> => {
  try {
    const programs = await prisma.program.findMany({
      orderBy: {
        id: 'asc',
      },
    })
    return programs
  } catch (error) {
    return [
      {
        id: 0,
        name: 'error program',
        slug: 'error',
        order: 99,
        description: '',
        objetivo: '',
      },
    ]
  }

  // return seedPrograms
}

export const getAllProjects = async (): Promise<Project[] | undefined> => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        year: 'desc',
      },
    })
    return projects
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getTagsByProjectId = async (idPost: number): Promise<Tag[]> => {
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
    throw new Error(`${error}`)
  }
}

export const getRegionsByProjectId = async (
  idPost: number
): Promise<Departamento[]> => {
  try {
    const departamentos = await prisma.departamento.findMany({
      where: {
        Project: {
          some: {
            id: idPost,
          },
        },
      },
    })
    return departamentos
  } catch (error) {
    throw new Error(`${error}`)
  }
}

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

export const getProjectsByProgramId = async (
  idProgram: number,
): Promise<Project[] | null> => {
  try {
   

    const projects = await prisma.project.findMany({
      where: {
        id: idProgram
      },
    })
    return projects
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getProjectsByTagId = async (
  idTag: number,

): Promise<Project[] | null> => {
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

export const getTagById = async (id: number): Promise<Tag | null> => {
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

export const getProjectsByRegionId = async (
  idRegion: number
): Promise<Project[] | null> => {
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
    throw new Error(`${error}`)
  }
}

export const getRegionById = async (
  id: number
): Promise<Departamento | null> => {
  try {
    const depto = await prisma.departamento.findFirst({
      where: {
        id,
      },
    })
    return depto
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getProgramNameById = async (id: number): Promise<string> => {
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

export const getProjectsByUserId = async (
  idUser: number,
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
