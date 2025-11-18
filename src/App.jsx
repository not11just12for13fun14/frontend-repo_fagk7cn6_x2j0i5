import React, { useMemo, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import { createT } from './components/Translations'

function App() {
  const [lang, setLang] = useState('de')
  const t = useMemo(() => createT(lang), [lang])
  const ticketRef = useRef(null)

  const scrollToTickets = () => {
    const el = document.getElementById('tickets')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="top" className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main className="pt-24">
        <Hero t={t} onCTAClick={scrollToTickets} />
        <Sections t={t} />
      </main>
      {/* playful floating blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl animate-pulse [animation-delay:200ms]" />
      </div>
    </div>
  )
}

export default App
