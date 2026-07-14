import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-6 md:px-8', className)}>{children}</div>
  )
}

export function SectionShell({
  id,
  children,
  className,
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('scroll-mt-20 py-6 md:py-8 lg:py-10', className)}>
      {children}
    </section>
  )
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  index?: string
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2',
        align === 'center' ? 'mx-auto max-w-2xl items-center text-center' : 'max-w-2xl',
        className,
      )}
    >
      <div
          className={cn(
          'flex items-center gap-2',
          align === 'center' ? 'justify-center' : 'justify-start',
        )}
      >
        {index ? (
          <span className="font-mono text-xs text-muted-foreground/70">{index}</span>
        ) : null}
        <span className="h-px w-8 bg-gradient-to-r from-brand to-transparent" aria-hidden />
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand">{eyebrow}</p>
      </div>
      <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
