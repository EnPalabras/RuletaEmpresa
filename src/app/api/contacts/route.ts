import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface Payload {
  email: string | null | undefined
}

type ListType = {
  id: number
  name: string
}

const PERFIT_LIST: number = 67

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
    const email: Payload = await req.json()

    const SEARCH_CONTACT = await fetch(
      `https://api.myperfit.com/v2/enpalabras/contacts?q=${email}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.PERFIT_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    const searchData = await SEARCH_CONTACT.json()

    if (!searchData.success) {
      return new NextResponse(JSON.stringify(searchData.error), {
        status: searchData.error.status,
      })
    }

    if (searchData.data.length > 0) {
      const id: string = searchData.data[0].id

      const GET_CONTACT = await fetch(
        `https://api.myperfit.com/v2/enpalabras/contacts/${id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.PERFIT_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      )

      const getData = await GET_CONTACT.json()

      if (!getData.success) {
        return new NextResponse(JSON.stringify(getData.error), {
          status: getData.error.status,
        })
      }

      const lists: number[] = getData.data.lists.map(
        (list: ListType) => list.id
      )

      const EDIT_CONTACT = await fetch(
        `https://api.myperfit.com/v2/enpalabras/contacts/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            lists: [...lists, PERFIT_LIST],
          }),
          headers: {
            Authorization: `Bearer ${process.env.PERFIT_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      )

      const editData = await EDIT_CONTACT.json()

      if (!editData.success) {
        return new NextResponse(JSON.stringify(editData.error), {
          status: editData.error.status,
        })
      }

      return new NextResponse(JSON.stringify(editData), {
        status: 200,
      })
    }

    const URL = 'https://api.myperfit.com/v2/enpalabras/contacts'

    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        lists: [PERFIT_LIST],
        language: 'es',
      }),

      headers: {
        Authorization: `Bearer ${process.env.PERFIT_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!data.success) {
      return new NextResponse(JSON.stringify(data.error), {
        status: data.error.status,
      })
    }

    return new NextResponse(JSON.stringify(data), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: 'Error' }), {
      status: 500,
    })
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const GET_CONTACTS_FROM_LIST =
      'https://api.myperfit.com/v2/enpalabras/contacts?limit=20&filter%5Blist%5D=62'
    const URL = 'https://api.myperfit.com/v2/enpalabras/contacts/128'

    const response = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${process.env.PERFIT_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    if (!data.success) {
      return new NextResponse(JSON.stringify(data.error), {
        status: 500,
      })
    }

    return new NextResponse(JSON.stringify(data), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: 'Error' }), {
      status: 500,
    })
  }
  // const URL = 'https://api.myperfit.com/v2/enpalabras/lists/41'
}
