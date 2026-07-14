'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code, ShieldCheck, MapPin, Clock } from 'lucide-react'
import { Container, SectionHeader, SectionShell } from './section'
import { FadeUp, Stagger, StaggerItem } from '@/components/animations/motion-primitives'

function PhotoCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="absolute inset-0 -z-10 rounded-3xl opacity-70 blur-2xl"
        aria-hidden
        style={{
          background:
            'radial-gradient(circle at 50% 30%, var(--brand-muted), transparent 70%)',
        }}
      />
      <div className="overflow-hidden rounded-3xl border border-border bg-card p-3">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
          <Image
            src="/placeholder-user.jpg"
            alt="Viola Septianti Elsiana"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>
      </div>
    </div>
  )
}

const facts = [
  { icon: Code, label: 'Focus', value: 'Full-stack development & QA' },
  { icon: ShieldCheck, label: 'Discipline', value: 'Software Quality Engineering' },
  { icon: MapPin, label: 'Based in', value: 'Bandung, Indonesia · Remote' },
  { icon: Clock, label: 'Education', value: 'Informatics Engineering · GPA 3.74' },
]

export function About() {
  return (
    <SectionShell id="about" className="border-t border-border">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <FadeUp y={30} duration={0.7}>
            <PhotoCard />
          </FadeUp>

          <div className="flex flex-col gap-8">
            <SectionHeader
              index="01"
              eyebrow="About"
              title="Engineering with quality in mind."
              description="Informatics Engineering student with hands-on experience in Backend Development, Software Quality Assurance, and Front-End Development through academic and industry projects."
            />

            <FadeUp delay={0.1}>
              <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Skilled in building scalable and maintainable web applications using Next.js, React,
                TypeScript, Laravel, Flutter, and Tailwind CSS. Experienced in developing RESTful
                APIs, implementing software testing practices, and designing modular application
                architectures.
              </p>
            </FadeUp>

            <Stagger staggerDelay={0.06}>
              <div className="grid gap-4 sm:grid-cols-2">
                {facts.map((f) => (
                  <StaggerItem key={f.label}>
                    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted text-brand">
                        <f.icon className="size-5" />
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          {f.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-foreground">{f.value}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
