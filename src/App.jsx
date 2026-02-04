import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  useEffect(() => {
    // Respect saved preference, otherwise default to dark
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'light') document.documentElement.classList.remove('dark')
      else document.documentElement.classList.add('dark')
    } catch (e) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-black text-gray-900 dark:text-cyan-200">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
