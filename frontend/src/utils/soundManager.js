// Sound Manager - Architecture only, NO autoplay
// Implements premium cinematic whoosh with proper browser policy compliance

class SoundManager {
  constructor() {
    this.audioContext = null
    this.whooshBuffer = null
    this.isEnabled = false
    this.hasInteracted = false
    this.isLoaded = false
  }

  // Initialize audio context on first user interaction
  async init() {
    if (this.hasInteracted) return
    
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
      this.hasInteracted = true
      
      // Preload the sound (will generate programmatically since we don't have an mp3)
      await this.preloadSound()
    } catch (error) {
      console.warn('Audio initialization failed:', error)
    }
  }

  // Programmatic sound generation - soft cinematic whoosh
  async preloadSound() {
    if (!this.audioContext || this.isLoaded) return

    try {
      const sampleRate = this.audioContext.sampleRate
      const duration = 0.8 // Short whoosh
      const numSamples = sampleRate * duration
      
      const buffer = this.audioContext.createBuffer(2, numSamples, sampleRate)
      
      for (let channel = 0; channel < 2; channel++) {
        const data = buffer.getChannelData(channel)
        
        for (let i = 0; i < numSamples; i++) {
          const t = i / sampleRate
          // Soft noise with envelope
          const noise = (Math.random() * 2 - 1) * 0.3
          // Envelope: fade in/out
          const envelope = Math.sin(Math.PI * t / duration)
          // Low-pass filter effect via smoothing
          const smoothed = noise * envelope * envelope
          data[i] = smoothed * 0.15 // Very low volume
        }
      }
      
      this.whooshBuffer = buffer
      this.isLoaded = true
    } catch (error) {
      console.warn('Sound preload failed:', error)
    }
  }

  // Play whoosh sound (call after first user interaction)
  playWhoosh() {
    if (!this.audioContext || !this.whooshBuffer || !this.isEnabled) return

    try {
      // Resume context if suspended
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume()
      }

      const source = this.audioContext.createBufferSource()
      source.buffer = this.whooshBuffer
      
      // Gain node for volume control
      const gainNode = this.audioContext.createGain()
      gainNode.gain.value = 0.3 // 30% volume - soft
      
      source.connect(gainNode)
      gainNode.connect(this.audioContext.destination)
      
      source.start()
    } catch (error) {
      console.warn('Whoosh playback failed:', error)
    }
  }

  // Toggle sound on/off
  toggle() {
    this.isEnabled = !this.isEnabled
    return this.isEnabled
  }

  // Enable sound
  enable() {
    this.isEnabled = true
  }

  // Disable sound
  disable() {
    this.isEnabled = false
  }

  // Check if sound is enabled
  isSoundEnabled() {
    return this.isEnabled
  }
}

// Singleton instance
export const soundManager = new SoundManager()

// Hook for React components
export function useSound() {
  return {
    init: () => soundManager.init(),
    playWhoosh: () => soundManager.playWhoosh(),
    toggle: () => soundManager.toggle(),
    enable: () => soundManager.enable(),
    disable: () => soundManager.disable(),
    isEnabled: () => soundManager.isSoundEnabled(),
  }
}
