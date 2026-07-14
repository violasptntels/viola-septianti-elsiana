'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ease } from '@/lib/constants'

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  className,
  once = true,
}: {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
  once?: boolean
}) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
}

export function Stagger({
  children,
  className,
  once = true,
  staggerDelay = 0.08,
  margin = '-40px',
}: {
  children: ReactNode
  className?: string
  once?: boolean
  staggerDelay?: number
  margin?: string
}) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) return <div className={className}>{children}</div>

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

export function Floating({
  children,
  amplitude = 10,
  duration = 4,
  delay = 0,
  className,
}: {
  children: ReactNode
  amplitude?: number
  duration?: number
  delay?: number
  className?: string
}) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{ duration, repeat: Infinity, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function HoverCard({
  children,
  className,
  lift = -4,
  scale = 1.01,
}: {
  children: ReactNode
  className?: string
  lift?: number
  scale?: number
}) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      whileHover={{ y: lift, scale }}
      transition={{ duration: 0.3, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleOnHover({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.35, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
