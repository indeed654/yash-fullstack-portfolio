import React, { useState, lazy, Suspense } from 'react'

import BootScreen from './components/boot/BootScreen'
import Navbar from './components/layout/Navbar'
import Cursor from './components/layout/Cursor'
import GridBackground from './components/layout/GridBackground'
import ParticleField from './components/layout/ParticleField'
import ScanOverlay from './components/layout/ScanOverlay'

// Lazy load sections with error boundaries
const HeroSection = lazy(() => import('./components/hero/HeroSection'))
const SkillRadar = lazy(() => import('./components/skills/SkillRadar'))
const ProjectsSection = lazy(() => import('./components/projects/ProjectsSection'))
const AchievementsSection = lazy(() => import('./components/achievements/AchievementsSection'))
const TimelineSection = lazy(() => import('./components/timeline/TimelineSection'))
const GitHubPanel = lazy(() => import('./components/github/GitHubPanel'))
const ContactSection = lazy(() => import('./components/contact/ContactSection'))
const JarvisChat = lazy(() => import('./components/jarvis/JarvisChat'))

// Optimized Loader with memo
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="relative">
      <div className="w-16 h-16 border-2 border-cyan/30 rounded-full animate-spin">
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="w-10 h-10 border-2 border-orange/30 rounded-full animate-spin-reverse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-orange rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  </div>
)

function App() {
  const [booted, setBooted] = useState(false)

  return (
    <div className="relative min-h-screen bg-primary overflow-x-hidden">
      
      {/* Background Layers - LOWEST Z-INDEX (cached) */}
      <div className="fixed inset-0 -z-50">
        <GridBackground />
        <ParticleField />
      </div>
      
      {/* Scan Overlay - MID LAYER */}
      <div className="fixed inset-0 -z-40">
        <ScanOverlay />
      </div>

      {/* Custom Cursor - HIGHEST LAYER (non-interactive) */}
      <div className="fixed inset-0 z-[9999] pointer-events-none">
        <Cursor />
      </div>

      {/* Boot Screen → Main Content Transition */}
      {!booted ? (
        <BootScreen onComplete={() => setBooted(true)} />
      ) : (
        <main className="relative z-10">
          <Navbar />

          <Suspense fallback={<SectionLoader />}>
            <HeroSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SkillRadar />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <ProjectsSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <AchievementsSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <TimelineSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <GitHubPanel />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <ContactSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <JarvisChat />
          </Suspense>
        </main>
      )}
    </div>
  )
}

export default App