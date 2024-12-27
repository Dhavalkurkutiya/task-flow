import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ message: 'User with this email already exists' }, { status: 409 }) 
    }

    // Hash the password
    const hashedPassword = await hash(password, 10)

    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    // Remove password from the response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword, { status: 201 })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json({ message: 'An error occurred while creating the user.' }, { status: 500 })
  }
}