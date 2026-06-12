import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSending(true)

    try {
      const response = await fetch('https://formsubmit.co/ajax/sharmashutosh02@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New contact form message',
          _captcha: 'false',
        }),
      })

      const data = await response.json()

      if (!response.ok || data.success === false) {
        throw new Error(data.message || 'Unable to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    } catch (err) {
      setError('Could not send message. Please try again later.')
    } finally {
      setSending(false)
    }
  }

  const mailtoLink = `mailto:sharmashutosh02@gmail.com?subject=${encodeURIComponent(
    'Contact: ' + (formData.name || '')
  )}&body=${encodeURIComponent(
    (formData.message || '') + "\n\nFrom: " + (formData.email || '')
  )}`

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Get In Touch</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white font-display mb-6 leading-tight">
              Let's build something <span className="gradient-text">great</span>
            </h1>
            <p className="text-lg text-surface-400 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Tell us your idea and let's
              turn it into reality.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-card glow-border rounded-3xl p-8 lg:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-emerald-400 text-3xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white font-display mb-2">Message Sent!</h3>
                    <p className="text-surface-400">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-bold text-surface-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3.5 bg-surface-900 border border-surface-700 rounded-xl text-white placeholder:text-surface-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-bold text-surface-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                          className="w-full px-4 py-3.5 bg-surface-900 border border-surface-700 rounded-xl text-white placeholder:text-surface-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                      </div>
                    </div>



                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-bold text-surface-300 mb-2">
                        Tell us about your project
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Describe your project, goals, and timeline..."
                        className="w-full px-4 py-3.5 bg-surface-900 border border-surface-700 rounded-xl text-white placeholder:text-surface-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      />
                    </div>

                    {error && (
                      <div className="space-y-2">
                        <p className="text-sm text-rose-400">{error}</p>
                        <a
                          href={mailtoLink}
                          className="inline-block text-sm text-primary hover:underline"
                        >
                          Send via your email client
                        </a>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className={`w-full py-4 rounded-xl font-bold text-lg glow-hover ${sending ? 'bg-surface-700 text-surface-400 cursor-not-allowed' : 'bg-gradient-primary text-white'}`}
                    >
                      {sending ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Studio Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card glow-border rounded-2xl p-8">
                <h3 className="text-lg font-bold text-white font-display mb-6">Studio Details</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">mail</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-surface-300">Email</p>
                      <a href="mailto:sharmashutosh02@gmail.com" className="text-sm text-surface-500 hover:text-primary transition-colors">
                        sharmashutosh02@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">phone</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-surface-300">Phone</p>
                      <a href="tel:+919256280731" className="text-sm text-surface-500 hover:text-primary transition-colors">
                        +91 92562 80731
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-surface-300">Location</p>
                      <p className="text-sm text-surface-500">India — Working Remotely</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card glow-border rounded-2xl p-8">
                <h3 className="text-lg font-bold text-white font-display mb-4">Response Time</h3>
                <p className="text-surface-400 text-sm leading-relaxed mb-4">
                  We typically respond within 24 hours. For urgent inquiries, please mention it in
                  your message.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['AA', 'AK', 'KA'].map((init, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs font-bold ring-2 ring-background"
                      >
                        {init}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-surface-500">
                    <span className="text-emerald-400 font-bold">●</span> Team is online
                  </p>
                </div>
              </div>


            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
