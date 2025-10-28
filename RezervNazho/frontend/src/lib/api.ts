const BASE = process.env.NEXT_PUBLIC_API_BASE_URL || ''

async function safeFetch(path: string, opts?: RequestInit) {
  const url = (BASE || '') + path
  const res = await fetch(url, opts)
  if (!res.ok) {
    const txt = await res.text()
    throw new Error(txt || 'API error')
  }
  return res.json()
}

export function getUsers() {
  return safeFetch('/api/users')
}

export function getAppointments() {
  return safeFetch('/api/appointments')
}

export function createAppointment(payload: any) {
  return safeFetch('/api/appointments', { method: 'POST', body: JSON.stringify(payload), headers: { 'Content-Type': 'application/json' } })
}

export function updateAppointment(id: string, payload: any) {
  return safeFetch(`/api/appointments?id=${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(payload), headers: { 'Content-Type': 'application/json' } })
}

export function deleteAppointment(id: string) {
  return safeFetch(`/api/appointments?id=${encodeURIComponent(id)}`, { method: 'DELETE' })
}

export function getTickets() {
  return safeFetch('/api/support')
}

export function createTicket(payload: any) {
  return safeFetch('/api/support', { method: 'POST', body: JSON.stringify(payload), headers: { 'Content-Type': 'application/json' } })
}

export function updateTicket(id: string, payload: any) {
  return safeFetch(`/api/support?id=${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(payload), headers: { 'Content-Type': 'application/json' } })
}
