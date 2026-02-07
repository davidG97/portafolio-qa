import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaDownload, FaBook, FaJira, FaAccessibleIcon, FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaRobot, FaGithub, FaRocket, FaDatabase, FaTerminal, FaMicrochip, FaCog, FaMapMarkerAlt, FaUser } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal'

export default function About() {
  const [bootSequence, setBootSequence] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const bootMessages = [
      'ACCESSING_DATABASE...',
      'LOADING_PROFILE_DATA...',
      'DECRYPTING_CREDENTIALS...',
      'SYSTEM_READY'
    ]
    let step = 0
    const interval = setInterval(() => {
      step++
      setBootSequence(step)
      if (step >= bootMessages.length) {
        clearInterval(interval)
        setTimeout(() => setShowContent(true), 300)
      }
    }, 350)
    return () => clearInterval(interval)
  }, [])

  const education = [
    {
      title: 'ELECTRONIC_ENGINEERING',
      institution: 'Universidad Sergio Arboleda',
      year: '2016 - 2021',
      description: 'Semillero de Investigación Makers USA | Becario, Beca Ser Pilo Paga ICFES 2015'
    }
  ]

  const skillCategories = [
    {
      icon: FaRobot,
      category: 'E2E_AUTOMATION',
      code: 'MOD_001',
      skills: ['Playwright', 'Serenity BDD', 'Rest Assured', 'Browserstack', 'Selenium']
    },
    {
      icon: FaDatabase,
      category: 'BACKEND_APIS',
      code: 'MOD_002',
      skills: ['SQL', 'Postman', 'Swagger', 'SoapUI']
    },
    {
      icon: FaGithub,
      category: 'CI_CD_DEVOPS',
      code: 'MOD_003',
      skills: ['GitHub Actions', 'Github']
    },
    {
      icon: FaRocket,
      category: 'PERFORMANCE',
      code: 'MOD_004',
      skills: ['Gatling', 'K6']
    },
    {
      icon: FaAccessibleIcon,
      category: 'SECURITY_A11Y',
      code: 'MOD_005',
      skills: ['Lighthouse', 'OWASP ZAP', 'MobSF']
    },
    {
      icon: FaJira,
      category: 'AGILE_FRAMEWORK',
      code: 'MOD_006',
      skills: ['Jira', 'Confluence', 'Xray']
    }
  ]

  const certifications = [
    {
      title: 'ISTQB Foundation Level',
      issuer: 'International Software Testing Qualifications Board',
      year: '2023',
      badge: 'ISTQB',
      link: 'https://app.skillsclub.com/credential/28438-979b9067e40bdf58fc47e3fb49f568c2f267b65d98977802df54dfa15082583b?locale=es&badge=true'
    },
    {
      title: 'Selenium WebDriver 4 with Java',
      issuer: 'Udemy',
      year: '2023',
      badge: 'Selenium',
      link: 'https://www.udemy.com/certificate/UC-39261925-683d-4508-a970-bc85d40ffdb5'
    },
    {
      title: 'Gatling Fundamentals for Stress Testing',
      issuer: 'Udemy',
      year: '2022',
      badge: 'Gatling',
      link: 'https://www.udemy.com/certificate/UC-478bdeb2-9ee4-42ad-a001-7d09dbc3d185/'
    },
    {
      title: 'Git, GitHub Actions & CI Best Practices',
      issuer: 'Udemy',
      year: '2024',
      badge: 'DevOps',
      link: 'https://ude.my/UC-97c9cba9-ae00-4558-a367-621923697523'
    },
    {
      title: 'GitHub Actions Workflow Automation',
      issuer: 'Microsoft Learn',
      year: '2023',
      badge: 'Actions',
      link: 'https://learn.microsoft.com/es-mx/training/achievements/learn.automate-workflow-github-actions.trophy?username=ErneyDavidGarciaVergara-8937&sharingId=3F57C69CD7BE4997'
    }
  ]

  // Información personal
  const personalInfo = {
    birthDate: new Date(1997, 11, 21), // Diciembre 21, 1997
    location: 'Bogotá, Colombia',
    traits: [
      { icon: '🎯', label: 'DETAIL_ORIENTED', desc: 'Obsesionado con la calidad' },
      { icon: '🚀', label: 'CONTINUOUS_LEARNER', desc: 'Siempre aprendiendo' },
      { icon: '🤝', label: 'TEAM_PLAYER', desc: 'Trabajo colaborativo' },
      { icon: '💡', label: 'PROBLEM_SOLVER', desc: 'Soluciones creativas' }
    ],
    hobbies: [
      { icon: '🎮', name: 'GAMING' },
      { icon: '🎵', name: 'MUSIC' },
      { icon: '📚', name: 'READING' },
      { icon: '🏃', name: 'FITNESS' }
    ]
  }

  // Calcular edad
  const calculateAge = () => {
    const today = new Date()
    const birth = personalInfo.birthDate
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black py-8 md:py-12 circuit-bg header-offset'>
      <div className='w-full px-4 md:px-6'>
        {/* Boot Sequence */}
        <div className={`mb-6 md:mb-8 font-mono text-xs md:text-sm transition-opacity duration-500 ${showContent ? 'opacity-50' : 'opacity-100'}`}>
          <div className='flex items-center gap-2 text-cyan-600 dark:text-cyan-400'>
            <FaTerminal className='animate-pulse' />
            <span className='typing-cursor'>
              {bootSequence === 0 && '> INITIALIZING_PROFILE_MODULE...'}
              {bootSequence === 1 && '> ACCESSING_DATABASE...'}
              {bootSequence === 2 && '> LOADING_CREDENTIALS...'}
              {bootSequence === 3 && '> DECRYPTING_DATA...'}
              {bootSequence >= 4 && '> PROFILE_LOADED ✓'}
            </span>
          </div>
          <div className='mt-2 ml-6 space-y-1 text-[10px] md:text-xs text-gray-500 dark:text-gray-500'>
            {bootSequence >= 1 && <div className='animate-pulse'>[OK] experience_log.db</div>}
            {bootSequence >= 2 && <div className='animate-pulse'>[OK] certifications.json</div>}
            {bootSequence >= 3 && <div className='animate-pulse'>[OK] skills_matrix.xml</div>}
          </div>
        </div>

        {/* Header */}
        {showContent && (
          <div className='hero-appear mb-6 md:mb-8'>
            <div className='flex items-center gap-2 md:gap-3 mb-2'>
              <FaMicrochip className='text-cyan-600 dark:text-cyan-400 animate-pulse w-6 h-6 md:w-7 md:h-7' />
              <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold text-cyan-700 dark:text-cyan-300 font-mono tracking-wider md:tracking-widest glitch-text neon-glow' data-text='[ SYSTEM_INFO ]'>
                [ SYSTEM_INFO ]
              </h1>
            </div>
            <p className='text-xs md:text-lg text-cyan-600 dark:text-cyan-200 font-semibold font-mono flex items-center gap-2'>
              <FaTerminal className='animate-pulse flex-shrink-0' />
              <span className='typing-cursor'>{`>`} UNIT: DAVID_GARCIA | ROLE: QA_LEAD</span>
            </p>
          </div>
        )}

        {showContent && (
        <div className='space-y-10 md:space-y-14'>
          
          {/* SECCIÓN 1: ABOUT ME - Full Width */}
          <ScrollReveal animation='fade-up'>
            <div className='p-6 md:p-8 bg-white dark:bg-gray-900 border-2 border-cyan-300 dark:border-cyan-700 rounded-xl neon-box'>
              <h2 className='text-xl md:text-2xl font-bold mb-6 text-cyan-700 dark:text-cyan-300 font-mono tracking-wider flex items-center gap-2'>
                <FaUser size={20} className='text-cyan-600 dark:text-cyan-400' /> ABOUT_ME
              </h2>
              
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* Bio */}
                <div className='lg:col-span-2'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='text-4xl md:text-5xl font-bold text-cyan-600 dark:text-cyan-400 font-mono'>{calculateAge()}</div>
                    <div>
                      <p className='text-sm md:text-base font-mono text-gray-600 dark:text-gray-400'>AÑOS_DE_VIDA</p>
                      <p className='text-xs md:text-sm font-mono text-cyan-500 flex items-center gap-1'>
                        <FaMapMarkerAlt /> {personalInfo.location}
                      </p>
                    </div>
                  </div>
                  <p className='text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                    Ingeniero Electrónico apasionado por la calidad del software. Mi misión es asegurar que cada línea de código entregue valor real a los usuarios. Creo en la automatización inteligente y en el poder de los equipos colaborativos.
                  </p>
                </div>

                {/* Hobbies - Compact */}
                <div className='flex flex-wrap lg:flex-col gap-2 lg:justify-center'>
                  {personalInfo.hobbies.map((hobby, i) => (
                    <div key={i} className='flex items-center gap-2 px-3 py-2 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg border border-cyan-200 dark:border-cyan-700'>
                      <span className='text-lg'>{hobby.icon}</span>
                      <span className='text-xs font-mono text-cyan-700 dark:text-cyan-300'>{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traits - Horizontal */}
              <div className='mt-6 pt-6 border-t border-cyan-200 dark:border-cyan-800'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                  {personalInfo.traits.map((trait, i) => (
                    <div key={i} className='text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'>
                      <span className='text-2xl mb-1 block'>{trait.icon}</span>
                      <span className='text-[10px] md:text-xs font-mono font-bold text-cyan-700 dark:text-cyan-300 block'>{trait.label}</span>
                      <span className='text-[10px] text-gray-500 dark:text-gray-400'>{trait.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* SECCIÓN 2: SKILLS - Grid más limpio */}
          <ScrollReveal animation='fade-up'>
            <h2 className='text-xl md:text-2xl font-bold mb-6 text-cyan-700 dark:text-cyan-300 font-mono tracking-wider flex items-center gap-2'>
              <FaBook size={20} className='text-cyan-600 dark:text-cyan-400' /> INSTALLED_MODULES
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {skillCategories.map((skill, i) => {
                const Icon = skill.icon
                return (
                  <div key={i} className='p-4 bg-white dark:bg-gray-900 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg neon-box'>
                    <div className='flex items-center gap-2 mb-3'>
                      <Icon size={16} className='text-cyan-600 dark:text-cyan-400' />
                      <h4 className='text-xs md:text-sm font-bold text-cyan-700 dark:text-cyan-300 font-mono'>{skill.category}</h4>
                    </div>
                    <div className='flex flex-wrap gap-1'>
                      {skill.skills.map((s, j) => (
                        <span key={j} className='text-[10px] md:text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded font-mono'>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          {/* SECCIÓN 3: EDUCATION */}
          <ScrollReveal animation='fade-up'>
            <h2 className='text-xl md:text-2xl font-bold mb-6 text-cyan-700 dark:text-cyan-300 font-mono tracking-wider flex items-center gap-2'>
              <FaGraduationCap size={20} className='text-cyan-600 dark:text-cyan-400' /> EDUCATION_DATA
            </h2>
            {education.map((edu, i) => (
              <div key={i} className='p-5 md:p-6 border-2 border-cyan-300 dark:border-cyan-600 bg-white dark:bg-gray-900 rounded-lg neon-box'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2'>
                  <div>
                    <h3 className='font-bold text-cyan-700 dark:text-cyan-300 font-mono text-base md:text-lg'>{edu.title}</h3>
                    <p className='text-sm text-cyan-600 dark:text-cyan-400 font-mono'>{edu.institution}</p>
                  </div>
                  <span className='text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit'>{edu.year}</span>
                </div>
                <p className='text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base'>{edu.description}</p>
              </div>
            ))}
          </ScrollReveal>

          {/* SECCIÓN 4: CERTIFICATIONS - Grid más espaciado */}
          <ScrollReveal animation='fade-up'>
            <h2 className='text-xl md:text-2xl font-bold mb-6 text-cyan-700 dark:text-cyan-300 font-mono tracking-wider flex items-center gap-2'>
              <FaCertificate size={20} className='text-cyan-600 dark:text-cyan-400' /> VERIFIED_CREDENTIALS
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-4 border-2 border-cyan-300 dark:border-cyan-600 rounded-lg bg-white dark:bg-gray-900 hover-lift neon-box group'
                >
                  <div className='flex items-start justify-between mb-2'>
                    <span className='text-xs bg-cyan-600 text-white px-2 py-1 rounded font-bold font-mono'>
                      {cert.badge}
                    </span>
                    <span className='text-xs font-mono text-gray-500'>{cert.year}</span>
                  </div>
                  <h3 className='font-bold text-cyan-700 dark:text-cyan-300 font-mono text-sm mb-1'>{cert.title}</h3>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>{cert.issuer}</p>
                  <div className='flex items-center gap-1 mt-3 text-cyan-600 dark:text-cyan-400 text-xs font-bold font-mono group-hover:text-cyan-500'>
                    VIEW <FaExternalLinkAlt size={10} />
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal animation='fade-up'>
            <div className='flex gap-4 flex-wrap justify-center'>
              <a href='#' className='inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg font-bold font-mono hover:bg-cyan-500 transition neon-box hover-lift'>
                <FaDownload /> DOWNLOAD_CV
              </a>
              <Link to='/contact' className='inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 border-2 border-cyan-300 dark:border-cyan-600 rounded-lg font-bold font-mono hover:bg-cyan-50 dark:hover:bg-gray-800 transition neon-box hover-lift'>
                <FaTerminal /> INIT_CONTACT
              </Link>
            </div>
          </ScrollReveal>
        </div>
        )}
      </div>
    </section>
  )
}