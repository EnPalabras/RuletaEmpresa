import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface Payload {
  date: string
  email: string | null
  question: string
  type: string
}

export async function POST(req: NextRequest, res: NextResponse) {
  req.headers.set('Access-Control-Allow-Origin', '*')

  try {
    const data: Payload = await req.json()

    await prisma.tirada.create({
      data: {
        email: data.email,
        question: data.question,
        type: data.type,
      },
    })

    return new NextResponse(JSON.stringify({ message: 'Ok' }), { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: 'Error' }), {
      status: 500,
    })
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  // const URL = 'https://api.myperfit.com/v2/enpalabras/lists/41'
  // const GET_CONTACTS_FROM_LIST =
  //   'https://api.myperfit.com/v2/enpalabras/contacts?limit=20&filter%5Blist%5D=41'

  const URL = 'https://api.myperfit.com/v2/enpalabras/lists'

  const response = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${process.env.PERFIT_API_KEY}`,
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  return new NextResponse(JSON.stringify(data), {
    status: 200,
  })
}
