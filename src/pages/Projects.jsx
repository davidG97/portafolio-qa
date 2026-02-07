import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaFlask, FaGitAlt, FaChartLine, FaTerminal, FaFolder, FaCheckCircle, FaCog, FaRocket, FaMobile, FaDesktop, FaServer, FaShieldAlt, FaUsers, FaBriefcase, FaCode } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal'

// Experiencia profesional con proyectos reales
const experiences = [
  {
    id: 'qa-lead-tech',
    role: 'QA_LEAD_TECH_AUTOMATION',
    company: 'Banco de Bogotá',
    period: 'NOV 2023 - PRESENTE',
    status: 'ACTIVE',
    code: 'EXP_001',
    icon: FaRocket,
    description: 'Liderazgo técnico en automatización de pruebas para toda la organización. Definición de lineamientos, estándares y mejores prácticas.',
    achievements: [
      'Definición de lineamientos tecnológicos de automatización',
      'Sesiones de capacitación en GitHub Actions y CI/CD',
      'Innovación continua en herramientas de testing',
      'Estándares de calidad para equipos de desarrollo',
    ],
    technologies: ['GitHub Actions', 'Selenium', 'Gatling', 'Serenity BDD'],
    metrics: { teams: '5+', pipelines: '20+', coverage: '85%' }
  },
  {
    id: 'qa-lead-digital',
    role: 'QA_LEAD_DIGITAL_CHANNELS',
    company: 'Banco de Bogotá',
    period: 'MAR 2022 - OCT 2024',
    status: 'COMPLETED',
    code: 'EXP_002',
    icon: FaMobile,
    description: 'Líder de calidad para canales digitales: aplicaciones móviles y plataformas web del banco.',
    achievements: [
      'Gestión de equipo de 15+ analistas QA',
      'Implementación de métricas e indicadores de calidad',
      'Automatización de pruebas para apps móviles (iOS/Android)',
      'Reducción de bugs en producción en 60%',
    ],
    technologies: ['Appium', 'Browserstack', 'Xray', 'Jira'],
    metrics: { team: '15+', apps: '8', defects: '-60%' }
  },
  {
    id: 'qa-automation',
    role: 'QA_AUTOMATION_ENGINEER',
    company: 'Banco de Bogotá',
    period: 'ENE 2021 - FEB 2022',
    status: 'COMPLETED',
    code: 'EXP_003',
    icon: FaCode,
    description: 'Ingeniero de automatización enfocado en pruebas E2E, API y performance para proyectos críticos.',
    achievements: [
      'Automatización E2E con Selenium y Serenity BDD',
      'Pruebas de performance con Gatling',
      'Integración de pruebas en pipelines CI/CD',
      'Proyectos: Libranza, PSE, Desarrollos Transversales',
    ],
    technologies: ['Selenium', 'Rest Assured', 'Gatling', 'Jenkins'],
    metrics: { tests: '500+', apis: '50+', time: '-40%' }
  },
]

// Proyectos destacados / Casos de uso
const featuredProjects = [
  {
    id: 'automation-framework',
    title: 'FRAMEWORK_AUTOMATION_E2E',
    icon: FaFlask,
    desc: 'Framework de automatización E2E con Serenity BDD, Screenplay Pattern y reportes integrados',
    tags: ['Serenity BDD', 'Screenplay', 'Cucumber', 'Java'],
    status: 'PRODUCTION',
    impact: 'Reducción de 40% en tiempo de regresión',
    code: 'PROJ_001'
  },
  {
    id: 'performance-suite',
    title: 'PERFORMANCE_TESTING_SUITE',
    icon: FaChartLine,
    desc: 'Suite de pruebas de rendimiento con Gatling para APIs críticas del banco',
    tags: ['Gatling', 'Scala', 'Grafana', 'InfluxDB'],
    status: 'PRODUCTION',
    impact: 'Detección temprana de cuellos de botella',
    code: 'PROJ_002'
  },
  {
    id: 'cicd-pipelines',
    title: 'CI_CD_QUALITY_GATES',
    icon: FaGitAlt,
    desc: 'Pipelines de GitHub Actions con quality gates automáticos para todos los proyectos',
    tags: ['GitHub Actions', 'Docker', 'SonarQube', 'Selenium Grid'],
    status: 'PRODUCTION',
    impact: 'Ejecución automática en cada PR',
    code: 'PROJ_003'
  },
  {
    id: 'mobile-testing',
    title: 'MOBILE_AUTOMATION_FRAMEWORK',
    icon: FaMobile,
    desc: 'Framework para pruebas automatizadas en iOS y Android con Appium y Browserstack',
    tags: ['Appium', 'Browserstack', 'iOS', 'Android'],
    status: 'PRODUCTION',
    impact: 'Cobertura en 8 aplicaciones móviles',
    code: 'PROJ_004'
  },
]

export default function Projects() {
  const [bootSequence, setBootSequence] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const [activeTab, setActiveTab] = useState('experience')

  useEffect(() => {
    const steps = ['ACCESSING_DATABASE...', 'LOADING_EXPERIENCE...', 'DECRYPTING_PROJECTS...', 'READY']
    let step = 0
    const interval = setInterval(() => {
      step++
      setBootSequence(step)
      if (step >= steps.length) {
        clearInterval(interval)
        setTimeout(() => setShowContent(true), 300)
      }
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black py-8 md:py-12 circuit-bg header-offset'>
      <div className='w-full px-4 md:px-6'>
        {/* Boot Sequence */}
        <div className={`mb-6 md:mb-8 font-mono text-xs md:text-sm transition-opacity duration-500 ${showContent ? 'opacity-50' : 'opacity-100'}`}>
          <div className='flex items-center gap-2 text-cyan-600 dark:text-cyan-400'>
            <FaTerminal className='animate-pulse' />
            <span className='typing-cursor'>
              {bootSequence === 0 && '> INITIALIZING_EXPERIENCE_MODULE...'}
              {bootSequence === 1 && '> ACCESSING_DATABASE...'}
              {bootSequence === 2 && '> LOADING_CAREER_DATA...'}
              {bootSequence === 3 && '> DECRYPTING_PROJECTS...'}
              {bootSequence >= 4 && '> EXPERIENCE_LOADED ✓'}
            </span>
          </div>
        </div>

        {/* Header */}
        {showContent && (
          <div className='hero-appear mb-8 md:mb-10'>
            <div className='flex items-center gap-2 md:gap-3 mb-2'>
              <FaBriefcase className='text-cyan-600 dark:text-cyan-400 animate-pulse w-6 h-6 md:w-7 md:h-7' />
              <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold text-cyan-700 dark:text-cyan-300 font-mono tracking-wider md:tracking-widest glitch-text neon-glow' data-text='[ QA_EXPERIENCE ]'>
                [ QA_EXPERIENCE ]
              </h1>
            </div>
            <p className='text-gray-600 dark:text-cyan-200 font-mono text-xs md:text-base flex items-center gap-2'>
              <FaTerminal className='animate-pulse flex-shrink-0' />
              <span className='typing-cursor'>{`>`} Trayectoria profesional en Quality Assurance & Automation</span>
            </p>
          </div>
        )}

        {/* Tab Navigation */}
        {showContent && (
          <ScrollReveal animation='fade-up' className='mb-8 md:mb-10'>
            <div className='flex gap-2 md:gap-4 p-1 bg-gray-100 dark:bg-gray-900 rounded-lg border-2 border-cyan-300 dark:border-cyan-700 w-fit'>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-md font-mono text-xs md:text-sm font-bold transition-all ${
                  activeTab === 'experience'
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/30'
                }`}
              >
                <span className='flex items-center gap-2'>
                  <FaBriefcase />
                  EXPERIENCIA
                </span>
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-md font-mono text-xs md:text-sm font-bold transition-all ${
                  activeTab === 'projects'
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/30'
                }`}
              >
                <span className='flex items-center gap-2'>
                  <FaFolder />
                  PROYECTOS
                </span>
              </button>
            </div>
          </ScrollReveal>
        )}

        {/* Experience Tab */}
        {showContent && activeTab === 'experience' && (
          <div className='space-y-6 md:space-y-8'>
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <ScrollReveal 
                  key={exp.id}
                  animation='fade-left'
                  delay={index * 100}
                >
                  <div className='p-5 md:p-8 bg-white dark:bg-gray-900 border-2 border-cyan-300 dark:border-cyan-700 rounded-xl hover-lift neon-box'>
                    {/* Header */}
                    <div className='flex flex-col lg:flex-row lg:items-start gap-4 md:gap-6 mb-6'>
                      <div className='flex-shrink-0'>
                        <div className={`p-4 rounded-xl ${exp.status === 'ACTIVE' ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-300 dark:border-green-700' : 'bg-cyan-50 dark:bg-cyan-900/30 border-2 border-cyan-200 dark:border-cyan-700'}`}>
                          <Icon size={32} className={`${exp.status === 'ACTIVE' ? 'text-green-600 dark:text-green-400' : 'text-cyan-600 dark:text-cyan-400'} md:w-10 md:h-10`} />
                        </div>
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap items-center gap-2 md:gap-3 mb-2'>
                          <span className='text-[10px] md:text-xs font-mono text-cyan-500 dark:text-cyan-600'>[{exp.code}]</span>
                          <span className={`text-[10px] md:text-xs font-mono px-2 py-0.5 rounded-full ${
                            exp.status === 'ACTIVE' 
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400 border border-green-300 dark:border-green-700' 
                              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border border-gray-300 dark:border-gray-700'
                          }`}>
                            {exp.status === 'ACTIVE' && <span className='inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse'></span>}
                            {exp.status}
                          </span>
                        </div>
                        <h2 className='text-xl md:text-2xl font-bold text-cyan-700 dark:text-cyan-300 font-mono mb-1'>{exp.role}</h2>
                        <div className='flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base'>
                          <span className='text-cyan-600 dark:text-cyan-400 font-semibold'>{exp.company}</span>
                          <span className='text-gray-400'>|</span>
                          <span className='text-gray-500 dark:text-gray-400 font-mono text-xs md:text-sm'>{exp.period}</span>
                        </div>
                      </div>
                      
                      {/* Metrics */}
                      <div className='flex gap-3 md:gap-4 lg:flex-col lg:items-end'>
                        {Object.entries(exp.metrics).map(([key, value]) => (
                          <div key={key} className='text-center lg:text-right'>
                            <p className='text-lg md:text-2xl font-bold text-cyan-600 dark:text-cyan-400 font-mono'>{value}</p>
                            <p className='text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-mono uppercase'>{key}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className='text-gray-600 dark:text-gray-300 mb-4 font-mono text-sm md:text-base'>
                      {'>'} {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className='mb-4'>
                      <h4 className='text-xs md:text-sm font-mono font-bold text-cyan-600 dark:text-cyan-400 mb-2'>[LOGROS_PRINCIPALES]</h4>
                      <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className='flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300 font-mono'>
                            <FaCheckCircle className='text-green-500 flex-shrink-0 mt-0.5' />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className='flex gap-2 flex-wrap'>
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className='text-[10px] md:text-xs bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 px-2 md:px-3 py-1 rounded-full font-bold font-mono border border-cyan-200 dark:border-cyan-700'>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        )}

        {/* Projects Tab */}
        {showContent && activeTab === 'projects' && (
          <div className='grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2'>
            {featuredProjects.map((p, index) => {
              const Icon = p.icon
              return (
                <ScrollReveal 
                  key={p.id}
                  animation='fade-up'
                  delay={index * 100}
                >
                  <div className='p-5 md:p-6 bg-white dark:bg-gray-900 border-2 border-cyan-300 dark:border-cyan-700 rounded-xl hover-lift neon-box h-full'>
                    <div className='flex items-start gap-4 mb-4'>
                      <div className='p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg border border-cyan-200 dark:border-cyan-700'>
                        <Icon size={24} className='text-cyan-700 dark:text-cyan-400' />
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap items-center gap-2 mb-1'>
                          <span className='text-[10px] md:text-xs font-mono text-cyan-500'>[{p.code}]</span>
                          <span className='text-[10px] md:text-xs font-mono px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400 border border-green-300 dark:border-green-700'>
                            {p.status}
                          </span>
                        </div>
                        <h3 className='text-base md:text-lg font-bold text-cyan-700 dark:text-cyan-300 font-mono'>{p.title}</h3>
                      </div>
                    </div>

                    <p className='text-gray-600 dark:text-gray-300 mb-3 font-mono text-xs md:text-sm'>
                      {'>'} {p.desc}
                    </p>

                    {/* Impact */}
                    <div className='mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800'>
                      <p className='text-xs md:text-sm font-mono text-green-700 dark:text-green-400'>
                        <span className='font-bold'>[IMPACTO]</span> {p.impact}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className='flex gap-2 flex-wrap'>
                      {p.tags.map((tag, i) => (
                        <span key={i} className='text-[10px] md:text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded font-mono border border-gray-200 dark:border-gray-700'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        )}

        {/* Summary Stats */}
        {showContent && (
          <ScrollReveal animation='scale' className='mt-10 md:mt-12'>
            <div className='p-6 md:p-8 bg-gradient-to-r from-cyan-600 to-cyan-700 dark:from-cyan-800 dark:to-cyan-900 rounded-xl border-2 border-cyan-400 dark:border-cyan-600'>
              <h3 className='text-lg md:text-xl font-bold text-white font-mono mb-6 text-center'>[ RESUMEN_CARRERA ]</h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
                <div className='text-center'>
                  <p className='text-3xl md:text-4xl font-bold text-white font-mono'>4+</p>
                  <p className='text-cyan-200 text-xs md:text-sm font-mono'>AÑOS_EXP</p>
                </div>
                <div className='text-center'>
                  <p className='text-3xl md:text-4xl font-bold text-white font-mono'>15+</p>
                  <p className='text-cyan-200 text-xs md:text-sm font-mono'>PERSONAS_LIDERADAS</p>
                </div>
                <div className='text-center'>
                  <p className='text-3xl md:text-4xl font-bold text-white font-mono'>500+</p>
                  <p className='text-cyan-200 text-xs md:text-sm font-mono'>TESTS_CREADOS</p>
                </div>
                <div className='text-center'>
                  <p className='text-3xl md:text-4xl font-bold text-white font-mono'>60%</p>
                  <p className='text-cyan-200 text-xs md:text-sm font-mono'>BUGS_REDUCIDOS</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
