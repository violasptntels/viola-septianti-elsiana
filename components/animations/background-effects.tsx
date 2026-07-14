'use client'

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

export function AnimatedGrid({ className }: { className?: string }) {
  const prefersReduced = useReducedMotion()
  const mounted = useMounted()

  if (!mounted) return null
  if (prefersReduced) return <div className={cn('pointer-events-none absolute inset-0 -z-10', className)} aria-hidden />

  return (
    <motion.div
      className={cn('pointer-events-none absolute inset-0 -z-10', className)}
      aria-hidden
      style={{
        backgroundImage:
          'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage:
          'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
      }}
      animate={{ opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export function GradientBlobs({ className }: { className?: string }) {
  const prefersReduced = useReducedMotion()
  const mounted = useMounted()

  if (!mounted) return null
  if (prefersReduced) return null

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 overflow-hidden',
        className,
      )}
      aria-hidden
    >
      <motion.div
        className="absolute -left-32 -top-32 size-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--brand-muted)' }}
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-32 size-80 rounded-full opacity-15 blur-3xl"
        style={{ background: 'var(--chart-5)' }}
        animate={{ x: [0, -50, 40, 0], y: [0, 60, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 size-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--chart-4)' }}
        animate={{ x: [0, 40, -60, 0], y: [0, -30, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export function Particles({ className }: { className?: string }) {
  const prefersReduced = useReducedMotion()
  const mounted = useMounted()

  if (!mounted) return null
  if (prefersReduced) return null

  const dots = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 8,
    duration: Math.random() * 12 + 10,
  }))

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 -z-10',
        className,
      )}
      aria-hidden
    >
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            background: 'var(--brand)',
            opacity: 0.25,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.35, 0.1] }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            delay: d.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export function CursorGlow({ className }: { className?: string }) {
  const prefersReduced = useReducedMotion()
  const mounted = useMounted()

  const mouseX = useMotionValue(-999)
  const mouseY = useMotionValue(-999)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 25 })

  useEffect(() => {
    if (!mounted || prefersReduced) return

    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouse, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mounted, prefersReduced, mouseX, mouseY])

  if (!mounted) return null
  if (prefersReduced) return null

  return (
    <motion.div
      className={cn('pointer-events-none fixed -z-10 size-[480px] rounded-full opacity-[0.08] blur-3xl', className)}
      style={{
        background:
          'radial-gradient(circle, var(--brand), transparent 70%)',
        translateX: '-50%',
        translateY: '-50%',
        x: springX,
        y: springY,
      }}
    />
  )
}
