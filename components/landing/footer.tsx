'use client'

import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { SocialLinks } from '@/components/ui/social-links'
import { Container } from './section'
import { Monogram } from './brand-icons'
import { FadeUp } from '@/components/animations/motion-primitives'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-14">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <FadeUp y={20} duration={0.5}>
              <div className="max-w-sm">
                <a href="#top" className="flex items-center gap-2.5 text-foreground">
                  <Monogram className="size-9" />
                  <span className="text-base font-semibold tracking-tight">
                    Viola Septianti Elsiana
                  </span>
                </a>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                  Full Stack Developer & Software Quality Engineer — building scalable web apps and
                  ensuring software quality through rigorous testing.
                </p>
                <div className="mt-5">
                  <SocialLinks variant="bordered" />
                </div>
              </div>
            </FadeUp>

            <FadeUp y={20} delay={0.1} duration={0.5}>
              <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-2">
                {nav.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
            </FadeUp>

            <FadeUp y={20} delay={0.2} duration={0.5}>
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Let&apos;s connect
                </p>
                <a
                  href="mailto:violaseptiantiana23@gmail.com"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4" /> violaseptiantiana23@gmail.com
                </a>
                <a
                  href="tel:0895401572082"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4" /> 0895401572082
                </a>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4" /> Bandung, Indonesia
                </span>
              </div>
            </FadeUp>
          </div>

          <div className="hairline h-px w-full" aria-hidden />

          <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Viola Septianti Elsiana. All rights reserved.</p>
            <p className="font-mono">Designed & built with care.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
