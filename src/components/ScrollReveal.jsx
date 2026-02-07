import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * ScrollReveal component that animates children when they enter viewport
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'robot'} props.animation - Animation type
 * @param {number} props.delay - Animation delay in ms
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.as - HTML element to render (default: div)
 */
export default function ScrollReveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '',
  as: Component = 'div',
  threshold = 0.1,
  ...props 
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold })

  const animationClasses = {
    'fade-up': 'scroll-fade-in-up',
    'fade-left': 'scroll-fade-in-left',
    'fade-right': 'scroll-fade-in-right',
    'scale': 'scroll-scale-in',
    'robot': 'scroll-robot-reveal',
    'count': 'scroll-count-up',
    'stagger': 'stagger-children'
  }

  const baseClass = animationClasses[animation] || 'scroll-fade-in-up'

  return (
    <Component
      ref={ref}
      className={`${baseClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      {...props}
    >
      {children}
    </Component>
  )
}

/**
 * Simple reveal wrapper for inline elements
 */
export function RevealText({ children, delay = 0, className = '' }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <span
      ref={ref}
      className={`scroll-fade-in-up inline-block ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </span>
  )
}
