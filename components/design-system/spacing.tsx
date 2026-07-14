import { Section, SubLabel, Mono } from './primitives'

const steps = [
  { token: '1', px: '4px', w: 'w-1' },
  { token: '2', px: '8px', w: 'w-2' },
  { token: '3', px: '12px', w: 'w-3' },
  { token: '4', px: '16px', w: 'w-4' },
  { token: '6', px: '24px', w: 'w-6' },
  { token: '8', px: '32px', w: 'w-8' },
  { token: '12', px: '48px', w: 'w-12' },
  { token: '16', px: '64px', w: 'w-16' },
  { token: '24', px: '96px', w: 'w-24' },
]

export function Spacing() {
  return (
    <Section
      id="spacing"
      eyebrow="03 · Foundations"
      title="Spacing — 8pt Grid"
      description="All spacing derives from a 4px base on an 8pt rhythm. Use Tailwind's scale (never arbitrary pixel values) and prefer gap utilities over margins for layout. This keeps vertical and horizontal rhythm consistent across every breakpoint."
    >
      <div className="rounded-2xl border border-border bg-card p-6">
        <SubLabel>Scale</SubLabel>
        <div className="space-y-3">
          {steps.map((s) => (
            <div key={s.token} className="flex items-center gap-4">
              <span className="w-10 shrink-0 font-mono text-xs text-muted-foreground">{s.token}</span>
              <div className={`h-4 rounded-sm bg-brand ${s.w}`} aria-hidden />
              <span className="font-mono text-xs text-muted-foreground">{s.px}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Rule of thumb: element padding uses <Mono>p-2</Mono>–<Mono>p-6</Mono>, component gaps use{' '}
          <Mono>gap-3</Mono>–<Mono>gap-8</Mono>, and section rhythm uses <Mono>py-16</Mono>–<Mono>py-24</Mono>.
        </p>
      </div>
    </Section>
  )
}
