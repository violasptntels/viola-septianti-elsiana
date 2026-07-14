'use client'

import { Layers, ShieldCheck, Workflow, Gauge, Smartphone, Bug } from 'lucide-react'
import { Container, SectionHeader, SectionShell } from './section'
import { FadeUp, Stagger, StaggerItem, HoverCard } from '@/components/animations/motion-primitives'

const services = [
  {
    icon: Layers,
    title: 'Full-Stack Development',
    desc: 'Building scalable web applications from database design to responsive interfaces using modern frameworks.',
    points: ['Next.js & React apps', 'RESTful API development', 'Laravel & Node.js backends'],
  },
  {
    icon: ShieldCheck,
    title: 'Software Quality Assurance',
    desc: 'Comprehensive testing strategies to ensure reliable, bug-free software releases.',
    points: ['Functional & regression testing', 'User Acceptance Testing', 'Test case & scenario design'],
  },
  {
    icon: Workflow,
    title: 'AI Integration',
    desc: 'Integrating AI capabilities into web applications using modern APIs and modular architectures.',
    points: ['Gemini API integration', 'AI-powered features', 'Prompt engineering'],
  },
  {
    icon: Gauge,
    title: 'Front-End Development',
    desc: 'Creating modern, responsive, and accessible user interfaces with cutting-edge frameworks.',
    points: ['React & Next.js', 'Tailwind CSS & styling', 'Cross-platform with Flutter'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Building cross-platform mobile applications with native-quality performance using Flutter.',
    points: ['Flutter & Dart apps', 'Cross-platform development', 'Responsive mobile UI'],
  },
  {
    icon: Bug,
    title: 'Bug Reporting & Documentation',
    desc: 'Detailed bug reports, user guides, and technical documentation for development teams.',
    points: ['Bug identification & reproduction', 'User guide preparation', 'Technical documentation'],
  },
]

export function Services() {
  return (
    <SectionShell id="services" className="border-t border-border">
      <Container>
        <FadeUp>
          <SectionHeader
            index="03"
            eyebrow="Services"
            title="What I can do for you."
            description="From full-stack development to quality assurance and AI integration — I deliver reliable digital solutions."
          />
        </FadeUp>

        <Stagger
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
        >
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <HoverCard lift={-6} scale={1.02}>
                <article className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6">
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                    style={{ background: 'var(--brand-muted)' }}
                  />
                  <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-surface text-brand">
                    <s.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                  <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-brand" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </HoverCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionShell>
  )
}
