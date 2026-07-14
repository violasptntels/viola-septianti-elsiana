import { Section, SubLabel, Mono } from './primitives'

const scale = [
  { name: 'Display', cls: 'text-5xl font-semibold tracking-tight', spec: '48px · 600 · -0.02em' },
  { name: 'H1', cls: 'text-4xl font-semibold tracking-tight', spec: '36px · 600 · -0.02em' },
  { name: 'H2', cls: 'text-3xl font-semibold tracking-tight', spec: '30px · 600 · -0.01em' },
  { name: 'H3', cls: 'text-2xl font-medium tracking-tight', spec: '24px · 500' },
  { name: 'H4', cls: 'text-xl font-medium', spec: '20px · 500' },
  { name: 'Body Large', cls: 'text-lg leading-relaxed', spec: '18px · 400 · 1.6' },
  { name: 'Body', cls: 'text-base leading-relaxed', spec: '16px · 400 · 1.6' },
  { name: 'Small', cls: 'text-sm leading-6 text-muted-foreground', spec: '14px · 400' },
  { name: 'Caption', cls: 'text-xs uppercase tracking-[0.2em] text-muted-foreground', spec: '12px · 400 · 0.2em' },
]

export function Typography() {
  return (
    <Section
      id="typography"
      eyebrow="02 · Foundations"
      title="Typography"
      description="Two families only. Geist Sans carries all UI and content with tightened tracking on large sizes; Geist Mono handles code, tokens, and technical labels. Body copy holds a 1.6 line-height for comfortable reading."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <SubLabel>Geist Sans — UI &amp; Content</SubLabel>
          <p className="font-sans text-4xl tracking-tight text-foreground">Aa</p>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            <Mono>font-sans</Mono> · weights 400 / 500 / 600
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <SubLabel>Geist Mono — Code &amp; Labels</SubLabel>
          <p className="font-mono text-4xl text-foreground">Aa</p>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            <Mono>font-mono</Mono> · weights 400 / 500
          </p>
        </div>
      </div>

      <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
        {scale.map((row) => (
          <div key={row.name} className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-baseline sm:justify-between">
            <span className={`${row.cls} text-foreground`}>{row.name}</span>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">{row.spec}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
