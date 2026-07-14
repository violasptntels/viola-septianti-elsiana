import { ArrowRight, Check, Mail, Search, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section, SubLabel } from './primitives'

function ButtonsBlock() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <SubLabel>Buttons</SubLabel>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Button className="bg-brand text-brand-foreground [a]:hover:bg-brand/90 hover:bg-brand/90">
            <Zap /> Primary Brand
          </Button>
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className="hairline h-px" />
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button className="bg-brand text-brand-foreground hover:bg-brand/90">
            Get in touch <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

function InputsBlock() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <SubLabel>Inputs</SubLabel>
      <div className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="ds-email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="ds-email"
            type="email"
            placeholder="you@example.com"
            className="h-10 w-full rounded-lg border border-input bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors outline-none focus-visible:border-brand focus-visible:ring-3 focus-visible:ring-[var(--brand-muted)]"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="ds-search" className="text-sm font-medium text-foreground">
            Search
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="ds-search"
              type="text"
              placeholder="Search projects…"
              className="h-10 w-full rounded-lg border border-input bg-surface pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors outline-none focus-visible:border-brand focus-visible:ring-3 focus-visible:ring-[var(--brand-muted)]"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="ds-msg" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="ds-msg"
            rows={3}
            placeholder="Tell me about your project…"
            className="w-full resize-none rounded-lg border border-input bg-surface p-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors outline-none focus-visible:border-brand focus-visible:ring-3 focus-visible:ring-[var(--brand-muted)]"
          />
        </div>
      </div>
    </div>
  )
}

function CardsBlock() {
  return (
    <div className="space-y-4">
      <SubLabel>Card Styles</SubLabel>
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Standard card */}
        <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-brand/40 hover:-translate-y-0.5 elevation-sm hover:elevation-lg">
          <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-brand-muted">
            <Mail className="size-5 text-brand" />
          </div>
          <h4 className="text-base font-medium text-foreground">Standard Card</h4>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Bordered surface with ambient shadow and a lift-on-hover interaction.
          </p>
        </div>

        {/* Glass card */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-brand/30 blur-2xl" aria-hidden />
          <div className="glass relative rounded-2xl p-6">
            <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-[var(--glass-highlight)]">
              <Check className="size-5 text-brand" />
            </div>
            <h4 className="text-base font-medium text-foreground">Glass Card</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Frosted layer for floating panels sitting above vivid content.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ComponentsShowcase() {
  return (
    <Section
      id="components"
      eyebrow="06 · Components"
      title="Buttons, Inputs & Cards"
      description="Core interactive primitives. Buttons favor a calm neutral default with the brand reserved for the single most important action per view. Inputs use a recessed surface with a brand focus ring. Cards read as quiet, bordered surfaces that lift on interaction."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <ButtonsBlock />
        <InputsBlock />
      </div>
      <div className="mt-6">
        <CardsBlock />
      </div>
    </Section>
  )
}
