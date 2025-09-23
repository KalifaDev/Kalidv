export const runtime = 'nodejs';
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const { nom, prenom, email, contenu } = await req.json()
    const message = await prisma.message.create({
      data: { nom, prenom, email, contenu }
    })
    return NextResponse.json({ success: true, message})
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 })
  }
}
