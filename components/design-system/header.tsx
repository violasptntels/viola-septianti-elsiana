import { Sparkles } from 'lucide-react'

const nav = [
  { href: '#color', label: 'Color' },
  { href: '#typography', label: 'Type' },
  { href: '#spacing', label: 'Spacing' },
  { href: '#radius-shadows', label: 'Elevation' },
  { href: '#glass', label: 'Glass' },
  { href: '#components', label: 'Components' },
  { href: '#layout', label: 'Layout' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="glass-subtle mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:mt-4 md:rounded-2xl md:px-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-brand text-brand-foreground">
            <Sparkles className="size-4" />
          </span>
          <span className="font-mono text-sm font-medium tracking-tight text-foreground">VSE / DS</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="font-mono text-xs text-muted-foreground">v1.0</span>
      </nav>
    </header>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-4 md:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
      </div>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1">
        <span className="size-1.5 rounded-full bg-brand" />
        <span className="font-mono text-xs text-muted-foreground">Design System · Foundations</span>
      </div>
      <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
        The design language for Viola Septianti Elsiana
      </h1>
      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        A production-ready system for a Full Stack Developer &amp; Software Quality Engineer — precise, restrained, and
        premium. Inspired by the craft of Vercel, Linear, Stripe, and Apple.
      </p>
      <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
        {['OKLCH color', 'Geist type', '8pt grid', 'Glassmorphism', 'Dark-first'].map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-surface px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}
