import { prisma } from './prisma'
import { Prisma } from '@prisma/client'

// User functions
export async function getUser(id: string) {
  return await prisma.user.findUnique({
    where: { id },
    include: { tasks: true, teams: true },
  })
}

export async function createUser(data: Prisma.UserCreateInput) {
  return await prisma.user.create({ data })
}

export async function updateUser(id: string, data: Prisma.UserUpdateInput) {
  return await prisma.user.update({ where: { id }, data })
}

// Task functions
export async function getTasks(userId: string) {
  return await prisma.task.findMany({
    where: { createdById: userId },
    include: { assignedTo: true, team: true, tags: true },
  })
}

export async function createTask(data: Prisma.TaskCreateInput) {
  return await prisma.task.create({ 
    data: {
      ...data,
      status: data.status || 'TODO',
      priority: data.priority || 'MEDIUM',
    },
    include: { assignedTo: true, team: true, tags: true },
  })
}

export async function updateTask(id: string, data: Prisma.TaskUpdateInput) {
  return await prisma.task.update({
    where: { id },
    data,
    include: { assignedTo: true, team: true, tags: true },
  })
}

export async function deleteTask(id: string) {
  return await prisma.task.delete({ where: { id } })
}

// Team functions
export async function getTeam(id: string) {
  return await prisma.team.findUnique({
    where: { id },
    include: { users: true, tasks: true },
  })
}

export async function createTeam(data: Prisma.TeamCreateInput) {
  return await prisma.team.create({ 
    data,
    include: { users: true },
  })
}

export async function updateTeam(id: string, data: Prisma.TeamUpdateInput) {
  return await prisma.team.update({
    where: { id },
    data,
    include: { users: true },
  })
}

// Comment functions
export async function createComment(data: Prisma.CommentCreateInput) {
  return await prisma.comment.create({ data })
}

export async function getTaskComments(taskId: string) {
  return await prisma.comment.findMany({
    where: { taskId },
    include: { user: true },
  })
}

// Tag functions
export async function createTag(data: Prisma.TagCreateInput) {
  return await prisma.tag.create({ data })
}

export async function getTags() {
  return await prisma.tag.findMany()
}

