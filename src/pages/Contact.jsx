import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTerminal, FaSatelliteDish, FaWifi, FaCheckCircle } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate sending
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 3000)
    }, 1500)
  }

  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black py-8 md:py-12 circuit-bg header-offset'>
      <div className='w-full px-4 md:px-6'>
        {/* Header */}
        <ScrollReveal animation='fade-up' className='mb-6 md:mb-8'>
          <div className='flex items-center gap-2 md:gap-3 mb-2'>
            <FaSatelliteDish className='text-cyan-600 dark:text-cyan-400 animate-pulse w-6 h-6 md:w-7 md:h-7' />
            <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold text-cyan-700 dark:text-cyan-300 font-mono tracking-wider md:tracking-widest glitch-text neon-glow' data-text='[ TRANSMIT ]'>
              [ TRANSMIT ]
            </h1>
          </div>
          <p className='text-gray-600 dark:text-cyan-200 font-mono text-xs md:text-base flex items-center gap-2'>
            <FaTerminal className='animate-pulse flex-shrink-0' />
            <span className='typing-cursor'>{`>`} ESTABLISHING_CONNECTION...</span>
          </p>
        </ScrollReveal>

        {/* Connection Status */}
        <ScrollReveal animation='scale' className='mb-6 md:mb-8 p-3 md:p-4 border-2 border-cyan-300 dark:border-cyan-600 rounded-lg bg-white dark:bg-gray-900 neon-box font-mono text-xs md:text-sm'>
          <div className='flex flex-wrap items-center gap-3 md:gap-6 text-cyan-600 dark:text-cyan-400'>
            <span className='flex items-center gap-2'>
              <span className='status-online'></span>
              STATUS: ONLINE
            </span>
            <span className='flex items-center gap-2'>
              <FaWifi className='animate-pulse text-green-500' />
              SIGNAL: STRONG
            </span>
            <span className='text-green-500 hidden sm:inline'>
              {`>`} READY ✓
            </span>
          </div>
        </ScrollReveal>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {/* Contact Info */}
          <ScrollReveal animation='fade-left'>
            <h2 className='text-xl md:text-2xl font-bold mb-4 md:mb-6 text-cyan-700 dark:text-cyan-300 font-mono tracking-wider md:tracking-widest flex items-center gap-2 border-b-2 border-cyan-300 dark:border-cyan-600 pb-2 md:pb-3'>
              <FaEnvelope size={20} className='text-cyan-600 dark:text-cyan-400 md:w-6 md:h-6' /> CONTACT_INFO
            </h2>
            <div className='space-y-3 md:space-y-4'>
              {[
                { icon: FaEnvelope, label: 'EMAIL', value: 'e.davidgv@hotmail.com', href: 'mailto:e.davidgv@hotmail.com' },
                { icon: FaPhone, label: 'PHONE', value: '+57 322 3394079', href: null },
                { icon: FaMapMarkerAlt, label: 'LOCATION', value: 'BOGOTÁ_COLOMBIA', href: null },
              ].map((item, i) => (
                <div key={i} className='flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-white dark:bg-gray-900 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg hover-lift neon-box'>
                  <item.icon className='mt-1 text-cyan-600 dark:text-cyan-400 flex-shrink-0' />
                  <div className='min-w-0'>
                    <p className='font-bold text-cyan-700 dark:text-cyan-300 font-mono text-xs md:text-sm'>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className='text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 underline font-mono text-xs md:text-sm break-all'>
                        {item.value}
                      </a>
                    ) : (
                      <p className='text-gray-600 dark:text-gray-300 font-mono text-xs md:text-sm'>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h2 className='text-xl md:text-2xl font-bold mt-6 md:mt-8 mb-4 md:mb-6 text-cyan-700 dark:text-cyan-300 font-mono tracking-wider md:tracking-widest border-b-2 border-cyan-300 dark:border-cyan-600 pb-2 md:pb-3'>
              NETWORK_LINKS
            </h2>
            <div className='flex gap-3 md:gap-4'>
              {[
                { icon: FaGithub, href: 'https://github.com/edavidgv', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/erney-david-garcia-vergara-298a65193', label: 'LinkedIn' },
                { icon: FaEnvelope, href: 'mailto:e.davidgv@hotmail.com', label: 'Email' },
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.href} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='p-3 md:p-4 bg-white dark:bg-gray-900 border-2 border-cyan-300 dark:border-cyan-600 text-cyan-600 dark:text-cyan-400 rounded-lg hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black transition-all hover-lift neon-box'
                  aria-label={item.label}
                >
                  <item.icon size={20} className='md:w-6 md:h-6' />
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal animation='fade-right'>
            <h2 className='text-xl md:text-2xl font-bold mb-4 md:mb-6 text-cyan-700 dark:text-cyan-300 font-mono tracking-wider md:tracking-widest border-b-2 border-cyan-300 dark:border-cyan-600 pb-2 md:pb-3'>
              SEND_TRANSMISSION
            </h2>
            
            {sent && (
              <div className='mb-3 md:mb-4 p-3 md:p-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-400 dark:border-green-600 rounded-lg font-mono text-green-700 dark:text-green-400 flex items-center gap-2 neon-box text-xs md:text-base'>
                <FaCheckCircle />
                {`>`} TRANSMITTED ✓
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-3 md:space-y-4'>
              <div>
                <label className='block text-xs md:text-sm font-bold text-cyan-700 dark:text-cyan-400 font-mono mb-1.5 md:mb-2'>
                  {`>`} SENDER_NAME
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-cyan-300 dark:border-cyan-600 bg-white dark:bg-gray-900 text-gray-700 dark:text-cyan-200 font-mono rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 neon-box text-sm md:text-base'
                  placeholder='YOUR_NAME'
                />
              </div>
              <div>
                <label className='block text-xs md:text-sm font-bold text-cyan-700 dark:text-cyan-400 font-mono mb-1.5 md:mb-2'>
                  {`>`} EMAIL_ADDRESS
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-cyan-300 dark:border-cyan-600 bg-white dark:bg-gray-900 text-gray-700 dark:text-cyan-200 font-mono rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 neon-box text-sm md:text-base'
                  placeholder='your@email.com'
                />
              </div>
              <div>
                <label className='block text-xs md:text-sm font-bold text-cyan-700 dark:text-cyan-400 font-mono mb-1.5 md:mb-2'>
                  {`>`} MESSAGE_CONTENT
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='4'
                  className='w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-cyan-300 dark:border-cyan-600 bg-white dark:bg-gray-900 text-gray-700 dark:text-cyan-200 font-mono rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 neon-box text-sm md:text-base md:rows-5'
                  placeholder='Your message here...'
                />
              </div>
              <button 
                type='submit' 
                disabled={sending}
                className='w-full px-4 md:px-6 py-3 md:py-4 bg-cyan-600 text-white rounded-lg font-bold font-mono hover:bg-cyan-500 transition neon-box hover-lift disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base'
              >
                {sending ? (
                  <>
                    <span className='animate-spin'>⟳</span> TRANSMITTING...
                  </>
                ) : (
                  <>
                    <FaSatelliteDish /> SEND_TRANSMISSION
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}