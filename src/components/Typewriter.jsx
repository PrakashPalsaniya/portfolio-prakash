import { useEffect, useState } from 'react'

export default function Typewriter({ words, typeSpeed = 70, deleteSpeed = 38, pause = 1400 }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setI((v) => (v + 1) % words.length)
      return
    }
    const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
    const t = setTimeout(() => setText(next), deleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(t)
  }, [text, deleting, i, words, typeSpeed, deleteSpeed, pause])

  return (
    <span className="tw">
      {text}
      <span className="tw-caret" aria-hidden />
    </span>
  )
}
