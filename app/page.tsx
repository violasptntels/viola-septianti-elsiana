import dynamic from 'next/dynamic'
import { Nav } from '@/components/landing/nav'
import { Hero } from '@/components/landing/hero'
import { JsonLd } from '@/components/json-ld'

const PageBackground = dynamic(() => import('@/components/page-background').then((m) => m.PageBackground))

const About = dynamic(() => import('@/components/landing/about').then((m) => m.About))
const Skills = dynamic(() => import('@/components/landing/skills').then((m) => m.Skills))
const Services = dynamic(() => import('@/components/landing/services').then((m) => m.Services))
const Projects = dynamic(() => import('@/components/landing/projects').then((m) => m.Projects))
const Experience = dynamic(() => import('@/components/landing/experience').then((m) => m.Experience))
const WorkflowSection = dynamic(() => import('@/components/landing/workflow').then((m) => m.WorkflowSection))
const Certifications = dynamic(() => import('@/components/landing/certifications').then((m) => m.Certifications))
const WhyMe = dynamic(() => import('@/components/landing/why-me').then((m) => m.WhyMe))
const Footer = dynamic(() => import('@/components/landing/footer').then((m) => m.Footer))

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <div className="min-h-screen bg-background">
        <PageBackground />
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Experience />
          <WorkflowSection />
          <Certifications />
          <WhyMe />
        </main>
        <Footer />
      </div>
    </>
  )
}
