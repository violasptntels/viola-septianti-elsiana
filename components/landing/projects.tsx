'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container, SectionHeader, SectionShell } from './section'
import { FadeUp } from '@/components/animations/motion-primitives'
import { ease } from '@/lib/constants'

const projects = [
  {
    name: 'Paraphrase Agent',
    year: '2026',
    desc: 'A modular AI-powered paraphrasing platform using Next.js 15, TypeScript, and Gemini API with layered architecture (Validator, PromptBuilder, QualityChecker).',
    stack: ['Next.js 15', 'TypeScript', 'Gemini API', 'Node.js'],
    url: 'https://paraphrase-agent-one.vercel.app/',
  },
  {
    name: 'QRify App',
    year: '2025',
    desc: 'A fast, lightweight, privacy-first QR Code Generator with real-time customization, multi-format downloads, and local storage history tracking.',
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'react-qr-code'],
    url: 'https://qrify-one.vercel.app/',
  },
  {
    name: 'LogiTract',
    year: '2025',
    desc: 'A cross-platform logistics management app for shipment order handling, real-time package tracking, and delivery operations built with Flutter and Dart.',
    stack: ['Flutter', 'Dart', 'C++', 'Swift'],
    url: 'https://github.com/violasptntels/LogiTrack',
  },
  {
    name: 'Typiora',
    year: '2025',
    desc: 'A modern typing practice web app with live WPM, CPM, accuracy tracking, progress visualization, and local storage persistence for best scores.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    url: 'https://typiora.vercel.app/',
  },
]

export function Projects() {
  const prefersReduced = useReducedMotion()

  return (
    <SectionShell id="projects" className="border-t border-border">
      <Container>
        <FadeUp>
          <SectionHeader
            index="04"
            eyebrow="Featured Projects"
            title="Projects I've built."
            description="A selection of academic and personal projects showcasing full-stack development, AI integration, and quality-focused engineering."
          />
        </FadeUp>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {projects.map((p, index) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
              initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
              whileHover={prefersReduced ? undefined : { y: -4 }}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {p.name}
                </h3>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                <span className="rounded-md bg-brand-muted/50 px-2 py-0.5 font-mono text-[0.7rem] text-brand">
                  {p.year}
                </span>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </SectionShell>
  )
}
