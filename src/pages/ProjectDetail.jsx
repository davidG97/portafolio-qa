import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaCheckCircle, FaFileCode, FaChartBar, FaCamera } from 'react-icons/fa'

const projectsData = {
  'project-a': {
    title: 'App CRUD - Automatización E2E',
    description: 'Automatización completa de pruebas E2E para una aplicación CRUD desarrollada con React.',
    tools: ['Playwright', 'TypeScript', 'GitHub Actions', 'Allure Reports'],
    results: [
      'Cobertura del 95% de flujos críticos',
      'Reducción de 80% en detección manual de bugs',
      'Ejecución automática en cada commit'
    ],
    features: [
      'Tests de creación, lectura, actualización y eliminación',
      'Validación de formularios y manejo de errores',
      'Screenshots en caso de fallos',
      'Reportes HTML con trazas y videos'
    ]
  },
  'project-b': {
    title: 'Component Testing - React',
    description: 'Suite de tests unitarios e integración para componentes React reutilizables.',
    tools: ['Vitest', 'React Testing Library', 'Jest', 'Storybook'],
    results: [
      'Cobertura de 85% de código',
      'Tests automatizados para 40+ componentes',
      'Detección temprana de regresiones'
    ],
    features: [
      'Tests de renderizado y interacción',
      'Validación de props y comportamiento',
      'Snapshots para cambios visuales',
      'Integración con CI/CD'
    ]
  },
  'project-c': {
    title: 'Performance & Accesibilidad',
    description: 'Auditoría integral de performance y accesibilidad con reportes detallados.',
    tools: ['Lighthouse', 'Axe DevTools', 'WebAIM', 'Chrome DevTools'],
    results: [
      'Score Lighthouse: 92/100',
      '500+ issues de accesibilidad corregidas',
      'Mejora de 40% en tiempo de carga'
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

  return (
    <section>
      <button onClick={() => navigate('/projects')} className='mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition'>
        <FaArrowLeft /> Volver a proyectos
      </button>

      <h1 className='text-3xl font-bold mb-4 text-gray-900'>{project.title}</h1>
      <p className='text-lg text-gray-700 mb-6'>{project.description}</p>

      <div className='grid md:grid-cols-2 gap-8 mb-8'>
        <div>
          <h2 className='text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2'>
            <FaFileCode className='text-blue-600' /> Tecnologías utilizadas
          </h2>
          <div className='flex flex-wrap gap-2'>
            {project.tools.map((tool, i) => (
              <span key={i} className='px-3 py-1 bg-blue-600 text-white text-sm rounded font-medium'>
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2'>
            <FaChartBar className='text-blue-600' /> Resultados
          </h2>
          <ul className='space-y-2'>
            {project.results.map((result, i) => (
              <li key={i} className='flex items-start gap-2 text-gray-700'>
                <FaCheckCircle className='mt-1 text-green-600 flex-shrink-0' />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='text-xl font-semibold mb-4 text-gray-900'>Características implementadas</h2>
        <ul className='grid gap-3'>
          {project.features.map((feature, i) => (
            <li key={i} className='p-3 bg-blue-50 border-l-4 border-blue-600 rounded flex items-start gap-3'>
              <FaCheckCircle className='mt-1 text-blue-600 flex-shrink-0' />
              <span className='text-gray-700'>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='bg-blue-50 border-2 border-blue-200 p-6 rounded'>
        <h2 className='text-xl font-semibold mb-3 text-gray-900 flex items-center gap-2'>
          <FaCamera className='text-blue-600' /> Evidencias y artefactos
        </h2>
        <ul className='text-gray-700 space-y-2'>
          <li className='flex items-center gap-2'><span className='text-blue-600'></span> Reportes HTML interactivos</li>
          <li className='flex items-center gap-2'><span className='text-blue-600'></span> Screenshots de ejecuciones</li>
          <li className='flex items-center gap-2'><span className='text-blue-600'></span> Logs y trazas detalladas</li>
          <li className='flex items-center gap-2'><span className='text-blue-600'></span> Videos de pruebas fallidas</li>
          <li className='flex items-center gap-2'><span className='text-blue-600'></span> Gráficos de cobertura</li>
        </ul>
      </div>
    </section>
  )
}