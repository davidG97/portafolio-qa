import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaRobot, FaCircle, FaMemory, FaMicrochip, FaServer, FaWifi } from 'react-icons/fa'
import packageJson from '../../package.json'

export default function Footer() {
  const year = new Date().getFullYear()
  const version = packageJson.version
  const [uptime, setUptime] = useState(0)
  const [systemStats] = useState({
    cpu: Math.floor(Math.random() * 20) + 10,
    memory: Math.floor(Math.random() * 30) + 40,
    network: 'STABLE'
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatUptime = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <footer className='bg-gradient-to-r from-gray-100 via-white to-gray-50 shadow-md border-t-2 border-cyan-400 dark:bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-900 dark:shadow-2xl dark:border-t-4 dark:border-cyan-500 scanlines'>
      <div className='container mx-auto px-4 py-8'>
        {/* System Status Bar */}
        <div className='mb-6 p-4 bg-gray-50 dark:bg-gray-900/80 rounded-lg border border-cyan-200 dark:border-cyan-800 font-mono text-xs'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2 text-cyan-700 dark:text-cyan-400'>
                <FaMicrochip className='animate-pulse' />
                <span>CPU: {systemStats.cpu}%</span>
              </div>
              <div className='flex items-center gap-2 text-cyan-700 dark:text-cyan-400'>
                <FaMemory className='animate-pulse' />
                <span>MEM: {systemStats.memory}%</span>
              </div>
              <div className='flex items-center gap-2 text-green-600 dark:text-green-400'>
                <FaWifi className='animate-pulse' />
                <span>NET: {systemStats.network}</span>
              </div>
            </div>
            <div className='flex items-center gap-2 text-cyan-600 dark:text-cyan-300'>
              <FaServer />
              <span>UPTIME: {formatUptime(uptime)}</span>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-start mb-6'>
          <div className='flex items-center gap-3'>
            <div className='relative'>
              <FaRobot size={32} className='text-cyan-700 dark:text-cyan-400' />
              <span className='status-online absolute -bottom-1 -right-1'></span>
            </div>
            <div>
              <h3 className='font-bold text-cyan-700 dark:text-cyan-400 text-xl tracking-widest font-mono'>
                ROBOT_QA
              </h3>
              <p className='text-xs text-cyan-600 dark:text-cyan-300 mt-1 font-mono'>
                MANUFACTURED_BY: DAVID_GARCIA
              </p>
            </div>
          </div>
          <div className='flex gap-3'>
            <a href='https://github.com/edavidgv' target='_blank' rel='noopener noreferrer' className='p-3 rounded-lg border-2 border-cyan-300 dark:border-cyan-600 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black transition-all hover-lift neon-box'>
              <FaGithub size={20} />
            </a>
            <a href='https://www.linkedin.com/in/erney-david-garcia-vergara-298a65193' target='_blank' rel='noopener noreferrer' className='p-3 rounded-lg border-2 border-cyan-300 dark:border-cyan-600 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black transition-all hover-lift neon-box'>
              <FaLinkedin size={20} />
            </a>
            <a href='mailto:e.davidgv@hotmail.com' className='p-3 rounded-lg border-2 border-cyan-300 dark:border-cyan-600 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black transition-all hover-lift neon-box'>
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        
        <div className='border-t border-cyan-300 dark:border-cyan-700 pt-4 text-sm text-cyan-600 dark:text-cyan-400 font-mono'>
          <div className='flex flex-wrap items-center justify-between gap-2'>
            <div className='flex items-center gap-2'>
              <p>© {year} | ALL_RIGHTS_RESERVED</p>
            </div>
            <p className='text-xs text-cyan-500 dark:text-cyan-500'>
              {'>'} BUILD: {version} | STATUS: <span className='text-green-500'>OPERATIONAL</span> | LOCATION: BOGOTA_CO
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}