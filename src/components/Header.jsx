import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaRobot, FaMoon, FaSun } from 'react-icons/fa'

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = (() => { try { return localStorage.getItem('theme') } catch (e) { return null } })()
    const rootHas = document.documentElement.classList.contains('dark')
    if (stored === 'dark' || rootHas) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }, [])

  return (
    <header className='bg-gradient-to-r from-gray-100 via-white to-gray-50 shadow-md border-b-2 border-cyan-400 dark:bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-900 dark:shadow-2xl dark:border-b-4 dark:border-cyan-500'>
      <div className='container mx-auto px-4 py-6 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <FaRobot size={32} className='text-cyan-700 dark:text-cyan-400 animate-pulse' />
          <Link to='/' className='text-2xl font-bold text-cyan-700 dark:text-cyan-400 tracking-widest hover:text-cyan-600 dark:hover:text-cyan-300 transition'>
            ROBOT QA v2.0
          </Link>
          <span className='text-xs text-cyan-600 dark:text-cyan-300 ml-2 font-mono'>[ STATUS: ONLINE ]</span>
        </div>
        <nav className='space-x-6 text-sm text-cyan-600 dark:text-cyan-200 flex items-center font-mono'>
          <Link to='/projects' className='hover:text-cyan-700 dark:hover:text-cyan-300 transition font-medium'>PROYECTOS</Link>
          <Link to='/about' className='hover:text-cyan-700 dark:hover:text-cyan-300 transition font-medium'>SISTEMA</Link>
          <Link to='/contact' className='hover:text-cyan-700 dark:hover:text-cyan-300 transition font-medium'>CONTACTO</Link>
          <button
            onClick={() => {
              const willBeDark = !document.documentElement.classList.contains('dark')
              if (willBeDark) document.documentElement.classList.add('dark')
              else document.documentElement.classList.remove('dark')
              try { localStorage.setItem('theme', willBeDark ? 'dark' : 'light') } catch (e) {}
              setIsDark(willBeDark)
            }}
            aria-pressed={isDark}
            className='ml-4 relative w-14 h-8 bg-cyan-300 dark:bg-cyan-700 rounded-full transition-colors focus:outline-none flex items-center'
            aria-label='Toggle dark mode'
          >
            <span className='absolute left-1 text-yellow-400 dark:text-yellow-300 pointer-events-none'>
              <FaSun size={14} />
            </span>
            <span className='absolute right-1 text-gray-800 dark:text-gray-200 pointer-events-none'>
              <FaMoon size={14} />
            </span>
            <span
              className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
            />
          </button>
        </nav>
      </div>
    </header>
  )
}