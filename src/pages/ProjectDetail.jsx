import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaCheckCircle, FaFileCode, FaChartBar, FaCamera, FaTerminal, FaCog, FaDatabase, FaShieldAlt } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal'

const projectsData = {
  'project-a': {
    title: 'APP_CRUD - E2E_AUTOMATION',
    code: 'MISSION_001',
    status: 'COMPLETED',
    description: 'Automatización completa de pruebas E2E para una aplicación CRUD desarrollada con React.',
    tools: ['Playwright', 'TypeScript', 'GitHub Actions', 'Allure Reports'],
    results: [
      { text: 'Cobertura del 95% de flujos críticos', value: 95 },
      { text: 'Reducción de 80% en detección manual de bugs', value: 80 },
      { text: 'Ejecución automática en cada commit', value: 100 }
    ],
    features: [
      'Tests de creación, lectura, actualización y eliminación',
      'Validación de formularios y manejo de errores',
      'Screenshots en caso de fallos',
      'Reportes HTML con trazas y videos'
    ]
  },
  'project-b': {
    title: 'COMPONENT_TESTING - REACT',
    code: 'MISSION_002',
    status: 'COMPLETED',
    description: 'Suite de tests unitarios e integración para componentes React reutilizables.',
    tools: ['Vitest', 'React Testing Library', 'Jest', 'Storybook'],
    results: [
      { text: 'Cobertura de 85% de código', value: 85 },
      { text: 'Tests automatizados para 40+ componentes', value: 90 },
      { text: 'Detección temprana de regresiones', value: 75 }
    ],
    features: [
      'Tests de renderizado y interacción',
      'Validación de props y comportamiento',
      'Snapshots para cambios visuales',
      'Integración con CI/CD'
    ]
  },
  'project-c': {
    title: 'PERF_AND_A11Y_AUDIT',
    code: 'MISSION_003',
    status: 'ACTIVE',
    description: 'Auditoría integral de performance y accesibilidad con reportes detallados.',
    tools: ['Lighthouse', 'Axe DevTools', 'WebAIM', 'Chrome DevTools'],
    results: [
      { text: 'Score Lighthouse: 92/100', value: 92 },
      { text: '500+ issues de accesibilidad corregidas', value: 100 },
      { text: 'Mejora de 40% en tiempo de carga', value: 40 }
    ],
    features: [
      'Auditorías de performance en desktop y mobile',
      'Análisis de accesibilidad WCAG 2.1',
      'Reportes con recomendaciones',
      'Seguimiento de métricas en el tiempo'
    ]
  }
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectsData[id] || projectsData['project-a']
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300)
  }, [])

  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black py-8 md:py-12 px-4 md:px-6 circuit-bg header-offset'>
      {/* Back button */}
      <button 
        onClick={() => navigate('/projects')} 
        className='mb-4 md:mb-6 flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-mono font-medium transition hover-lift text-sm md:text-base'
      >
        <FaArrowLeft /> {'<'} BACK_TO_MISSIONS
      </button>

      {/* Header */}
      <ScrollReveal animation='robot' className='mb-6 md:mb-8 p-4 md:p-6 border-2 border-cyan-300 dark:border-cyan-600 rounded-lg bg-white dark:bg-gray-900 neon-box'>
        <div className='flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-3'>
          <span className='text-[10px] md:text-xs font-mono text-cyan-500'>[{project.code}]</span>
          <span className={`text-[10px] md:text-xs font-mono px-1.5 md:px-2 py-0.5 rounded ${
            project.status === 'ACTIVE' 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400' 
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
          }`}>
            [{project.status}]
          </span>
        </div>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-cyan-700 dark:text-cyan-300 font-mono glitch-text neon-glow break-words' data-text={project.title}>
          {project.title}
        </h1>
        <p className='text-sm md:text-lg text-gray-600 dark:text-gray-300 mt-2 md:mt-3 font-mono'>{`>`} {project.description}</p>
      </ScrollReveal>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8'>
        {/* Technologies */}
        <ScrollReveal animation='fade-left' className='p-4 md:p-6 border-2 border-cyan-300 dark:border-cyan-600 rounded-lg bg-white dark:bg-gray-900 neon-box'>
          <h2 className='text-lg md:text-xl font-semibold mb-3 md:mb-4 text-cyan-700 dark:text-cyan-300 flex items-center gap-2 font-mono'>
            <FaFileCode className='text-cyan-600 dark:text-cyan-400' /> TECH_STACK
          </h2>
          <div className='flex flex-wrap gap-1.5 md:gap-2'>
            {project.tools.map((tool, i) => (
              <span key={i} className='px-2 md:px-4 py-1 md:py-2 bg-cyan-600 dark:bg-cyan-700 text-white text-xs md:text-sm rounded font-mono font-medium neon-box'>
                {tool}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Results */}
        <ScrollReveal animation='fade-right' className='p-4 md:p-6 border-2 border-cyan-300 dark:border-cyan-600 rounded-lg bg-white dark:bg-gray-900 neon-box'>
          <h2 className='text-lg md:text-xl font-semibold mb-3 md:mb-4 text-cyan-700 dark:text-cyan-300 flex items-center gap-2 font-mono'>
            <FaChartBar className='text-cyan-600 dark:text-cyan-400' /> METRICS
          </h2>
          <ul className='space-y-2 md:space-y-3'>
            {project.results.map((result, i) => (
              <li key={i} className='text-gray-700 dark:text-gray-300'>
                <div className='flex items-center justify-between mb-1'>
                  <div className='flex items-center gap-2'>
                    <FaCheckCircle className='text-green-500 flex-shrink-0 w-3 h-3 md:w-4 md:h-4' />
                    <span className='font-mono text-xs md:text-sm'>{result.text}</span>
                  </div>
                  <span className='text-[10px] md:text-xs font-mono text-cyan-600 dark:text-cyan-400'>{result.value}%</span>
                </div>
                <div className='w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 md:h-2 overflow-hidden ml-5 md:ml-6'>
                  <div 
                    className='h-full bg-gradient-to-r from-green-500 to-green-300 progress-animated' 
                    style={{ width: `${result.value}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>

      {/* Features */}
      <ScrollReveal animation='scale' className='mb-6 md:mb-8 p-4 md:p-6 border-2 border-cyan-300 dark:border-cyan-600 rounded-lg bg-white dark:bg-gray-900 neon-box'>
        <h2 className='text-lg md:text-xl font-semibold mb-3 md:mb-4 text-cyan-700 dark:text-cyan-300 flex items-center gap-2 font-mono'>
          <FaCog className='text-cyan-600 dark:text-cyan-400' /> IMPLEMENTED_FEATURES
        </h2>
        <ul className='grid gap-2 md:gap-3'>
          {project.features.map((feature, i) => (
            <li key={i} className='p-3 md:p-4 bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 rounded flex items-start gap-2 md:gap-3 hover-lift transition'>
              <FaCheckCircle className='mt-0.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 w-3 h-3 md:w-4 md:h-4' />
              <span className='text-gray-700 dark:text-gray-300 font-mono text-xs md:text-base'>{feature}</span>
            </li>
          ))}
        </ul>
      </ScrollReveal>

      {/* Evidence section */}
      <ScrollReveal animation='fade-up' className='p-4 md:p-6 border-2 border-cyan-300 dark:border-cyan-600 rounded-lg bg-white dark:bg-gray-900 neon-box'>
        <h2 className='text-lg md:text-xl font-semibold mb-3 md:mb-4 text-cyan-700 dark:text-cyan-300 flex items-center gap-2 font-mono'>
          <FaCamera className='text-cyan-600 dark:text-cyan-400' /> EVIDENCE_AND_ARTIFACTS
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
          {[
            { icon: FaDatabase, label: 'Reportes HTML interactivos' },
            { icon: FaCamera, label: 'Screenshots de ejecuciones' },
            { icon: FaTerminal, label: 'Logs y trazas detalladas' },
            { icon: FaChartBar, label: 'Videos de pruebas fallidas' },
            { icon: FaShieldAlt, label: 'Gráficos de cobertura' },
          ].map((item, i) => (
            <div key={i} className='flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-gray-50 dark:bg-gray-800 rounded border border-cyan-200 dark:border-cyan-700 font-mono text-xs md:text-sm text-gray-700 dark:text-gray-300'>
              <item.icon className='text-cyan-600 dark:text-cyan-400 flex-shrink-0' />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}