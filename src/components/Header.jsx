import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaRobot, FaMoon, FaSun, FaTerminal, FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [bootComplete, setBootComplete] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const stored = (() => { try { return localStorage.getItem('theme') } catch (e) { return null } })()
    const rootHas = document.documentElement.classList.contains('dark')
    if (stored === 'dark' || rootHas) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
    // Boot animation
    setTimeout(() => setBootComplete(true), 500)
  }, [])

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navItems = [
    { path: '/projects', label: 'MISIONES', code: '01' },
    { path: '/about', label: 'SISTEMA', code: '02' },
    { path: '/contact', label: 'TRANSMITIR', code: '03' },
  ]

  const toggleTheme = () => {
    const willBeDark = !document.documentElement.classList.contains('dark')
    if (willBeDark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    try { localStorage.setItem('theme', willBeDark ? 'dark' : 'light') } catch (e) {}
    setIsDark(willBeDark)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-gray-100 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900'
    } border-b-2 border-cyan-400 dark:border-b-4 dark:border-cyan-500 scanlines`}>
      <div className='container mx-auto px-4 py-3 md:py-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2 md:gap-3'>
          <div className='relative'>
            <FaRobot size={28} className='text-cyan-700 dark:text-cyan-400 md:w-9 md:h-9' />
            <span className='status-online absolute -top-1 -right-1'></span>
          </div>
          <Link to='/' className='group'>
            <span className='text-lg md:text-2xl font-bold text-cyan-700 dark:text-cyan-400 tracking-widest hover:text-cyan-600 dark:hover:text-cyan-300 transition font-mono glitch-text' data-text='ROBOT_QA'>
              ROBOT_QA
            </span>
            <div className={`text-[10px] md:text-xs font-mono mt-0.5 md:mt-1 flex items-center gap-1 md:gap-2 ${bootComplete ? 'text-green-500' : 'text-cyan-500'}`}>
              <FaTerminal size={8} className='md:w-2.5 md:h-2.5' />
              <span className={bootComplete ? '' : 'typing-cursor'}>
                {bootComplete ? '> READY' : '> BOOT...'}
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-1 font-mono text-sm'>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 rounded transition-all hover-lift group ${
                location.pathname === item.path
                  ? 'bg-cyan-600 text-white dark:bg-cyan-500 dark:text-black neon-box'
                  : 'text-cyan-600 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/50'
              }`}
            >
              <span className='text-xs opacity-50 mr-1'>[{item.code}]</span>
              {item.label}
              {location.pathname === item.path && (
                <span className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 dark:bg-cyan-300 rotate-45'></span>
              )}
            </Link>
          ))}
          
          {/* Theme Toggle - Desktop */}
          <button
            onClick={toggleTheme}
            aria-pressed={isDark}
            className='ml-4 relative w-16 h-8 bg-gradient-to-r from-cyan-200 to-cyan-300 dark:from-cyan-800 dark:to-cyan-700 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 flex items-center border-2 border-cyan-400 dark:border-cyan-500 neon-box'
            aria-label='Toggle dark mode'
          >
            <span className='absolute left-1.5 text-yellow-500 pointer-events-none'>
              <FaSun size={14} />
            </span>
            <span className='absolute right-1.5 text-cyan-300 pointer-events-none'>
              <FaMoon size={14} />
            </span>
            <span
              className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white dark:bg-gray-900 rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center ${isDark ? 'translate-x-8' : 'translate-x-0'}`}
            >
              <span className='w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400'></span>
            </span>
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className='flex md:hidden items-center gap-3'>
          {/* Theme Toggle - Mobile */}
          <button
            onClick={toggleTheme}
            className='p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-600'
            aria-label='Toggle dark mode'
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='relative p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-600 z-50'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className={`transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'} absolute inset-0 flex items-center justify-center`}>
              <FaBars size={18} />
            </span>
            <span className={`transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'} flex items-center justify-center`}>
              <FaTimes size={18} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <nav className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 z-40 md:hidden transform transition-transform duration-300 ease-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } shadow-2xl border-l-2 border-cyan-400 dark:border-cyan-500`}>
        <div className='pt-20 px-6'>
          <div className='text-xs font-mono text-cyan-500 dark:text-cyan-400 mb-4 flex items-center gap-2'>
            <FaTerminal size={10} />
            <span>{'>'} NAVIGATION_MENU</span>
          </div>
          
          <div className='space-y-2'>
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg font-mono text-sm transition-all transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                } ${
                  location.pathname === item.path
                    ? 'bg-cyan-600 text-white dark:bg-cyan-500 dark:text-black neon-box'
                    : 'text-cyan-600 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-transparent hover:border-cyan-300 dark:hover:border-cyan-600'
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms' }}
              >
                <span className='text-xs opacity-50 mr-2'>[{item.code}]</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Status Footer in Mobile Menu */}
          <div className='absolute bottom-8 left-6 right-6'>
            <div className='text-xs font-mono text-gray-400 dark:text-gray-500 space-y-1'>
              <div className='flex items-center gap-2'>
                <span className='status-online'></span>
                <span>SISTEMA_ACTIVO</span>
              </div>
              <div>VER: 2.0.0</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}