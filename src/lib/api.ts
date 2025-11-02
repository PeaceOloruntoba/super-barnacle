export type ContactPayload = {
  name: string
  email: string
  subject?: string
  message: string
}

export async function sendContact(payload: ContactPayload) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(text || `Request failed with ${res.status}`)
  }
  return res.json()
}
