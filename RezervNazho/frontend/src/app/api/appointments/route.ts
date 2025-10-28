import { NextResponse } from 'next/server'
import { getAppointments, addAppointment, updateAppointment, deleteAppointment } from '../../../lib/mockData'

export async function GET() {
  try {
    const data = getAppointments()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: 'unable to fetch appointments' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const id = 'a' + Date.now().toString()
    const a = { id, ...body }
    addAppointment(a as any)
    return NextResponse.json(a, { status: 201 })
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
    const updated = updateAppointment(id, patch)
    if (!updated) return NextResponse.json({ error: 'not found' }, { status: 404 })
    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: 'invalid request' }, { status: 400 })
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url)
    const id = url.searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })
    const ok = deleteAppointment(id)
    return NextResponse.json({ ok })
  } catch (err) {
    return NextResponse.json({ error: 'invalid request' }, { status: 400 })
  }
}
