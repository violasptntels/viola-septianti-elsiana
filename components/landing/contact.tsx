'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from '@/components/ui/social-links'
import { Container, SectionHeader, SectionShell } from './section'
import { FadeUp, Stagger, StaggerItem, HoverCard } from '@/components/animations/motion-primitives'

export function Contact() {
  return (
    <SectionShell id="contact" className="border-t border-border">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeader
              index="09"
              eyebrow="Contact"
              title="Let's build something great."
              description="Have a project, collaboration, or opportunity in mind? I'd love to hear from you."
            />

            <Stagger staggerDelay={0.06}>
              <div className="flex flex-col gap-3">
                <StaggerItem>
                  <HoverCard lift={-3} scale={1.01}>
                    <a
                      href="mailto:violaseptiantiana23@gmail.com"
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand/40"
                    >
                      <div className="flex size-11 items-center justify-center rounded-xl bg-brand-muted text-brand">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="text-sm font-medium text-foreground">violaseptiantiana23@gmail.com</p>
                      </div>
                    </a>
                  </HoverCard>
                </StaggerItem>
                <StaggerItem>
                  <HoverCard lift={-3} scale={1.01}>
                    <a
                      href="tel:0895401572082"
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand/40"
                    >
                      <div className="flex size-11 items-center justify-center rounded-xl bg-brand-muted text-brand">
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <p className="text-sm font-medium text-foreground">0895401572082</p>
                      </div>
                    </a>
                  </HoverCard>
                </StaggerItem>
                <StaggerItem>
                  <HoverCard lift={-3} scale={1.01}>
                    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-brand-muted text-brand">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="text-sm font-medium text-foreground">Bandung, Indonesia</p>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              </div>
            </Stagger>

            <FadeUp delay={0.15}>
              <SocialLinks variant="bordered" size="lg" />
            </FadeUp>
          </div>

          <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-8 text-center">
            <p className="text-balance text-lg leading-relaxed text-muted-foreground">
              Feel free to reach out via email, phone, or social media.
            </p>
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
