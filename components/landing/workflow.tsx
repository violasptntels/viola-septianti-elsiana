'use client'

import { Search, PencilRuler, Code, TestTubes, Rocket } from 'lucide-react'
import { Container, SectionHeader, SectionShell } from './section'
import { FadeUp, Stagger, StaggerItem } from '@/components/animations/motion-primitives'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'Understand the problem, users, and constraints before a single line is written.',
  },
  {
    icon: PencilRuler,
    title: 'Design',
    desc: 'Architect the system and define acceptance criteria and a test plan up front.',
  },
  {
    icon: Code,
    title: 'Build',
    desc: 'Ship in small, reviewable increments with testability baked into the code.',
  },
  {
    icon: TestTubes,
    title: 'Verify',
    desc: 'Automated unit, integration, and E2E suites gate every change in CI.',
  },
  {
    icon: Rocket,
    title: 'Ship',
    desc: 'Deploy with confidence, monitor in production, and iterate on real feedback.',
  },
]

export function WorkflowSection() {
  return (
    <SectionShell id="workflow" className="border-t border-border">
      <Container>
        <FadeUp>
          <SectionHeader
            index="06"
            eyebrow="Workflow"
            title="A process built for confident releases."
            description="A repeatable rhythm that keeps momentum high and quality non-negotiable."
          />
        </FadeUp>

        <Stagger
          className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          staggerDelay={0.08}
        >
          {steps.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                {i < steps.length - 1 ? (
                  <span
                    className="absolute right-[-14px] top-1/2 z-10 hidden size-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground lg:flex"
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                ) : null}
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-muted text-brand">
                    <s.icon className="size-5" />
                  </div>
                  <span className="font-mono text-2xl font-semibold text-border">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionShell>
  )
}
