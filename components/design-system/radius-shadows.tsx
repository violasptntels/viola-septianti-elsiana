import { Section, SubLabel } from './primitives'

const radii = [
  { name: 'xs', cls: 'rounded-xs' },
  { name: 'sm', cls: 'rounded-sm' },
  { name: 'md', cls: 'rounded-md' },
  { name: 'lg', cls: 'rounded-lg' },
  { name: 'xl', cls: 'rounded-xl' },
  { name: '2xl', cls: 'rounded-2xl' },
  { name: '3xl', cls: 'rounded-3xl' },
  { name: 'full', cls: 'rounded-full' },
]

const shadows = [
  { name: 'xs', cls: 'elevation-sm', token: '--shadow-xs' },
  { name: 'sm', cls: 'elevation-sm', token: '--shadow-sm' },
  { name: 'md', cls: 'elevation-md', token: '--shadow-md' },
  { name: 'lg', cls: 'elevation-lg', token: '--shadow-lg' },
  { name: 'xl', cls: 'elevation-xl', token: '--shadow-xl' },
]

export function RadiusShadows() {
  return (
    <Section
      id="radius-shadows"
      eyebrow="04 · Foundations"
      title="Radius & Elevation"
      description="Corner radius scales from a single --radius token (0.75rem) so the whole system reshapes from one variable. Shadows are soft, low-opacity, and multi-layered to read as ambient depth rather than hard drop shadows."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <SubLabel>Border Radius</SubLabel>
          <div className="flex flex-wrap gap-4">
            {radii.map((r) => (
              <div key={r.name} className="flex flex-col items-center gap-2">
                <div className={`size-16 border border-border bg-brand-muted ${r.cls}`} aria-hidden />
                <span className="font-mono text-xs text-muted-foreground">{r.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <SubLabel>Shadows</SubLabel>
          <div className="flex flex-wrap gap-6 py-2">
            {shadows.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-3">
                <div className={`size-16 rounded-xl border border-border bg-surface-elevated ${s.cls}`} aria-hidden />
                <span className="font-mono text-xs text-muted-foreground">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
