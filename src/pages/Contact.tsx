import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
      <h1>Contact Us</h1>
      {sent ? (
        <p>Thanks — your message was submitted (demo only).</p>
      ) : (
        <form onSubmit={handleSubmit} aria-label="Contact form">
          <div style={{ display: 'grid', gap: 12 }}>
            <label>
              Name
              <input name="name" required style={{ width: '100%' }} />
            </label>
            <label>
              Email
              <input name="email" type="email" required style={{ width: '100%' }} />
            </label>
            <label>
              Message
              <textarea name="message" required rows={6} style={{ width: '100%' }} />
            </label>
            <button type="submit">Send message</button>
          </div>
        </form>
      )}
    </div>
  )
}
