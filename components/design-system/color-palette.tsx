import { Section, SubLabel } from './primitives'

type Swatch = {
  name: string
  token: string
  className: string
  textClassName?: string
  note?: string
}

const brand: Swatch[] = [
  { name: 'Brand', token: '--brand', className: 'bg-brand', textClassName: 'text-brand-foreground', note: 'Electric blue accent' },
  { name: 'Brand Muted', token: '--brand-muted', className: 'bg-[var(--brand-muted)]', textClassName: 'text-foreground', note: 'Tints, glows, focus' },
]

const surfaces: Swatch[] = [
  { name: 'Background', token: '--background', className: 'bg-background', textClassName: 'text-foreground' },
  { name: 'Surface', token: '--surface', className: 'bg-surface', textClassName: 'text-foreground' },
  { name: 'Surface Elevated', token: '--surface-elevated', className: 'bg-surface-elevated', textClassName: 'text-foreground' },
  { name: 'Card', token: '--card', className: 'bg-card', textClassName: 'text-card-foreground' },
]

const content: Swatch[] = [
  { name: 'Foreground', token: '--foreground', className: 'bg-foreground', textClassName: 'text-background' },
  { name: 'Muted Fg', token: '--muted-foreground', className: 'bg-muted-foreground', textClassName: 'text-background' },
  { name: 'Muted', token: '--muted', className: 'bg-muted', textClassName: 'text-foreground' },
  { name: 'Border', token: '--border', className: 'bg-[var(--border)]', textClassName: 'text-foreground' },
]

const status: Swatch[] = [
  { name: 'Success', token: '--success', className: 'bg-success', textClassName: 'text-[var(--success-foreground)]' },
  { name: 'Warning', token: '--warning', className: 'bg-warning', textClassName: 'text-[var(--warning-foreground)]' },
  { name: 'Destructive', token: '--destructive', className: 'bg-destructive', textClassName: 'text-[var(--destructive-foreground)]' },
]

function SwatchGrid({ items }: { items: Swatch[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((s) => (
        <div key={s.name} className="overflow-hidden rounded-xl border border-border bg-card">
          <div className={`flex h-24 items-end p-3 ${s.className}`}>
            <span className={`font-mono text-xs ${s.textClassName ?? 'text-foreground'}`}>{s.name}</span>
          </div>
          <div className="border-t border-border px-3 py-2.5">
            <p className="font-mono text-xs text-muted-foreground">{s.token}</p>
            {s.note ? <p className="mt-1 text-xs text-muted-foreground/70">{s.note}</p> : null}
          </div>
        </div>
      ))}
    </div>
  )
}

export function ColorPalette() {
  return (
    <Section
      id="color"
      eyebrow="01 · Foundations"
      title="Color Palette"
      description="A restrained, dark-first system: a near-black cool base, a high-contrast neutral ramp, and a single electric-blue brand accent. Every value is defined in OKLCH for perceptual consistency. Total palette stays within 5 hues — one brand, neutrals, and status colors."
    >
      <div className="space-y-10">
        <div>
          <SubLabel>Brand</SubLabel>
          <SwatchGrid items={brand} />
        </div>
        <div>
          <SubLabel>Surfaces</SubLabel>
          <SwatchGrid items={surfaces} />
        </div>
        <div>
          <SubLabel>Content &amp; Lines</SubLabel>
          <SwatchGrid items={content} />
        </div>
        <div>
          <SubLabel>Status</SubLabel>
          <SwatchGrid items={status} />
        </div>
      </div>
    </Section>
  )
}
