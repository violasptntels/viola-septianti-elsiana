'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Container, SectionHeader, SectionShell } from './section'
import { FadeUp, Reveal } from '@/components/animations/motion-primitives'
import { ease } from '@/lib/constants'

const timeline = [
  {
    period: 'July 2026 — Present',
    role: 'Backend Developer (Paraphrase Agent)',
    org: '3B Agent — Academic Project',
    desc: 'Developed a modular AI-powered paraphrasing agent using Next.js 15, TypeScript, and Gemini API. Built REST API endpoints, layered architecture (Validator, PromptBuilder, QualityChecker), and comprehensive system documentation.',
    tags: ['Next.js 15', 'TypeScript', 'Gemini API', 'Node.js'],
  },
  {
    period: 'Apr 2026 — Jul 2026',
    role: 'Software Quality Assurance',
    org: 'PT. Tarung Bersama Teknologi',
    desc: 'Executed functional, regression, and UAT testing across web applications. Designed test cases and bug reports, identified and reported defects, and prepared comprehensive User Guide documentation.',
    tags: ['Functional Testing', 'Regression Testing', 'UAT', 'Bug Reporting'],
  },
  {
    period: 'May 2024 — Jun 2026',
    role: 'Public Relations Staff',
    org: 'Informatics Engineering Student Association',
    desc: 'Planned PR initiatives, coordinated communication between committees and external partners, managed official announcements and promotional materials across digital channels.',
    tags: ['Communication', 'Event Planning', 'Digital Media'],
  },
  {
    period: 'Jan 2026 — Mar 2026',
    role: 'Software Quality Assurance',
    org: 'Netflix Central — Academic Project',
    desc: 'Executed functional, regression, and UAT testing. Designed test cases, scenarios, and bug reports. Identified and reported software defects while collaborating with developers.',
    tags: ['Functional Testing', 'Regression Testing', 'UAT', 'Test Case Design'],
  },
  {
    period: 'Aug 2025 — Dec 2025',
    role: 'Project Manager',
    org: 'Digital Photobooth App — Academic Project',
    desc: 'Led project planning and execution for a web application, coordinated team members, managed workflow via Trello, and facilitated cross-team communication.',
    tags: ['Project Management', 'Trello', 'Agile', 'Team Coordination'],
  },
  {
    period: 'Sep 2024 — Jan 2025',
    role: 'Front End Developer',
    org: 'QR Code Generator App — Academic Project',
    desc: 'Built a client-side QR Code Generator using React 19, Vite, and Tailwind CSS v4. Created responsive multi-page app with real-time QR customization and local storage persistence.',
    tags: ['React 19', 'Vite', 'Tailwind CSS', 'JavaScript'],
  },
]

export function Experience() {
  const prefersReduced = useReducedMotion()

  return (
    <SectionShell id="experience" className="border-t border-border">
      <Container>
        <FadeUp>
          <SectionHeader
            index="05"
            eyebrow="Experience"
            title="Experience that shapes quality."
            description="From academic projects to industry experience, each role strengthened my expertise in development, testing, and collaboration."
          />
        </FadeUp>

        <ol className="relative mt-4">
          <motion.div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[calc(9rem+7px)]"
            aria-hidden
          >
            <motion.div
              className="w-full bg-gradient-to-b from-brand via-brand/50 to-transparent"
              style={{ originY: 0 }}
              initial={prefersReduced ? undefined : { scaleY: 0 }}
              whileInView={prefersReduced ? undefined : { scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease }}
            />
          </motion.div>

          {timeline.map((item, index) => (
            <motion.li
              key={`${item.role}-${item.org}`}
              className="relative grid gap-4 pb-10 pl-8 last:pb-0 md:grid-cols-[9rem_1fr] md:gap-8 md:pl-0"
              initial={prefersReduced ? undefined : { opacity: 0, x: -20 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15, ease }}
            >
              <motion.span
                className="absolute left-0 top-1.5 flex size-4 items-center justify-center rounded-full border-2 border-brand bg-background md:left-[9rem]"
                aria-hidden
                initial={prefersReduced ? undefined : { scale: 0 }}
                whileInView={prefersReduced ? undefined : { scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="size-1.5 rounded-full bg-brand" />
              </motion.span>

              <p className="font-mono text-xs text-muted-foreground md:pt-1 md:text-right">
                {item.period}
              </p>

              <div className="rounded-2xl border border-border bg-card p-5 md:ml-8">
                <h3 className="text-base font-semibold text-foreground">{item.role}</h3>
                <p className="mt-0.5 text-sm font-medium text-brand">{item.org}</p>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </SectionShell>
  )
}
