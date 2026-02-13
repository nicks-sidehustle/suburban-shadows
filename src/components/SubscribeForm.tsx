'use client'

import { useState } from 'react'

interface SubscribeFormProps {
  source?: string
  buttonText?: string
  placeholder?: string
  compact?: boolean
  showCta?: boolean
  darkMode?: boolean
}

export function SubscribeForm({ 
  source = 'homepage',
  buttonText = 'Subscribe',
  placeholder = 'Enter your email',
  compact = false,
  showCta = false,
  darkMode = false
}: SubscribeFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }
    
    setStatus('loading')
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setStatus('success')
        setMessage(data.message || 'Successfully subscribed!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to subscribe')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`text-center py-4 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
        <span className="text-2xl">✓</span>
        <p className="font-medium mt-2">{message}</p>
        <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Check your inbox for a confirmation email.
        </p>
      </div>
    )
  }

  const inputClasses = darkMode
    ? `flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg border focus:outline-none transition ${
        status === 'error' 
          ? 'border-red-500' 
          : 'border-gray-600 focus:border-white'
      }`
    : `flex-1 px-4 py-3 bg-white text-gray-900 rounded-lg border focus:outline-none transition ${
        status === 'error' 
          ? 'border-red-500' 
          : 'border-gray-300 focus:border-red-700'
      }`

  const buttonClasses = darkMode
    ? `px-6 py-3 bg-[#c9a227] hover:bg-[#d4ad2d] text-black font-medium rounded-lg transition ${
        status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
      }`
    : `px-6 py-3 bg-red-700 hover:bg-red-600 text-white font-medium rounded-lg transition ${
        status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
      }`

  return (
    <div className={compact ? '' : 'space-y-4'}>
      {showCta && !compact && (
        <p className={`text-sm text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Subscribe to receive weekly AI accountability updates.
        </p>
      )}
      
      <form onSubmit={handleSubmit} className={`flex ${compact ? 'gap-2' : 'gap-3 flex-col sm:flex-row'} max-w-md mx-auto`}>
        <input 
          type="email" 
          placeholder={placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          className={inputClasses}
          disabled={status === 'loading'}
        />
        <button 
          type="submit"
          disabled={status === 'loading'}
          className={buttonClasses}
        >
          {status === 'loading' ? 'Subscribing...' : buttonText}
        </button>
      </form>
      
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">
          {message}
        </p>
      )}
    </div>
  )
}
