import React from 'react'
import { Link } from 'react-router-dom'
import { FaDownload, FaBriefcase, FaBook, FaJira, FaAccessibleIcon, FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaRobot, FaGithub, FaRocket, FaDatabase } from 'react-icons/fa'

export default function About() {
  const education = [
    {
      title: 'Pregrado en Ingeniería Electrónica',
      institution: 'Universidad Sergio Arboleda',
      year: 'Enero 2016 - Septiembre 2021',
      description: 'Semillero de Investigación Makers USA | Becario, Beca Ser Pilo Paga ICFES 2015'
    }
  ]

  const skillCategories = [
    {
      icon: FaRobot,
      category: 'Automatización E2E',
      skills: ['Playwright', 'Serenity BDD', 'Rest assured', 'Browserstack', 'Selenium']
    },
    {
      icon: FaDatabase,
      category: 'Backend & APIs',
      skills: ['SQL', 'Postman', 'Swagger', 'SoapUI']
    },
    {
      icon: FaGithub,
      category: 'CI/CD & DevOps',
      skills: ['GitHub Actions', 'Github']
    },
    {
      icon: FaRocket,
      category: 'Performance',
      skills: ['Gatling', 'K6']
    },
    {
      icon: FaAccessibleIcon,
      category: 'Seguridad y accesibilidad',
      skills: ['Lighthouse', 'Owasp ZAP', 'MobSF']
    },
    {
      icon: FaJira,
      category: 'Agile framework',
      skills: ['Jira', 'Confluence', 'Xray test management']
    }
  ]

  const certifications = [
    {
      title: 'ISTQB Foundation Level',
      issuer: 'International Software Testing Qualifications Board',
      year: 'Enero 2023',
      badge: 'ISTQB',
      link: 'https://app.skillsclub.com/credential/28438-979b9067e40bdf58fc47e3fb49f568c2f267b65d98977802df54dfa15082583b?locale=es&badge=true'
    },
    {
      title: 'Selenium WebDriver 4 with Java - Novice to Ninja',
      issuer: 'Udemy',
      year: 'Enero 2023',
      badge: 'Selenium',
      link: 'https://www.udemy.com/certificate/UC-39261925-683d-4508-a970-bc85d40ffdb5'
    },
    {
      title: 'Gatling Fundamentals for Stress Testing APIs - Scala',
      issuer: 'Udemy',
      year: 'Noviembre 2022',
      badge: 'Gatling',
      link: 'https://www.udemy.com/certificate/UC-478bdeb2-9ee4-42ad-a001-7d09dbc3d185/'
    },
    {
      title: 'Git, GitHub Actions & CI Best Practices',
      issuer: 'Udemy',
      year: 'Septiembre 2024',
      badge: 'DevOps',
      link: 'https://ude.my/UC-97c9cba9-ae00-4558-a367-621923697523'
    },
    {
      title: 'Automatización del flujo de trabajo con Acciones de GitHub',
      issuer: 'Microsoft Learn',
      year: 'Agosto 2023',
      badge: 'Github Actions',
      link: 'https://learn.microsoft.com/es-mx/training/achievements/learn.automate-workflow-github-actions.trophy?username=ErneyDavidGarciaVergara-8937&sharingId=3F57C69CD7BE4997'
    }
  ]

  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black py-12'>
      <div className='w-full px-6'>
        <div className='mb-8'>
          <h1 className='text-5xl font-bold mb-2 text-cyan-700 dark:text-cyan-200 font-mono tracking-widest'>[ DAVID GARCIA ]</h1>
          <p className='text-lg text-cyan-600 dark:text-cyan-200 font-semibold font-mono'>► QA AUTOMATION LEAD | BANCO DE BOGOTÁ</p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-16'>
        <div>
          <h2 className='text-2xl font-bold mb-6 text-cyan-700 font-mono tracking-widest flex items-center gap-2 border-b-2 border-cyan-300 pb-3'>
            <FaBriefcase size={24} className='text-cyan-700 animate-pulse' /> EXPERIENCIA
          </h2>
          <div className='space-y-4 text-gray-700 dark:text-gray-200'>
            <div className='border-l-4 border-cyan-300 pl-4 pb-4 bg-white dark:bg-gray-900 p-4 rounded dark:border-cyan-700'>
              <p className='font-bold text-cyan-700 font-mono'>► QA LEAD TECHNICAL TEST AUTOMATION ENGINEER</p>
              <p className='text-xs text-cyan-600 font-mono'>BANCO DE BOGOTÁ | NOV 2023 - ACTUALIDAD</p>
              <p className='text-gray-600 mt-2 text-sm'>Definición de lineamientos tecnológicos, innovación continua, sesiones de enseñanza en GitHub Actions, estándares de calidad.</p>
            </div>
            <div className='border-l-4 border-cyan-500 pl-4 pb-4 dark:border-cyan-700'>
              <p className='font-bold text-cyan-300 font-mono'>► QA LEAD CANALES DIGITALES</p>
              <p className='text-xs text-cyan-500 font-mono'>BANCO DE BOGOTÁ | MAR 2022 - OCT 2024</p>
              <p className='text-cyan-200 mt-2 text-sm'>Acompañamiento a analistas, medición de indicadores, capacitación, gestión de calidad en mobile y web.</p>
            </div>
            <div className='border-l-4 border-cyan-500 pl-4 dark:border-cyan-700'>
              <p className='font-bold text-cyan-300 font-mono'>► QA AUTOMATION</p>
              <p className='text-xs text-cyan-500 font-mono'>BANCO DE BOGOTÁ | ENE 2021 - ENE 2023</p>
              <p className='text-cyan-200 mt-2 text-sm'>Automatización E2E, API y performance. Proyectos: Libranza, Desarrollos transversales, PSE. Pruebas funcionales y smoke test.</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-6 text-cyan-700 font-mono tracking-widest flex items-center gap-2 border-b-2 border-cyan-300 pb-3'>
            <FaBook size={24} className='text-cyan-700 animate-pulse' /> HABILIDADES
          </h2>
          <div className='grid grid-cols-2 gap-3'>
            {skillCategories.map((skill, i) => {
              const Icon = skill.icon
              return (
                <div key={i} className='p-4 bg-white dark:bg-gray-900 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg hover:shadow-md hover:shadow-cyan-200/50 transition dark:text-gray-200'>
                  <div className='flex items-center gap-2 mb-2'>
                    <Icon size={18} className='text-cyan-700 animate-pulse' />
                    <h4 className='text-sm font-bold text-cyan-700 font-mono'>{skill.category}</h4>
                  </div>
                  <ul className='space-y-1'>
                    {skill.skills.map((s, j) => (
                      <li key={j} className='text-sm text-gray-600 dark:text-gray-300'>{s}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='mb-16'>
        <h2 className='text-2xl font-bold mb-6 text-cyan-400 font-mono tracking-widest flex items-center gap-2 border-b-2 border-cyan-500 pb-3'>
          <FaGraduationCap size={24} className='text-cyan-400 animate-pulse' /> EDUCACIÓN
        </h2>
        <div className='space-y-4'>
          {education.map((edu, i) => (
            <div key={i} className='p-6 border-l-4 border-cyan-500 bg-gradient-to-r from-gray-900 to-black rounded hover:shadow-xl hover:shadow-cyan-500/40 transition'>
              <h3 className='font-bold text-cyan-300 font-mono'>{edu.title}</h3>
              <p className='text-sm text-cyan-500 font-mono mt-1'>{edu.institution} | {edu.year}</p>
              <p className='text-cyan-200 mt-3'>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-16'>
        <h2 className='text-2xl font-bold mb-6 text-cyan-400 font-mono tracking-widest flex items-center gap-2 border-b-2 border-cyan-500 pb-3'>
          <FaCertificate size={24} className='text-cyan-400 animate-pulse' /> CERTIFICACIONES
        </h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target='_blank'
              rel='noopener noreferrer'
              className='p-6 border-2 border-cyan-500 rounded-lg bg-gradient-to-br from-gray-900 to-black hover:shadow-xl hover:shadow-cyan-500/50 transition'
            >
              <div className='flex items-start justify-between mb-3'>
                <h3 className='font-bold text-cyan-300 font-mono flex-1'>{cert.title}</h3>
                <span className='text-xs bg-cyan-600 text-black px-3 py-1 rounded ml-2 flex-shrink-0 font-bold'>
                  {cert.badge}
                </span>
              </div>
              <p className='text-sm text-cyan-200'>{cert.issuer}</p>
              <p className='text-xs text-cyan-500 font-mono mt-3'>{cert.year}</p>
              <div className='flex items-center gap-1 mt-4 text-cyan-400 text-xs font-bold font-mono hover:text-cyan-300'>
                VER CERTIFICACIÓN <FaExternalLinkAlt size={12} />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className='flex gap-4 flex-wrap'>
        <a href='#' className='inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-black border-2 border-cyan-400 rounded font-bold font-mono hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-600/60 transition'>
          <FaDownload /> DESCARGAR CV
        </a>
        <Link to='/contact' className='inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-cyan-400 border-2 border-cyan-500 rounded font-bold font-mono hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-600/60 transition'>
          CONTACTAR
        </Link>
      </div>
      </div>
    </section>
  )
}