# Portfolio Motion Architecture - Performance Notes

## Overview
This document outlines the motion architecture and performance optimizations implemented in the Yash Kumar Sharma portfolio.

## 🎬 Cinematic Intro Sequence

### Implementation
- **Total Duration**: 5 seconds
- **Phases**:
  1. Phase 1 (0-1s): Background blobs with radial gradients
  2. Phase 2 (1-2s): Name fades in with scale animation (1.1 → 1) and blur (20px → 0)
  3. Phase 3 (3.5-4s): Dynamic light sweep across name
  4. Phase 4 (4-5s): Fade out to main content

### Performance
- Mobile devices skip intro entirely (< 768px)
- Uses `transform` and `opacity` only for GPU acceleration
- No layout thrashing during transitions

## 🌌 Parallax Background Layers

### Layer Structure
1. **Deep Base**: Static gradient background
2. **Light Orbs**: 3 animated gradient orbs with 20-30s loops
3. **Parallax Grid**: Subtle perspective grid that moves at 30-50% scroll speed
4. **Micro Particles**: Canvas-based particle system (20 particles)

### Performance Optimizations
- Uses `requestAnimationFrame` for particle animation
- Particles use canvas instead of DOM elements
- Orbs use CSS transforms only (GPU accelerated)
- Mobile: Simplified single gradient background

## ✨ Dynamic Light Sweep

### Hero Section
- Triggers on hover over name container
- Gradient mask animation from -100% to 200%
- Duration: 1.2s with easeInOut
- Uses `mask-image` for gradient clipping

### Performance
- Only animates on hover (not continuous)
- Uses `transform` property for GPU acceleration

## 🧊 Project Card 3D Tilt

### Implementation
- Uses Framer Motion `useMotionValue` and `useTransform`
- Perspective: 1200px
- Rotation range: ±10° on X and Y axes
- Scale on hover: 1.04

### Performance
- Mouse position tracked via `onMouseMove`
- Transform values computed declaratively
- No layout recalculation during animation

## 📦 Section Reveal Animation

### Wrapper Component
```
jsx
<SectionReveal>
  {/* Section content */}
</SectionReveal>
```

### Animation Specs
- Initial: `{ opacity: 0, y: 100, scale: 0.95 }`
- WhileInView: `{ opacity: 1, y: 0, scale: 1 }`
- Duration: 1s
- Ease: `cubic-bezier(0.16, 1, 0.3, 1)`
- Stagger children: 0.1s delay between items

### Performance
- Uses `viewport={{ once: true }}` to prevent re-animation
- `will-change` applied implicitly via Framer Motion

## 🔊 Sound Architecture (Optional)

### Implementation
- No autoplay (browser policy compliant)
- Programmatic sound generation via Web Audio API
- Toggle button in bottom-right corner
- Soft cinematic whoosh on first interaction

### Usage
```
jsx
import { soundManager } from './utils/soundManager'

// Initialize on first user interaction
soundManager.init()

// Play whoosh (when sound is enabled)
soundManager.playWhoosh()
```

## 🎨 Color Palette

### Backgrounds
- Primary: `#0f2027` (deep teal)
- Secondary: `#203a43` (dark blue-green)
- Tertiary: `#2c5364` (steel blue)

### Accents
- Pink: `#ff6ec7`
- Blue: `#3a8dff`
- Cyan: `#00f2fe`

### Text
- Primary: `#ffffff`
- Secondary: `rgba(255,255,255,0.7)`
- Muted: `rgba(255,255,255,0.5)`

## ⚡ Performance Guidelines

### Do
- ✅ Use `transform` and `opacity` for animations
- ✅ Use `will-change` sparingly on complex elements
- ✅ Implement `viewport={{ once: true }}` for scroll animations
- ✅ Disable heavy effects on mobile (< 768px)
- ✅ Use `requestAnimationFrame` for canvas animations

### Don't
- ❌ Animate `width`, `height`, `margin`, `padding`
- ❌ Animate `top`, `left`, `right`, `bottom` (use transform)
- ❌ Use excessive particle counts
- ❌ Run animations on low-power mode preference

## 📱 Responsive Behavior

### Mobile (< 768px)
- Intro: Skipped entirely
- Background: Single gradient (no particles/orbs)
- Animations: Reduced motion, simpler reveals
- 3D tilt: Disabled

### Tablet (768px - 1024px)
- Full background with reduced particle count (15)
- All animations enabled

### Desktop (> 1024px)
- Full experience with all visual effects
- Maximum particle count (20)
- All hover effects enabled

## 🛠 Dependencies

```
json
{
  "framer-motion": "^11.x",
  "react": "^18.x",
  "tailwindcss": "^3.x"
}
```

## 🔄 Future Optimizations

1. Consider `IntersectionObserver` for lazy section loading
2. Add `prefers-reduced-motion` media query support
3. Implement code splitting for animation libraries
4. Add performance monitoring with React Profiler
