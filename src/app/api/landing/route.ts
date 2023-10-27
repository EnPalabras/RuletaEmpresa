import { NextRequest, NextResponse } from 'next/server'
import { appendData } from '@/connections/Google'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function OPTIONS(req: NextRequest, res: NextResponse) {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function POST(req: NextRequest, res: NextResponse) {
  req.headers.set('Access-Control-Allow-Origin', '*')

  try {
    const data = await req.json()

    const response = await appendData(data)

    console.log(response)

    return new NextResponse(JSON.stringify({ message: 'Ok' }), {
      status: 200,
      headers: corsHeaders,
    })
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: 'Error' }), {
      status: 500,
    })
  }
}
