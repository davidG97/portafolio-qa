import React from 'react'
import { Link } from 'react-router-dom'
import { FaFlask, FaGitAlt, FaChartLine } from 'react-icons/fa'

const exampleProjects = [
  {
    id: 'project-a',
    title: 'App CRUD - Automatización E2E',
    icon: FaFlask,
    desc: 'Pruebas E2E con Playwright, reportes HTML y trazas',
    tags: ['Playwright', 'E2E', 'CI/CD'],
  },
  {
    id: 'project-b',
    title: 'Component Testing - React',
    icon: FaGitAlt,
    desc: 'Tests unitarios y de integración con Vitest y RTL',
    tags: ['Vitest', 'React Testing Library', 'Unit Tests'],
  },
  {
    id: 'project-c',
    title: 'Performance & Accesibilidad',
    icon: FaChartLine,
    desc: 'Auditoría con Lighthouse y Axe, reportes de mejora',
    tags: ['Performance', 'A11y', 'Lighthouse'],
  },
]

export default function Projects() {
  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black py-12'>
      <div className='w-full px-6'>
        <h1 className='text-5xl font-bold mb-2 text-cyan-700 dark:text-cyan-200 font-mono tracking-widest'>[ PROYECTOS QA ]</h1>
        <p className='text-gray-600 dark:text-cyan-200 mb-8 font-mono'>► Explora mis misiones de automatización, performance y calidad.</p>

        <ul className='space-y-6'>
          {exampleProjects.map(p => {
            const Icon = p.icon
            return (
              <li key={p.id} className='p-6 bg-white dark:bg-gray-900 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg hover:shadow-lg hover:shadow-cyan-200/50 transition dark:text-gray-200'>
                <div className='flex items-start gap-4'>
                  <div className='mt-1 text-cyan-700'>
                    <Icon size={28} className='animate-pulse' />
                  </div>
                  <div className='flex-1'>
                    <h2 className='text-2xl font-bold text-cyan-700 dark:text-cyan-200 font-mono'>{p.title}</h2>
                    <p className='text-gray-600 dark:text-gray-300 my-2 font-mono'>{p.desc}</p>
                    <div className='flex gap-2 flex-wrap mb-3'>
                      {p.tags.map((tag, i) => (
                        <span key={i} className='text-xs bg-cyan-100 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-200 px-2 py-1 rounded font-bold font-mono'>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link to={'/projects/' + p.id} className='inline-block px-5 py-2 bg-cyan-600 text-white rounded font-bold font-mono hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-600/60 transition'>
                      VER DETALLES & EVIDENCIAS
                    </Link>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}