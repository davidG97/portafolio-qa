import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaGithub, FaCheckCircle, FaRocket, FaAward, FaBriefcase, FaBug, FaFire, FaCertificate, FaUsers, FaTerminal, FaCog, FaDatabase, FaMicrochip, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal'

import profilePhoto from '../static/photo_profile.jpeg'

export default function Home() {
  const [bootSequence, setBootSequence] = useState(0)
  const [showContent, setShowContent] = useState(false)

  // Función para calcular edad exacta
  const calculateAge = (birthYear, birthMonth, birthDay) => {
    const today = new Date()
    const birth = new Date(birthYear, birthMonth - 1, birthDay)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  // Función para calcular años de experiencia exactos
  const calculateExperience = (startYear, startMonth) => {
    const today = new Date()
    const start = new Date(startYear, startMonth - 1, 1)
    let years = today.getFullYear() - start.getFullYear()
    const monthDiff = today.getMonth() - start.getMonth()
    if (monthDiff < 0) {
      years--
    }
    return years
  }

  useEffect(() => {
    const bootMessages = ['INITIALIZING...', 'LOADING_MODULES...', 'SYSTEM_READY']
    let step = 0
    const interval = setInterval(() => {
      step++
      setBootSequence(step)
      if (step >= bootMessages.length) {
        clearInterval(interval)
        setTimeout(() => setShowContent(true), 300)
      }
    }, 400)
    return () => clearInterval(interval)
  }, [])

  const skills = [
    { icon: FaCode, label: 'AUTOMATION_E2E', desc: 'Selenium, Cypress, GitHub Actions', code: 'MOD_001' },
    { icon: FaCheckCircle, label: 'PERF_TESTING', desc: 'Gatling, APIs, Stress Testing', code: 'MOD_002' },
    { icon: FaGithub, label: 'CI_CD_OPS', desc: 'GitHub Actions, Git, DevOps', code: 'MOD_003' },
    { icon: FaRocket, label: 'QA_STRATEGY', desc: 'Indicadores, Estándares, Liderazgo', code: 'MOD_004' },
  ]

  const stats = [
    { label: 'AÑOS_EXPERIENCIA', value: `${calculateExperience(2021, 1)}+`, icon: FaBriefcase },
    { label: 'CERTIFICACIONES', value: '7', icon: FaCertificate },
    { label: 'PERSONAS_LIDERADAS', value: '15+', icon: FaUsers },
    { label: 'PROYECTOS_A_CARGO', value: '5', icon: FaProjectDiagram },
  ]

  const technologies = [
    { name: 'Serenity BDD', proficiency: 90 },
    { name: 'GitHub Actions', proficiency: 88 },
    { name: 'Gatling', proficiency: 85 },
    { name: 'Rest Assured', proficiency: 95 },
  ]

  const certifications = [
    { title: 'ISTQB Foundation Level', issuer: 'ISTQB', year: '2023' },
    { title: 'Git & GitHub Actions', issuer: 'Udemy', year: '2024' },
  ]

  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-black circuit-bg header-offset'>
      <div className='w-full py-8 md:py-12 px-4 md:px-6'>
        {/* Boot Sequence */}
        <div className={`mb-6 md:mb-8 font-mono text-xs md:text-sm transition-opacity duration-500 ${showContent ? 'opacity-50' : 'opacity-100'}`}>
          <div className='flex items-center gap-2 text-cyan-600 dark:text-cyan-400'>
            <FaTerminal className='animate-pulse' />
            <span className='typing-cursor'>
              {bootSequence === 0 && '> BOOTING_ROBOT_QA_SYSTEM...'}
              {bootSequence === 1 && '> LOADING_CORE_MODULES...'}
              {bootSequence === 2 && '> INITIALIZING_DAVID_GARCIA_UNIT...'}
              {bootSequence >= 3 && '> ALL_SYSTEMS_OPERATIONAL ✓'}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        {showContent && (
          <div className='hero-appear mb-12 md:mb-16 p-4 md:p-8 bg-gradient-to-r from-white to-gray-50 border-2 border-cyan-300 shadow-lg rounded-xl dark:bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-900 dark:border-4 dark:border-cyan-500 neon-box scanlines'>
            <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
              {/* Photo */}
              <div className='flex-shrink-0 flex justify-center md:justify-start'>
                <div className='relative group'>
                  {/* Outer glow ring */}
                  <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-500 animate-pulse'></div>
                  {/* Photo container */}
                  <div className='relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cyan-400 dark:border-cyan-500 shadow-lg shadow-cyan-500/30'>
                    <img 
                      src={profilePhoto} 
                      alt='David García - QA Lead' 
                      className='w-full h-full object-cover filter saturate-[0.9] contrast-[1.1] brightness-[1.05] group-hover:saturate-100 transition duration-500'
                    />
                    {/* Scan line overlay */}
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent opacity-50 pointer-events-none'></div>
                    {/* Corner accents */}
                    <div className='absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400'></div>
                    <div className='absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400'></div>
                    <div className='absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400'></div>
                    <div className='absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400'></div>
                  </div>
                  {/* Status indicator */}
                  <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center shadow-lg shadow-green-500/50'>
                    <div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className='flex-1'>
                <div className='flex items-center gap-2 md:gap-3 mb-3 md:mb-4'>
                  <FaMicrochip className='text-cyan-600 dark:text-cyan-400 animate-pulse' size={20} />
                  <span className='text-[10px] md:text-xs font-mono text-cyan-500 dark:text-cyan-500'>UNIT_ID: DG-2024-QA</span>
                </div>
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-cyan-700 dark:text-cyan-400 tracking-wider md:tracking-widest font-mono glitch-text neon-glow' data-text='[ ROBOT_QA ]'>
                  [ ROBOT_QA ]
                </h1>
                <p className='text-sm md:text-xl text-cyan-600 dark:text-cyan-300 font-semibold mb-3 md:mb-4 font-mono flex items-center gap-2'>
                  <FaCog className='animate-spin flex-shrink-0' style={{ animationDuration: '3s' }} />
                  <span className='typing-cursor'>{'>'} EXECUTING: DAVID_GARCIA.init()</span>
                </p>
                <div className='border-l-4 border-cyan-300 dark:border-cyan-500 pl-3 md:pl-4 bg-gray-50/50 dark:bg-black/50 p-3 md:p-4 rounded-r mb-4'>
                  <p className='text-sm md:text-base text-gray-700 dark:text-cyan-200 font-mono leading-relaxed'>
                    <span className='text-cyan-500'>[CORE_INFO]</span> Unidad principal <span className='text-cyan-600 dark:text-cyan-300 font-bold'>DAVID_GARCIA</span> - Ingeniero Electrónico especializado en sistemas de automatización avanzada. Misión: erradicar bugs y elevar la calidad del software a niveles exponenciales. 🤖⚡
                  </p>
                </div>
                
                {/* Skills Badges - Integrados en Hero */}
                <div className='flex flex-wrap gap-2 md:gap-3'>
                  {skills.map((skill, i) => {
                    const Icon = skill.icon
                    return (
                      <div key={i} className='flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-300 dark:border-cyan-700 rounded-full hover:bg-cyan-100 dark:hover:bg-cyan-900/50 transition group cursor-default'>
                        <Icon size={14} className='text-cyan-600 dark:text-cyan-400 md:w-4 md:h-4' />
                        <span className='text-xs md:text-sm font-mono font-semibold text-cyan-700 dark:text-cyan-300'>{skill.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        {showContent && (
        <ScrollReveal animation='scale' className='mb-12 md:mb-16 p-6 md:p-10 bg-gradient-to-r from-white to-gray-50 rounded-xl border-2 border-cyan-300 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-900 dark:border-cyan-500 neon-box'>
          <h2 className='text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-cyan-700 dark:text-cyan-400 text-center font-mono tracking-wider md:tracking-widest flex items-center justify-center gap-2 md:gap-3'>
            <FaDatabase className='animate-pulse' />
            [ SYSTEM_SPECS ]
          </h2>
          <div className='grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4'>
            {stats.map((stat, i) => {
              const StatIcon = stat.icon
              return (
                <div key={i} className='text-center p-4 md:p-6 bg-white rounded-lg border-2 border-cyan-300 hover-lift dark:bg-black dark:border-cyan-600 neon-box'>
                  <StatIcon size={32} className='mb-2 md:mb-3 text-cyan-700 mx-auto dark:text-cyan-400 md:w-11 md:h-11' />
                  <p className='text-2xl md:text-4xl font-bold text-cyan-700 mb-1 md:mb-2 font-mono neon-glow dark:text-cyan-300'>{stat.value}</p>
                  <p className='text-gray-600 text-[10px] md:text-xs font-mono dark:text-cyan-200'>{stat.label}</p>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
        )}

        {/* Current Position Highlight */}
        {showContent && (
        <ScrollReveal animation='fade-up' className='mb-12 md:mb-16'>
          <div className='p-4 md:p-6 border-2 border-green-400 dark:border-green-500 rounded-xl bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-950/30 dark:to-cyan-950/30 neon-box'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3'>
              <div className='flex items-center gap-3'>
                <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50'></div>
                <div>
                  <p className='text-xs font-mono text-green-600 dark:text-green-400 mb-1'>[CURRENT_MISSION]</p>
                  <h3 className='text-lg md:text-xl font-bold text-cyan-700 dark:text-cyan-300 font-mono'>QA_LEAD_TECH_AUTOMATION</h3>
                </div>
              </div>
              <div className='flex items-center gap-4 ml-6 md:ml-0'>
                <div className='text-right'>
                  <p className='text-xs font-mono text-gray-500 dark:text-gray-400'>ORG:</p>
                  <p className='text-sm md:text-base font-bold text-cyan-600 dark:text-cyan-400 font-mono'>BANCO_DE_BOGOTÁ</p>
                </div>
                <div className='text-right'>
                  <p className='text-xs font-mono text-gray-500 dark:text-gray-400'>DESDE:</p>
                  <p className='text-sm md:text-base font-bold text-cyan-600 dark:text-cyan-400 font-mono'>NOV_2023</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        )}

        {/* Technologies */}
        {showContent && (
        <ScrollReveal animation='fade-up' className='mb-12 md:mb-16'>
          <h2 className='text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-cyan-700 dark:text-cyan-400 font-mono tracking-wider md:tracking-widest flex items-center gap-2 md:gap-3'>
            <FaMicrochip className='animate-pulse' />
            [ TOP_MODULES ]
          </h2>
          <div className='grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            {technologies.map((tech, i) => (
              <div key={i} className='p-4 md:p-6 bg-white dark:bg-gray-900 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg hover-lift neon-box dark:text-gray-200'>
                <div className='flex items-center justify-between mb-2 md:mb-3'>
                  <h3 className='font-bold text-cyan-700 dark:text-cyan-300 font-mono text-base md:text-lg'>{tech.name}</h3>
                  <span className='text-xs md:text-sm font-bold text-cyan-600 dark:text-cyan-400 font-mono'>{tech.proficiency}%</span>
                </div>
                <div className='w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3 md:h-4 overflow-hidden border-2 border-cyan-200 dark:border-cyan-700'>
                  <div 
                    className='bg-gradient-to-r from-cyan-500 to-cyan-300 dark:from-cyan-400 dark:to-cyan-600 h-full rounded-full transition-all duration-1000 progress-animated' 
                    style={{ width: `${tech.proficiency}%` }}
                  ></div>
                </div>
                <div className='mt-2 text-[10px] md:text-xs font-mono text-gray-500 dark:text-gray-500'>
                  {'>'} MODULE_LOADED: {tech.proficiency >= 85 ? 'EXPERT' : tech.proficiency >= 75 ? 'ADVANCED' : 'PROFICIENT'}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        )}

        {/* Certifications */}
        {showContent && (
        <ScrollReveal animation='stagger' className='mb-12 md:mb-16'>
          <h2 className='text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-cyan-700 dark:text-cyan-400 font-mono tracking-wider md:tracking-widest flex items-center gap-2 md:gap-3'>
            <FaCertificate className='animate-pulse' />
            [ TOP_CERTIFICATIONS ]
          </h2>
          <div className='grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2'>
            {certifications.map((cert, i) => (
              <div key={i} className='p-4 md:p-6 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg bg-white dark:bg-gray-900 hover-lift neon-box dark:text-gray-200'>
                <div className='flex items-center gap-2 mb-2 md:mb-3'>
                  <FaAward size={20} className='text-cyan-700 dark:text-cyan-300 md:w-6 md:h-6' />
                  <span className='text-[10px] md:text-xs font-mono text-cyan-500'>[VERIFIED]</span>
                </div>
                <h3 className='font-bold text-cyan-700 dark:text-cyan-200 mb-1 md:mb-2 font-mono text-xs md:text-sm'>{cert.title}</h3>
                <p className='text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-2 md:mb-3 font-mono'>{'>'} {cert.issuer}</p>
                <p className='text-[10px] md:text-xs font-semibold text-cyan-600 dark:text-cyan-400 font-mono'>[{cert.year}]</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
        )}

        {/* CTA Cards - Navigation Section */}
        {showContent && (
        <ScrollReveal animation='fade-up'>
          {/* Section Separator */}
          <div className='flex items-center gap-4 mb-8 md:mb-10'>
            <div className='flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent'></div>
            <div className='flex items-center gap-2 text-cyan-500 dark:text-cyan-400 font-mono text-xs md:text-sm'>
              <FaTerminal className='animate-pulse' />
              <span>NAVIGATE_TO</span>
              <FaTerminal className='animate-pulse' />
            </div>
            <div className='flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent'></div>
          </div>
          
          <div className='grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3 mb-8 md:mb-12'>
            {/* Projects Card */}
            <Link to='/projects' className='group block p-5 md:p-6 rounded-xl bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 dark:from-cyan-800 dark:via-cyan-900 dark:to-gray-900 border-2 border-cyan-400 dark:border-cyan-600 hover:border-cyan-300 dark:hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition'>
                  <FaDatabase className='text-white text-xl md:text-2xl' />
                </div>
                <div>
                  <h2 className='text-lg md:text-xl font-bold text-white font-mono tracking-wider'>[ MISSIONS_DB ]</h2>
                  <p className='text-cyan-200 text-xs font-mono'>{'>'} /projects</p>
                </div>
              </div>
              <p className='text-cyan-100 mb-4 font-mono text-xs md:text-sm leading-relaxed'>Operaciones QA completadas con evidencias técnicas.</p>
              <div className='flex items-center gap-2 text-white font-bold font-mono text-sm group-hover:gap-3 transition-all'>
                <span>LOAD_MISSIONS</span>
                <FaRocket className='group-hover:translate-x-1 transition-transform' />
              </div>
            </Link>
            
            {/* About Card */}
            <Link to='/about' className='group block p-5 md:p-6 rounded-xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-black border-2 border-gray-500 dark:border-gray-600 hover:border-cyan-400 dark:hover:border-cyan-500 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition'>
                  <FaMicrochip className='text-cyan-400 text-xl md:text-2xl' />
                </div>
                <div>
                  <h2 className='text-lg md:text-xl font-bold text-white font-mono tracking-wider'>[ SYSTEM_INFO ]</h2>
                  <p className='text-gray-400 text-xs font-mono'>{'>'} /about</p>
                </div>
              </div>
              <p className='text-gray-300 mb-4 font-mono text-xs md:text-sm leading-relaxed'>Especificaciones técnicas, historial y credenciales.</p>
              <div className='flex items-center gap-2 text-cyan-400 font-bold font-mono text-sm group-hover:gap-3 transition-all'>
                <span>ACCESS_SYSTEM</span>
                <FaRocket className='group-hover:translate-x-1 transition-transform' />
              </div>
            </Link>
            
            {/* Contact Card */}
            <Link to='/contact' className='group block p-5 md:p-6 rounded-xl bg-gradient-to-br from-green-600 via-green-700 to-green-800 dark:from-green-800 dark:via-green-900 dark:to-gray-900 border-2 border-green-400 dark:border-green-600 hover:border-green-300 dark:hover:border-green-400 shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition'>
                  <FaEnvelope className='text-white text-xl md:text-2xl' />
                </div>
                <div>
                  <h2 className='text-lg md:text-xl font-bold text-white font-mono tracking-wider'>[ TRANSMIT ]</h2>
                  <p className='text-green-200 text-xs font-mono'>{'>'} /contact</p>
                </div>
              </div>
              <p className='text-green-100 mb-4 font-mono text-xs md:text-sm leading-relaxed'>Canal de comunicación directo. Envía tu mensaje a la unidad principal.</p>
              <div className='flex items-center gap-2 text-white font-bold font-mono text-sm group-hover:gap-3 transition-all'>
                <span>SEND_MESSAGE</span>
                <FaRocket className='group-hover:translate-x-1 transition-transform' />
              </div>
            </Link>
          </div>
        </ScrollReveal>
        )}
      </div>
    </section>
  )
}