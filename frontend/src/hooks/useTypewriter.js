import { useState, useEffect, useCallback } from 'react'

export function useTypewriter(texts, {
  typeSpeed = 50,
  deleteSpeed = 30,
  delayBetween = 2000,
  loop = true,
} = {}) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    if (isWaiting) return

    const currentText = texts[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1))
          setCharIndex(prev => prev + 1)
        } else {
          setIsWaiting(true)
          setTimeout(() => {
            setIsWaiting(false)
            setIsDeleting(true)
          }, delayBetween)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1))
          setCharIndex(prev => prev - 1)
        } else {
          setIsDeleting(false)
          if (loop || textIndex < texts.length - 1) {
            setTextIndex(prev => (prev + 1) % texts.length)
          }
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, isWaiting, textIndex, texts, typeSpeed, deleteSpeed, delayBetween, loop])

  return displayText
}