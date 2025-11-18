import React from 'react'
import { Globe2, Ticket, MapPin, Users, Info, Calendar } from 'lucide-react'

export default function Navbar({ t, lang, setLang }) {
  const nav = [
    { href: '#where', label: t('nav.where'), Icon: MapPin },
    { href: '#who', label: t('nav.who'), Icon: Users },
    { href: '#what', label: t('nav.what'), Icon: Info },
    { href: '#playing', label: t('nav.playing'), Icon: Calendar },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
          <a href="#top" className="text-white font-black tracking-wide text-lg">Kabarett Wien</a>
          <nav className="hidden md:flex items-center gap-2">
            {nav.map(({ href, label, Icon }) => (
              <a key={href} href={href} className="text-white/90 hover:text-white inline-flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/10 transition">
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </a>
            ))}
            <a href="#tickets" className="text-white inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/90 hover:bg-amber-500 transition shadow-[0_10px_30px_rgba(245,158,11,0.5)]">
              <Ticket className="w-4 h-4" />
              <span>{t('nav.tickets')}</span>
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-white hover:bg-white/20"
              aria-label={t('nav.switch')}
            >
              <Globe2 className="w-4 h-4" />
              <span className="uppercase">{lang}</span>
            </button>
            <a href="#tickets" className="md:hidden text-white inline-flex items-center gap-2 px-3 py-2 rounded-full bg-amber-500/90 hover:bg-amber-500 transition">
              <Ticket className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
