// Simple in-memory mock data shared between API route handlers.
// This lives only during the dev server process and is reset on restart.

type User = { id: string; name: string; email: string }
type Appointment = { id: string; userId: string; service: string; datetime: string; partner?: string }
type Ticket = { id: string; title: string; message: string; status: 'open' | 'closed' }

const users: User[] = [
  { id: 'u1', name: 'علی رضایی', email: 'ali@example.com' },
  { id: 'u2', name: 'نگار محمدی', email: 'negar@example.com' }
]

const appointments: Appointment[] = [
  { id: 'a1', userId: 'u1', service: 'ویزیت عمومی', datetime: new Date(Date.now() + 86400000).toISOString(), partner: 'کلینیک آریا' },
  { id: 'a2', userId: 'u2', service: 'مراقبت پوست', datetime: new Date(Date.now() + 3600 * 1000 * 48).toISOString(), partner: 'سالن نگار' }
]

const tickets: Ticket[] = [
  { id: 't1', title: 'مشکل در پرداخت', message: 'پرداخت انجام نمی‌شود', status: 'open' },
  { id: 't2', title: 'درخواست راهنمایی', message: 'چطور سرویس اضافه کنم؟', status: 'closed' }
]

export function getUsers() {
  return users
}

export function getAppointments() {
  return appointments
}

export function getTickets() {
  return tickets
}

export function addAppointment(a: Appointment) {
  appointments.push(a)
  return a
}

export function updateAppointment(id: string, patch: Partial<Appointment>) {
  const idx = appointments.findIndex((x) => x.id === id)
  if (idx === -1) return null
  appointments[idx] = { ...appointments[idx], ...patch }
  return appointments[idx]
}

export function deleteAppointment(id: string) {
  const idx = appointments.findIndex((x) => x.id === id)
  if (idx === -1) return false
  appointments.splice(idx, 1)
  return true
}

export function addTicket(t: Ticket) {
  tickets.push(t)
  return t
}

export function updateTicket(id: string, patch: Partial<Ticket>) {
  const idx = tickets.findIndex((x) => x.id === id)
  if (idx === -1) return null
  tickets[idx] = { ...tickets[idx], ...patch }
  return tickets[idx]
}
