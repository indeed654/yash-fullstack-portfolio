import { useCallback, useRef } from 'react'

export function useSound(src, { volume = 0.3 } = {}) {
  const audioRef = useRef(null)

  const play = useCallback(() => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(src)
        audioRef.current.volume = volume
      }
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {})
    } catch (e) {
      // Audio not supported
    }
  }, [src, volume])

  return play
}

