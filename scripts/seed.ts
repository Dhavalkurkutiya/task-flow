import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create users
  const john = await prisma.user.create({
    data: {
      email: 'john@example.com',
      name: 'John Doe',
    },
  })

  const jane = await prisma.user.create({
    data: {
      email: 'jane@example.com',
      name: 'Jane Smith',
    },
  })

  // Create a team
  const team = await prisma.team.create({
    data: {
      name: 'Development Team',
      users: {
        connect: [{ id: john.id }, { id: jane.id }],
      },
    },
  })

  // Create some tasks
  await prisma.task.create({
    data: {
      title: 'Setup Project Structure',
      description: 'Initialize the project and set up basic configuration',
      status: 'IN_PROGRESS',
      priority: 'HIGH',
      userId: john.id,
      teamId: team.id,
    },
  })

  await prisma.task.create({
    data: {
      title: 'Design Database Schema',
      description: 'Create initial database schema and migrations',
      status: 'TODO',
      priority: 'MEDIUM',
      userId: jane.id,
      teamId: team.id,
    },
  })

  console.log('Database has been seeded')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

