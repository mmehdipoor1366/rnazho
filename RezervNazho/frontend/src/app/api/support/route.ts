import { NextResponse } from 'next/server'
import { getTickets, addTicket, updateTicket } from '../../../lib/mockData'

export async function GET() {
  try {
    const data = getTickets()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: 'unable to fetch tickets' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const id = 't' + Date.now().toString()
    const t = { id, ...body }
    addTicket(t as any)
    return NextResponse.json(t, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'invalid body' }, { status: 400 })
  }
}

export async function PUT(req: Request) {
  try {
    const url = new URL(req.url)
    const id = url.searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })
    const patch = await req.json()
    const updated = updateTicket(id, patch)
    if (!updated) return NextResponse.json({ error: 'not found' }, { status: 404 })
    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: 'invalid request' }, { status: 400 })
  }
}