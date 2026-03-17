import { useState } from 'react'
import { supabase, isConfigured } from '../lib/supabase'

const TABLE = 'waitlist'

function normalise(v) { return v.trim().toLowerCase() }
function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) }

async function copyShareLink() {
  const url = `${location.origin}${location.pathname}?ref=waitlist`
  try {
    await navigator.clipboard.writeText(url)
    return `Share link copied to clipboard!`
  } catch {
    return `You're in! Share: ${url}`
  }
}

export function useWaitlist() {
  const [email,   setEmail]   = useState('')
  const [status,  setStatus]  = useState('idle')   // idle | loading | success | warning | error
  const [message, setMessage] = useState('')

  async function submit(e) {
    e.preventDefault()

    const addr = normalise(email)
    if (!validEmail(addr)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    if (!isConfigured) {
      setStatus('warning')
      setMessage('Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env to activate sign-ups.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      // Duplicate check
      const { data: existing, error: checkErr } = await supabase
        .from(TABLE)
        .select('id')
        .eq('email', addr)
        .maybeSingle()

      if (checkErr) throw checkErr

      if (existing) {
        setStatus('warning')
        setMessage("You're already on the waitlist — we'll reach out first!")
        setEmail('')
        return
      }

      // Insert
      const { error: insertErr } = await supabase
        .from(TABLE)
        .insert({ email: addr, source: 'landing_page', created_at: new Date().toISOString() })

      if (insertErr) {
        // Handle unique-constraint race condition
        if (insertErr.code === '23505') {
          setStatus('warning')
          setMessage("You're already on the waitlist!")
          setEmail('')
          return
        }
        throw insertErr
      }

      const shareMsg = await copyShareLink()
      setStatus('success')
      setMessage(`🎉 You're in! ${shareMsg}`)
      setEmail('')
    } catch (err) {
      console.error(err)
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return { email, setEmail, status, message, submit }
}
