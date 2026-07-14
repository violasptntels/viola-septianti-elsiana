'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SocialLinks } from '@/components/ui/social-links'
import { Container } from './section'
import { AnimatedGrid } from '@/components/animations/background-effects'

function OrbitDecor() {
  return (
    <svg
      viewBox="0 0 420 420"
      className="pointer-events-none absolute -right-16 -top-10 hidden h-[520px] w-[520px] opacity-70 lg:block"
      aria-hidden
    >
      <defs>
        <radialGradient id="orbit-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.14" />
          <stop offset="70%" stopColor="var(--brand)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="210" cy="210" r="200" fill="url(#orbit-fade)" />
      {[70, 120, 175].map((r) => (
        <circle
          key={r}
          cx="210"
          cy="210"
          r={r}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
        />
      ))}
      <circle cx="210" cy="40" r="4" fill="var(--brand)" />
      <circle cx="330" cy="210" r="3" fill="var(--chart-5)" />
      <circle cx="90" cy="285" r="3" fill="var(--success)" />
    </svg>
  )
}

export function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <AnimatedGrid />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse at center, var(--brand-muted), transparent 70%)',
        }}
        animate={prefersReduced ? {} : { opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <OrbitDecor />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-start gap-6">
            <div className="glass-subtle inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              <span className="text-muted-foreground">Available for new projects</span>
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Building software that{' '}
              <span className="relative whitespace-nowrap text-brand">ships fast</span>
              <br />
              and{' '}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                stays reliable.
              </span>
            </h1>

            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;m{' '}
              <span className="font-medium text-foreground">Viola Septianti Elsiana</span> — a Full
              Stack Developer and Software Quality Engineer. I build scalable web applications and
              ensure software quality through rigorous testing practices.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                nativeButton={false}
                className="h-11 gap-2 rounded-xl bg-brand px-5 text-sm text-brand-foreground hover:opacity-90"
                render={
                  <a href="#projects">
                    View my work <ArrowRight className="size-4" />
                  </a>
                }
              />
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                className="h-11 gap-2 rounded-xl px-5 text-sm"
                render={
                  <a href="#contact">
                    <Sparkles className="size-4 text-brand" /> Get in touch
                  </a>
                }
              />
              <SocialLinks />
            </div>

            <dl className="mt-4 grid w-full max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                { v: '3', l: 'Years learning' },
                { v: '6+', l: 'Projects built' },
                { v: '3.74', l: 'Current GPA' },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="text-2xl font-semibold tracking-tight text-foreground">{s.v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden lg:block" />
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown className="size-3.5 animate-bounce" /> Scroll to explore
          </a>
        </div>
      </Container>
    </section>
  )
}
