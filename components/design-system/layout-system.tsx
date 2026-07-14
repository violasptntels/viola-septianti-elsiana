import { ArrowRight, Circle, Command, Layers, Palette, Search, Square, Type, Zap } from 'lucide-react'
import { Section, SubLabel, Mono } from './primitives'

const breakpoints = [
  { name: 'sm', px: '640px', use: 'Large phones' },
  { name: 'md', px: '768px', use: 'Tablets' },
  { name: 'lg', px: '1024px', use: 'Laptops' },
  { name: 'xl', px: '1280px', use: 'Desktops' },
  { name: '2xl', px: '1536px', use: 'Wide displays' },
]

function LayoutRules() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <SubLabel>Layout, Container &amp; Grid</SubLabel>
      <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        <li className="flex gap-3">
          <ArrowRight className="mt-0.5 size-4 shrink-0 text-brand" />
          <span>Mobile-first. Design the single-column layout, then enhance upward with responsive prefixes.</span>
        </li>
        <li className="flex gap-3">
          <ArrowRight className="mt-0.5 size-4 shrink-0 text-brand" />
          <span>Content container maxes at <Mono>max-w-6xl</Mono> (1152px), centered with <Mono>mx-auto</Mono> and gutters of <Mono>px-6</Mono> / <Mono>md:px-8</Mono>.</span>
        </li>
        <li className="flex gap-3">
          <ArrowRight className="mt-0.5 size-4 shrink-0 text-brand" />
          <span>Flexbox for most layouts; CSS Grid only for true 2D compositions. Never floats or absolute positioning for structure.</span>
        </li>
        <li className="flex gap-3">
          <ArrowRight className="mt-0.5 size-4 shrink-0 text-brand" />
          <span>Space with <Mono>gap-*</Mono>, never mixing margin and gap on the same element.</span>
        </li>
      </ul>

      <div className="mt-6 grid grid-cols-12 gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex h-12 items-center justify-center rounded-md bg-brand-muted font-mono text-[10px] text-muted-foreground">
            {i + 1}
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-xs text-muted-foreground">12-column grid · gap-2</p>
    </div>
  )
}

function Breakpoints() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <SubLabel>Responsive Breakpoints</SubLabel>
      <div className="divide-y divide-border">
        {breakpoints.map((b) => (
          <div key={b.name} className="flex items-center justify-between py-2.5">
            <span className="font-mono text-sm text-foreground">{b.name}</span>
            <span className="font-mono text-xs text-muted-foreground">{b.px}</span>
            <span className="text-xs text-muted-foreground">{b.use}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function IconsAndMotion() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-6">
        <SubLabel>Icon &amp; Illustration Style</SubLabel>
        <div className="mb-4 flex flex-wrap gap-4">
          {[Zap, Command, Search, Layers, Palette, Type, Circle, Square].map((Icon, i) => (
            <div key={i} className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface">
              <Icon className="size-5 text-foreground" />
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Lucide, stroked at <Mono>1.75px</Mono>, sized 16 / 20 / 24. Illustrations stay abstract and geometric —
          soft gradient orbs, blurred glows, and line grids only. No emoji, no clip-art, no hand-drawn SVG maps.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <SubLabel>Animation Principles</SubLabel>
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
            <span>Fast and purposeful: <Mono>150–300ms</Mono> durations. UI should feel instant, not animated.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
            <span>Custom easing tokens: <Mono>--ease-out-quart</Mono> for entrances, <Mono>--ease-spring</Mono> for playful accents.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
            <span>Micro-interactions only: subtle lifts, opacity, and 1px translations. Respect <Mono>prefers-reduced-motion</Mono>.</span>
          </li>
        </ul>
        <div className="mt-5 flex items-center gap-3">
          <div className="group size-12 rounded-xl bg-brand transition-transform duration-300 ease-out hover:-translate-y-1" style={{ transitionTimingFunction: 'var(--ease-out-quart)' }} aria-hidden />
          <span className="text-xs text-muted-foreground">Hover the square →</span>
        </div>
      </div>
    </div>
  )
}

export function LayoutSystem() {
  return (
    <Section
      id="layout"
      eyebrow="07 · System"
      title="Layout, Motion & Iconography"
      description="The structural rules that keep every page coherent: a mobile-first responsive grid, a centered content container, a stroked icon set, and a fast, restrained motion language."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <LayoutRules />
        <Breakpoints />
      </div>
      <div className="mt-6">
        <IconsAndMotion />
      </div>
    </Section>
  )
}
