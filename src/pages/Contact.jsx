import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Gracias por tu mensaje. Te contactaré pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black py-12'>
      <div className='w-full px-6'>
        <div className='mb-8'>
          <h1 className='text-5xl font-bold mb-2 text-cyan-700 dark:text-cyan-200 font-mono tracking-widest'>[ CONTACTAR AL ROBOT ]</h1>
          <p className='text-gray-600 dark:text-cyan-200 font-mono'>&gt; ESTABLECER CONEXIÓN CON DAVID GARCIA | PROTOCOLO DE COMUNICACIÓN INICIADO</p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-2xl font-bold mb-6 text-cyan-700 font-mono tracking-widest flex items-center gap-2 border-b-2 border-cyan-300 pb-3'>
            <FaEnvelope size={24} className='text-cyan-700 animate-pulse' /> INFORMACIÓN DE CONTACTO
          </h2>
          <div className='space-y-4'>
            <div className='flex items-start gap-3 p-4 bg-white dark:bg-gray-900 border-l-4 border-cyan-300 dark:border-cyan-700 rounded hover:shadow-md hover:shadow-cyan-200/30 transition dark:text-gray-200'>
              <FaEnvelope className='mt-1 text-cyan-700 animate-pulse' />
              <div>
                <p className='font-bold text-cyan-700 font-mono'>EMAIL</p>
                <a href='mailto:e.davidgv@hotmail.com' className='text-cyan-600 hover:text-cyan-700 underline font-mono'>e.davidgv@hotmail.com</a>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white dark:bg-gray-900 border-l-4 border-cyan-300 dark:border-cyan-700 rounded hover:shadow-md hover:shadow-cyan-200/30 transition dark:text-gray-200'>
              <FaPhone className='mt-1 text-cyan-700 animate-pulse' />
              <div>
                <p className='font-bold text-cyan-700 font-mono'>TELÉFONO</p>
                <p className='text-gray-600 font-mono'>+57 322 3394079</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white dark:bg-gray-900 border-l-4 border-cyan-300 dark:border-cyan-700 rounded hover:shadow-md hover:shadow-cyan-200/30 transition dark:text-gray-200'>
              <FaMapMarkerAlt className='mt-1 text-cyan-700 animate-pulse' />
              <div>
                <p className='font-bold text-cyan-700 font-mono'>UBICACIÓN</p>
                <p className='text-gray-600 font-mono'>BOGOTÁ, COLOMBIA</p>
              </div>
            </div>
          </div>

          <h2 className='text-2xl font-bold mt-8 mb-6 text-cyan-400 font-mono tracking-widest border-b-2 border-cyan-500 pb-3'>REDES SOCIALES</h2>
          <div className='flex gap-4'>
            <a href='https://github.com/edavidgv' target='_blank' rel='noopener noreferrer' className='p-3 bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500 text-cyan-400 rounded hover:bg-cyan-600 hover:text-black hover:shadow-lg hover:shadow-cyan-600/60 transition animate-pulse'>
              <FaGithub size={24} />
            </a>
            <a href='https://www.linkedin.com/in/erney-david-garcia-vergara-298a65193' target='_blank' rel='noopener noreferrer' className='p-3 bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500 text-cyan-400 rounded hover:bg-cyan-600 hover:text-black hover:shadow-lg hover:shadow-cyan-600/60 transition animate-pulse'>
              <FaLinkedin size={24} />
            </a>
            <a href='mailto:e.davidgv@hotmail.com' className='p-3 bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500 text-cyan-400 rounded hover:bg-cyan-600 hover:text-black hover:shadow-lg hover:shadow-cyan-600/60 transition animate-pulse'>
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-bold mb-6 text-cyan-400 font-mono tracking-widest border-b-2 border-cyan-500 pb-3'>TRANSMITIR MENSAJE</h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-sm font-bold text-cyan-400 font-mono mb-2'>► NOMBRE DEL REMITENTE</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border-2 border-cyan-500 bg-white dark:bg-gray-900 text-gray-700 dark:text-cyan-200 font-mono rounded focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-500/50'
                placeholder='Tu nombre'
              />
            </div>
            <div>
              <label className='block text-sm font-bold text-cyan-400 font-mono mb-2'>► DIRECCIÓN DE CORREO</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border-2 border-cyan-500 bg-white dark:bg-gray-900 text-gray-700 dark:text-cyan-200 font-mono rounded focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-500/50'
                placeholder='tu@email.com'
              />
            </div>
            <div>
              <label className='block text-sm font-bold text-cyan-400 font-mono mb-2'>► CONTENIDO DEL MENSAJE</label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows='5'
                className='w-full px-3 py-2 border-2 border-cyan-500 bg-white dark:bg-gray-900 text-gray-700 dark:text-cyan-200 font-mono rounded focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-500/50'
                placeholder='Tu mensaje aquí...'
              />
            </div>
            <button type='submit' className='w-full px-6 py-3 bg-cyan-600 text-black rounded font-bold font-mono hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-600/60 transition border-2 border-cyan-400'>
              ENVIAR TRANSMISIÓN
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  )
}