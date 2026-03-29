import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import GlassCard from '../ui/GlassCard'

const languages = [
  { name: 'Python', percentage: 45, color: '#00F5FF' },
  { name: 'JavaScript', percentage: 20, color: '#FF6B00' },
  { name: 'Java', percentage: 15, color: '#3B82F6' },
  { name: 'Solidity', percentage: 8, color: '#8B5CF6' },
  { name: 'HTML/CSS', percentage: 7, color: '#10B981' },
  { name: 'Other', percentage: 5, color: '#6B7280' },
]

const repos = [
  { name: 'smart-home-automation', lang: 'Python', stars: 12, forks: 3, description: 'IoT + AI Powered Home System' },
  { name: 'ai-resume-analyzer', lang: 'Python', stars: 8, forks: 2, description: 'NLP-Powered Resume Intelligence' },
  { name: 'decentralized-ip', lang: 'Solidity', stars: 5, forks: 1, description: 'Blockchain IP Protection' },
  { name: 'ml-experiments', lang: 'Python', stars: 15, forks: 5, description: 'ML Research & Experiments' },
]

const stats = [
  { label: 'REPOSITORIES', value: '20+', icon: '📁' },
  { label: 'CONTRIBUTIONS', value: '500+', icon: '🔥' },
  { label: 'STARS EARNED', value: '40+', icon: '⭐' },
  { label: 'PULL REQUESTS', value: '30+', icon: '🔀' },
]

const GitHubPanel = () => {
  // Generate fake contribution data
  const contributionData = Array.from({ length: 52 * 7 }, () =>
    Math.random() > 0.3 ? Math.floor(Math.random() * 4) : 0
  )

  const getContributionColor = (level) => {
    switch (level) {
      case 0: return 'rgba(0,245,255,0.05)'
      case 1: return 'rgba(0,245,255,0.2)'
      case 2: return 'rgba(0,245,255,0.4)'
      case 3: return 'rgba(0,245,255,0.7)'
      default: return 'rgba(0,245,255,0.05)'
    }
  }

  return (
    <section id="github" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="GITHUB INTELLIGENCE"
          subtitle="// repository analysis"
        />

        {/* JARVIS Analysis Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8 justify-center"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="font-mono text-xs text-green-400 tracking-wider">
            JARVIS: ANALYZING GITHUB PROFILE...
          </span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <GlassCard key={stat.label} delay={i * 0.1} className="p-5 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-orbitron text-2xl font-bold text-cyan mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] text-white/40 tracking-wider">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contribution Graph */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6">
              <h3 className="font-orbitron text-sm text-cyan tracking-wider mb-4">
                // CONTRIBUTION MATRIX
              </h3>

              {/* Graph */}
              <div className="overflow-x-auto">
                <div className="grid grid-flow-col gap-[3px]" style={{ gridTemplateRows: 'repeat(7, 1fr)' }}>
                  {contributionData.map((level, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.001 }}
                      className="w-[10px] h-[10px] rounded-sm cursor-pointer hover:ring-1 hover:ring-cyan/50 transition-all"
                      style={{ backgroundColor: getContributionColor(level) }}
                      title={`${level} contributions`}
                    />
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-2 mt-4">
                <span className="font-mono text-[10px] text-white/30">Less</span>
                {[0, 1, 2, 3].map((level) => (
                  <div
                    key={level}
                    className="w-[10px] h-[10px] rounded-sm"
                    style={{ backgroundColor: getContributionColor(level) }}
                  />
                ))}
                <span className="font-mono text-[10px] text-white/30">More</span>
              </div>
            </GlassCard>
          </div>

          {/* Language Distribution */}
          <GlassCard className="p-6">
            <h3 className="font-orbitron text-sm text-cyan tracking-wider mb-4">
              // LANGUAGE ANALYSIS
            </h3>

            {/* Donut chart visual */}
            <div className="relative w-40 h-40 mx-auto mb-6">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                {(() => {
                  let accumulated = 0
                  return languages.map((lang) => {
                    const circumference = 2 * Math.PI * 35
                    const dashLength = (lang.percentage / 100) * circumference
                    const dashOffset = -(accumulated / 100) * circumference
                    accumulated += lang.percentage

                    return (
                      <motion.circle
                        key={lang.name}
                        cx="50"
                        cy="50"
                        r="35"
                        fill="none"
                        stroke={lang.color}
                        strokeWidth="8"
                        strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                        strokeDashoffset={dashOffset}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      />
                    )
                  })
                })()}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-[10px] text-white/40">
                  LANGUAGES
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="font-rajdhani text-xs text-white/60">
                      {lang.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs" style={{ color: lang.color }}>
                    {lang.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Top Repositories */}
        <div className="mt-8">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-orbitron text-sm text-cyan tracking-wider mb-6"
          >
            // TOP REPOSITORIES
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {repos.map((repo, i) => (
              <GlassCard
                key={repo.name}
                delay={i * 0.1}
                className="p-5 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/20">📁</span>
                      <h4 className="font-mono text-sm text-cyan group-hover:text-cyan-light transition-colors">
                        {repo.name}
                      </h4>
                    </div>
                    <p className="font-rajdhani text-xs text-white/40 mt-1">
                      {repo.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-xs text-white/40 font-mono">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor:
                          repo.lang === 'Python'
                            ? '#00F5FF'
                            : repo.lang === 'Solidity'
                            ? '#8B5CF6'
                            : '#FF6B00',
                      }}
                    />
                    {repo.lang}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/40 font-mono">
                    ⭐ {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/40 font-mono">
                    🔀 {repo.forks}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GitHubPanel

