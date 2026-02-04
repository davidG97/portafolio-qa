import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaRobot, FaCircle } from 'react-icons/fa'
import packageJson from '../../package.json'

export default function Footer() {
  const year = new Date().getFullYear()
  const version = packageJson.version
  return (
    <footer className='bg-gradient-to-r from-gray-100 via-white to-gray-50 shadow-md border-t-2 border-cyan-400 dark:bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-900 dark:shadow-2xl dark:border-t-4 dark:border-cyan-500'>
      <div className='container mx-auto px-4 py-10'>
        <div className='flex justify-between items-start mb-8'>
          <div className='flex items-center gap-3'>
            <FaRobot size={28} className='text-cyan-700 dark:text-cyan-400 animate-pulse' />
            <div>
              <h3 className='font-bold text-cyan-700 dark:text-cyan-400 text-xl tracking-widest'>ROBOT QA v{version}</h3>
              <p className='text-sm text-cyan-600 dark:text-cyan-300 mt-1 font-mono'>[ MANUFACTURED BY DAVID GARCIA ]</p>
            </div>
          </div>
          <div className='flex gap-5'>
            <a href='https://github.com/edavidgv' target='_blank' rel='noopener noreferrer' className='text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-100 transition hover:scale-110'>
              <FaGithub size={24} />
            </a>
            <a href='https://www.linkedin.com/in/erney-david-garcia-vergara-298a65193' target='_blank' rel='noopener noreferrer' className='text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-100 transition hover:scale-110'>
              <FaLinkedin size={24} />
            </a>
            <a href='mailto:e.davidgv@hotmail.com' className='text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-100 transition hover:scale-110'>
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        <div className='border-t border-cyan-300 dark:border-cyan-600 pt-5 text-sm text-cyan-600 dark:text-cyan-300 font-mono'>
          <div className='flex items-center gap-2 mb-2'>
            <FaCircle size={8} className='text-cyan-700 dark:text-cyan-400 animate-pulse' /> 
            <p>© {year} DAVID GARCIA ROBOT SYSTEMS - ALL RIGHTS RESERVED</p>
          </div>
          <p className='text-xs text-cyan-700 dark:text-cyan-400'>&gt; SYSTEM UPTIME: 24/7 | VERSION: {version} | STATUS: OPERATIONAL</p>
        </div>
      </div>
    </footer>
  )
}