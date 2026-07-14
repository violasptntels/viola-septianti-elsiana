'use client'

import { Quote, CircleCheck, Zap, ShieldCheck, MessageSquare } from 'lucide-react'
import { Container, SectionHeader, SectionShell } from './section'
import { FadeUp, Stagger, StaggerItem, HoverCard, Reveal } from '@/components/animations/motion-primitives'

const reasons = [
  {
    icon: Zap,
    title: 'Fast & efficient',
    desc: 'I build scalable solutions quickly without compromising on quality or maintainability.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality focused',
    desc: 'Every project is backed by thorough testing to ensure reliability and a smooth user experience.',
  },
  {
    icon: MessageSquare,
    title: 'Clear communicator',
    desc: 'I believe in transparent updates, collaborative problem-solving, and keeping everyone aligned.',
  },
  {
    icon: CircleCheck,
    title: 'End-to-end ownership',
    desc: 'From concept to deployment, I take full responsibility for delivering high-quality results.',
  },
]

export function WhyMe() {
  return (
    <SectionShell id="why" className="border-t border-border">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeader
              index="08"
              eyebrow="Why Work With Me"
              title="A developer who values quality."
              description="Combining strong technical skills with a thorough quality assurance mindset to deliver reliable software."
            />

            <Stagger staggerDelay={0.06}>
              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map((r) => (
                  <StaggerItem key={r.title}>
                    <HoverCard lift={-4} scale={1.01}>
                      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-brand-muted text-brand">
                          <r.icon className="size-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">{r.title}</h3>
                          <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                            {r.desc}
                          </p>
                        </div>
                      </div>
                    </HoverCard>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal y={30}>
              <figure className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-60 blur-3xl"
                  aria-hidden
                  style={{ background: 'var(--brand-muted)' }}
                />
                <Quote className="size-8 text-brand" />
                <blockquote className="mt-4 text-pretty text-lg leading-relaxed text-foreground">
                  &ldquo;Passionate about creating high-quality digital solutions, improving software
                  performance, and continuously expanding technical expertise in emerging
                  technologies.&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-6">
                  <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-chart-5 font-mono text-sm font-semibold text-brand-foreground">
                    VS
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Viola Septianti Elsiana</p>
                    <p className="text-xs text-muted-foreground">Full Stack Developer & SQE</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>

            <Stagger staggerDelay={0.08}>
              <div className="grid grid-cols-3 gap-4">
                  {[
                  { v: '3.74', l: 'Current GPA' },
                  { v: '6+', l: 'Projects completed' },
                  { v: '3', l: 'Years of study' },
                ].map((s) => (
                  <StaggerItem key={s.l}>
                    <div className="rounded-2xl border border-border bg-card p-5 text-center">
                      <p className="text-2xl font-semibold tracking-tight text-brand">{s.v}</p>
                      <p className="mt-1 text-xs leading-tight text-muted-foreground">{s.l}</p>
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
