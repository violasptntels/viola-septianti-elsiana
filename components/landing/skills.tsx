'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CodeXml, Server, TestTubes, Boxes } from 'lucide-react'
import { Container, SectionHeader, SectionShell } from './section'
import { FadeUp, Stagger, StaggerItem, Floating } from '@/components/animations/motion-primitives'
import { ease } from '@/lib/constants'

const groups = [
  {
    icon: CodeXml,
    title: 'Languages & Frameworks',
    blurb: 'Full-stack development tools.',
    skills: [
      { name: 'JavaScript / TypeScript', level: 88 },
      { name: 'Next.js / React', level: 85 },
      { name: 'Laravel / PHP', level: 78 },
    ],
    tags: ['Dart', 'Golang', 'Flutter', 'Node.js'],
  },
  {
    icon: Server,
    title: 'Backend & Databases',
    blurb: 'Scalable services & data.',
    skills: [
      { name: 'RESTful APIs', level: 85 },
      { name: 'PostgreSQL / MySQL', level: 80 },
      { name: 'API Integration', level: 82 },
    ],
    tags: ['Node.js', 'Laravel', 'Prisma', 'Postman'],
  },
  {
    icon: TestTubes,
    title: 'Software Quality',
    blurb: 'Testing & quality assurance.',
    skills: [
      { name: 'Functional Testing', level: 88 },
      { name: 'Regression Testing', level: 85 },
      { name: 'UAT', level: 82 },
    ],
    tags: ['Test Case Design', 'Bug Reporting', 'Selenium', 'Postman'],
  },
  {
    icon: Boxes,
    title: 'Tools & Version Control',
    blurb: 'Development & collaboration.',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'CI/CD', level: 75 },
      { name: 'Agile / Project Mgmt', level: 78 },
    ],
    tags: ['Trello', 'Vercel', 'Git', 'GitHub'],
  },
]

function Meter({ level, label }: { level: number; label: string }) {
  const prefersReduced = useReducedMotion()

  return (
    <div
      role="progressbar"
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className="h-1.5 w-full overflow-hidden rounded-full bg-secondary"
    >
      <motion.div
        className="h-full origin-left rounded-full bg-gradient-to-r from-brand to-chart-5"
        initial={prefersReduced ? undefined : { scaleX: 0 }}
        whileInView={prefersReduced ? undefined : { scaleX: level / 100 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
      />
    </div>
  )
}

export function Skills() {
  return (
    <SectionShell id="skills" className="border-t border-border">
      <Container>
        <SectionHeader
          index="02"
          eyebrow="Skills"
          title="A versatile tech stack for quality software."
          description="Proficient across multiple languages, frameworks, and testing methodologies to build and ensure high-quality digital solutions."
        />

        <Stagger
          className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.1}
        >
          {groups.map((g, index) => (
            <StaggerItem key={g.title}>
              <div className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40">
                <Floating amplitude={6} duration={3} delay={index * 0.15}>
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-brand-muted text-brand">
                      <g.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{g.title}</h3>
                      <p className="text-xs text-muted-foreground">{g.blurb}</p>
                    </div>
                  </div>
                </Floating>

                <div className="flex flex-col gap-3">
                  {g.skills.map((s) => (
                    <div key={s.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-foreground">{s.name}</span>
                        <span className="font-mono text-muted-foreground">{s.level}%</span>
                      </div>
                      <Meter level={s.level} label={`${s.name}: ${s.level}%`} />
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {g.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionShell>
  )
}
