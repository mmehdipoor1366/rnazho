import { NextResponse } from 'next/server'
import { getUsers } from '../../../lib/mockData'

export async function GET() {
  try {
    const data = getUsers()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: 'unable to fetch users' }, { status: 500 })
  }
}
