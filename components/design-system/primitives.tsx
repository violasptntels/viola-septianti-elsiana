import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-16 first:border-t-0 md:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  )
}

export function SubLabel({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 text-sm font-medium tracking-tight text-foreground">{children}</h3>
  )
}

export function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('rounded-2xl border border-border bg-card p-6', className)}>{children}</div>
  )
}

export function Mono({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <code
      className={cn(
        'rounded-md border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.8em] text-muted-foreground',
        className,
      )}
    >
      {children}
    </code>
  )
}
