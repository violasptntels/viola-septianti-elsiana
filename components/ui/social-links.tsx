import { GithubMark, LinkedinMark } from '@/components/landing/brand-icons'
import { cn } from '@/lib/utils'

const links = [
  { href: 'https://github.com/violasptntels', label: 'GitHub', icon: GithubMark },
  { href: 'https://linkedin.com/in/violasptntels', label: 'LinkedIn', icon: LinkedinMark },
]

const sizeMap = {
  sm: 'size-9',
  md: 'size-10',
  lg: 'size-11',
} as const

export function SocialLinks({
  className,
  size = 'md',
  variant = 'ghost',
}: {
  className?: string
  size?: keyof typeof sizeMap
  variant?: 'ghost' | 'bordered'
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={cn(
            'inline-flex items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-accent hover:text-foreground',
            sizeMap[size],
            variant === 'bordered' && 'border border-border',
          )}
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  )
}
