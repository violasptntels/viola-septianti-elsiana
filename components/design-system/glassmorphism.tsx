import { Command, Sparkles } from 'lucide-react'
import { Section, Mono } from './primitives'

export function Glassmorphism() {
  return (
    <Section
      id="glass"
      eyebrow="05 · Foundations"
      title="Glassmorphism"
      description="Used sparingly for floating layers — navigation bars, command menus, and overlays. A frosted surface with 16px blur, 180% saturation, a 1px translucent border, and an inner top highlight. Never apply it to dense content areas."
    >
      <div className="relative overflow-hidden rounded-3xl border border-border p-8 md:p-12">
        {/* Backdrop content to demonstrate the blur */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-10 top-6 size-48 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute right-0 bottom-0 size-56 rounded-full bg-success/25 blur-3xl" />
          <div className="absolute left-1/3 top-1/2 size-40 rounded-full bg-warning/20 blur-3xl" />
        </div>

        <div className="relative flex flex-col gap-6">
          <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
            <Command className="size-5 text-brand" />
            <div>
              <p className="text-sm font-medium text-foreground">Command Menu</p>
              <p className="text-xs text-muted-foreground">.glass · blur(16px) saturate(180%)</p>
            </div>
          </div>

          <div className="glass-subtle flex items-center gap-3 rounded-2xl px-5 py-4">
            <Sparkles className="size-5 text-brand" />
            <div>
              <p className="text-sm font-medium text-foreground">Subtle Glass</p>
              <p className="text-xs text-muted-foreground">.glass-subtle · lighter blur for nav bars</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Utilities: <Mono>.glass</Mono> for overlays and menus, <Mono>.glass-subtle</Mono> for sticky headers. Both
        pull from <Mono>--glass-bg</Mono>, <Mono>--glass-border</Mono>, and <Mono>--glass-highlight</Mono>.
      </p>
    </Section>
  )
}
