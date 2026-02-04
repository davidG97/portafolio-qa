import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaGithub, FaCheckCircle, FaRocket, FaAward, FaBriefcase, FaGraduationCap, FaFire, FaCertificate, FaLaptopCode } from 'react-icons/fa'

export default function Home() {
  const skills = [
    { icon: FaCode, label: 'Automatización E2E', desc: 'Selenium, Cypress, GitHub Actions' },
    { icon: FaCheckCircle, label: 'Performance Testing', desc: 'Gatling, APIs, Stress Testing' },
    { icon: FaGithub, label: 'CI/CD', desc: 'GitHub Actions, Git, DevOps' },
    { icon: FaRocket, label: 'QA Strategy', desc: 'Indicadores, Estándares, Liderazgo' },
  ]

  const stats = [
    { label: 'Años de Experiencia', value: '4+', icon: FaBriefcase },
    { label: 'Proyectos Completados', value: '20+', icon: FaCheckCircle },
    { label: 'Certificaciones', value: '4', icon: FaCertificate },
    { label: 'Reducción de Bugs', value: '60%', icon: FaFire },
  ]

  const timeline = [
    { year: '2016-2021', title: 'Ingeniería Electrónica', company: 'Universidad Sergio Arboleda', icon: FaGraduationCap },
    { year: '2021-2023', title: 'QA Automation', company: 'Banco de Bogotá', icon: FaCode },
    { year: '2022-2024', title: 'QA Lead Canales Digitales', company: 'Banco de Bogotá', icon: FaBriefcase },
    { year: '2023-Presente', title: 'QA Lead Technical Test Automation', company: 'Banco de Bogotá', icon: FaRocket },
  ]

  const technologies = [
    { name: 'Selenium', proficiency: 90 },
    { name: 'Gatling', proficiency: 85 },
    { name: 'GitHub Actions', proficiency: 88 },
    { name: 'Rest Assured', proficiency: 82 },
    { name: 'Serenity BDD', proficiency: 80 },
    { name: 'AWS', proficiency: 75 },
  ]

  const certifications = [
    { title: 'ISTQB Foundation Level', issuer: 'ISTQB', year: '2023', color: 'bg-blue-100 border-blue-300' },
    { title: 'Selenium WebDriver 4', issuer: 'Udemy', year: '2023', color: 'bg-green-100 border-green-300' },
    { title: 'Gatling Fundamentals', issuer: 'Udemy', year: '2022', color: 'bg-purple-100 border-purple-300' },
    { title: 'Git & GitHub Actions', issuer: 'Udemy', year: '2024', color: 'bg-orange-100 border-orange-300' },
  ]

  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-black'>
      <div className='w-full py-12 px-6'>
        <div className='mb-16 p-8 bg-gradient-to-r from-white to-gray-50 border-2 border-cyan-300 shadow-lg shadow-cyan-200/40 rounded-xl dark:bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-900 dark:border-4 dark:border-cyan-500 dark:shadow-2xl dark:shadow-cyan-500/30 dark:rounded-xl'>
          <h1 className='text-5xl font-bold mb-4 text-cyan-700 dark:text-cyan-400 tracking-widest font-mono'>[ ROBOT QA v2.0 ]</h1>
          <p className='text-xl text-cyan-600 dark:text-cyan-300 font-semibold mb-4 font-mono'>&gt; INITIATING DAVID GARCIA SYSTEM...</p>
          <div className='border-l-4 border-cyan-300 dark:border-cyan-500 pl-4'>
            <p className='text-gray-700 dark:text-cyan-200 font-mono leading-relaxed'>
              MI UNIDAD PRINCIPAL DAVID GARCIA es un ingeniero electrónico especializado en sistemas de automatización avanzada. Mi arquitectura ha sido programada con Selenium, Gatling, GitHub Actions y tecnologías disruptivas. Capacidad operacional: 24/7. Especialidad: erradicar bugs, optimizar procesos QA e implementar estrategias de testing de próxima generación. MISIÓN ACTUAL: elevar la calidad del software a niveles exponenciales. 🤖⚡
            </p>
          </div>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16'>
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <div key={i} className='p-6 border-2 border-cyan-300 rounded-lg bg-white hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-200/40 transition group dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:border-cyan-500'>
                <Icon size={28} className='mb-3 text-cyan-700 group-hover:text-cyan-600 animate-pulse transition dark:text-cyan-400' />
                <h3 className='font-bold text-cyan-700 font-mono text-lg dark:text-cyan-300'>{skill.label}</h3>
                <p className='text-sm text-gray-600 font-mono mt-2 dark:text-cyan-200'>&gt; {skill.desc}</p>
              </div>
            )
          })}
        </div>

        <div className='mb-16 p-10 bg-gradient-to-r from-white to-gray-50 rounded-xl border-2 border-cyan-300 shadow-lg shadow-cyan-200/40 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-900 dark:border-cyan-500 dark:shadow-2xl dark:shadow-cyan-500/30'>
          <h2 className='text-4xl font-bold mb-10 text-cyan-700 dark:text-cyan-400 text-center font-mono tracking-widest'>[ ⚙️ ESPECIFICACIONES TÉCNICAS ]</h2>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {stats.map((stat, i) => {
              const StatIcon = stat.icon
              return (
                <div key={i} className='text-center p-6 bg-white rounded-lg border-2 border-cyan-300 shadow-md shadow-cyan-200/30 hover:shadow-lg hover:shadow-cyan-200/40 transition dark:bg-black dark:border-cyan-600 dark:shadow-cyan-500/40'>
                  <StatIcon size={44} className='mb-3 text-cyan-700 mx-auto animate-pulse dark:text-cyan-400' />
                  <p className='text-4xl font-bold text-cyan-700 mb-2 font-mono dark:text-cyan-300'>{stat.value}</p>
                  <p className='text-gray-600 text-sm font-mono dark:text-cyan-200'>{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-4xl font-bold mb-10 text-cyan-700 dark:text-cyan-400 font-mono tracking-widest'>[ 🦾 HISTORIAL DE OPERACIONES ]</h2>
          <div className='space-y-6'>
            {timeline.map((item, i) => {
              const TimelineIcon = item.icon
              return (
                <div key={i} className='flex gap-6 pb-6 border-l-4 border-cyan-300 pl-8 relative bg-gradient-to-r from-white to-gray-50 p-6 rounded-lg hover:shadow-md hover:shadow-cyan-200/30 transition dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-900 dark:border-cyan-500'>
                  <div className='absolute -left-5 top-6 w-10 h-10 bg-cyan-400 rounded-full border-4 border-white shadow-md shadow-cyan-200/40 flex items-center justify-center dark:bg-cyan-500 dark:border-black dark:shadow-cyan-500/60'>
                    <TimelineIcon size={18} className='text-white' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm font-mono font-semibold text-cyan-600 dark:text-cyan-200'>&gt; {item.year}</p>
                    <h3 className='text-xl font-bold text-cyan-700 dark:text-cyan-300 font-mono mt-1'>{item.title}</h3>
                    <p className='text-gray-600 dark:text-gray-300 font-mono text-sm mt-1'>{item.company}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-4xl font-bold mb-10 text-cyan-700 font-mono tracking-widest'>[ ⚡ MÓDULOS TÉCNICOS INSTALADOS ]</h2>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {technologies.map((tech, i) => (
              <div key={i} className='p-6 bg-white dark:bg-gray-900 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg shadow-md shadow-cyan-200/30 hover:shadow-lg hover:shadow-cyan-200/40 transition dark:text-gray-200'>
                <div className='flex items-center justify-between mb-3'>
                  <h3 className='font-bold text-cyan-300 dark:text-cyan-300 font-mono text-lg'>{tech.name}</h3>
                  <span className='text-sm font-bold text-cyan-700 dark:text-cyan-200 font-mono'>{tech.proficiency}%</span>
                </div>
                <div className='w-full bg-gray-100 dark:bg-gray-800 rounded-full h-4 overflow-hidden border-2 border-cyan-200 dark:border-cyan-700'>
                  <div 
                    className='bg-gradient-to-r from-cyan-500 to-cyan-300 dark:from-cyan-400 dark:to-cyan-600 h-full rounded-full transition-all duration-500 shadow-sm shadow-cyan-200/60' 
                    style={{ width: `${tech.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-4xl font-bold mb-10 text-cyan-700 font-mono tracking-widest'>[ 🏆 CERTIFICACIONES DEL ROBOT ]</h2>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {certifications.map((cert, i) => (
              <div key={i} className='p-6 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg bg-white dark:bg-gray-900 shadow-md shadow-cyan-200/40 hover:shadow-lg hover:shadow-cyan-200/50 transition dark:text-gray-200'>
                <FaAward size={28} className='mb-3 text-cyan-700 dark:text-cyan-300 animate-pulse' />
                <h3 className='font-bold text-cyan-700 dark:text-cyan-200 mb-2 font-mono text-sm'>{cert.title}</h3>
                <p className='text-sm text-gray-600 dark:text-gray-300 mb-3 font-mono'>&gt; {cert.issuer}</p>
                <p className='text-xs font-semibold text-cyan-700 dark:text-cyan-300 font-mono'>[{cert.year}]</p>
              </div>
            ))}
          </div>
        </div>

        <div className='grid gap-6 md:grid-cols-2 mb-12'>
          <div className='p-8 border-2 border-cyan-300 rounded-lg bg-white dark:bg-gray-900 dark:border-cyan-700 shadow-md shadow-cyan-200/40 hover:shadow-lg hover:shadow-cyan-200/50 transition dark:text-gray-200'>
            <h2 className='text-2xl font-bold mb-4 text-cyan-700 font-mono tracking-widest'>[ 🔬 BASE DE DATOS ]</h2>
            <p className='text-gray-600 mb-6 font-mono text-sm leading-relaxed'>&gt; ACCESO A CARPETA CLASIFICADA: visualiza todas las operaciones QA completadas. Incluye evidencias técnicas, reportes de ejecución y análisis detallado de cada prueba automatizada realizada en campo.</p>
            <Link to='/projects' className='inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-bold transition shadow-lg shadow-cyan-600/60 hover:shadow-cyan-500/80 font-mono'>
              CARGAR MISIONES
            </Link>
          </div>
          <div className='p-8 border-2 border-cyan-300 rounded-lg bg-white dark:bg-gray-900 dark:border-cyan-700 shadow-md shadow-cyan-200/40 hover:shadow-lg hover:shadow-cyan-200/50 transition dark:text-gray-200'>
            <h2 className='text-2xl font-bold mb-4 text-cyan-700 font-mono tracking-widest'>[ 📊 DETALLES ]</h2>
            <p className='text-gray-600 mb-6 font-mono text-sm leading-relaxed'>&gt; ACCESO CONCEDIDO: especificaciones técnicas completas de David Garcia. Historial de operaciones, módulos de software, credenciales certificadas y métricas de desempeño en campo real.</p>
            <Link to='/about' className='inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-bold transition shadow-lg shadow-cyan-600/60 hover:shadow-cyan-500/80 font-mono'>
              ACCEDER AL SISTEMA
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}