'use client'

import { AnimatedGrid, GradientBlobs, Particles, CursorGlow } from '@/components/animations/background-effects'

export function PageBackground() {
  return (
    <>
      <AnimatedGrid />
      <GradientBlobs />
      <Particles />
      <CursorGlow />
    </>
  )
}
