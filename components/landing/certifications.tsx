'use client'

import { Award } from 'lucide-react'
import { Container, SectionHeader, SectionShell } from './section'
import { FadeUp, Stagger, StaggerItem, HoverCard } from '@/components/animations/motion-primitives'

const certs = [
  { name: 'Oracle Java Programming', org: 'Oracle', year: '2024' },
  { name: 'Google Go (Golang)', org: 'Mindluster', year: '2024' },
]

export function Certifications() {
  return (
    <SectionShell id="certifications" className="border-t border-border">
      <Container>
        <FadeUp>
          <SectionHeader
            index="07"
            eyebrow="Certifications"
            title="Certifications."
            description="Industry-recognized credentials that validate my technical expertise."
          />
        </FadeUp>

        <Stagger
          className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
        >
          {certs.map((c) => (
            <StaggerItem key={c.name}>
              <HoverCard lift={-3} scale={1.01}>
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/40">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-brand transition-colors group-hover:bg-brand-muted">
                    <Award className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-foreground">{c.name}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {c.org} · {c.year}
                    </p>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionShell>
  )
}
