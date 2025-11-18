import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Sections({ t }) {
  const [info, setInfo] = useState(null)
  const [owners, setOwners] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch(`${API}/api/info`).then(r => r.json()).then(setInfo).catch(() => {})
    fetch(`${API}/api/owners`).then(r => r.json()).then(setOwners).catch(() => {})
    fetch(`${API}/api/events`).then(r => r.json()).then(setEvents).catch(() => {})
  }, [])

  return (
    <div className="relative z-10">
      {/* Video Reel */}
      <section id="video" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">{t('video.title')}</h2>
        <p className="text-white/80 mb-6">{t('video.subtitle')}</p>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur">
          {info?.video_reel_url ? (
            <iframe src={info.video_reel_url} title="Monthly Reel" className="h-full w-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
          ) : (
            <div className="h-full w-full grid place-items-center text-white/70">{t('video.placeholder')}</div>
          )}
        </div>
      </section>

      {/* Tickets CTA */}
      <section id="tickets" className="mx-auto max-w-6xl px-6 pb-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-pink-600/40 to-amber-500/40 p-6 md:p-8 text-white shadow-[0_20px_60px_rgba(236,72,153,0.35)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">{t('tickets.title')}</h3>
              <p className="text-white/90">{t('tickets.subtitle')}</p>
            </div>
            <a href="#playing" className="rounded-full bg-white text-black px-6 py-3 font-semibold hover:opacity-90 text-center">{t('tickets.cta')}</a>
          </div>
        </div>
      </section>

      {/* Where */}
      <section id="where" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{t('where.title')}</h2>
        <p className="text-white/80 mb-6">{info ? info.how_to_get_de || info.how_to_get_en : t('where.loading')}</p>
        {info && (
          <div className="rounded-xl border border-white/10 bg-black/30 p-6 text-white">
            <p className="font-semibold">{info.name}</p>
            <p>{info.address}, {info.city}, {info.country}</p>
          </div>
        )}
      </section>

      {/* Who */}
      <section id="who" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">{t('who.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {owners.map((o, idx) => (
            <motion.div key={idx} whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
              <div className="flex items-center gap-4 mb-4">
                <img src={o.avatar} alt={o.name} className="h-14 w-14 rounded-full object-cover border border-white/20" />
                <div>
                  <p className="font-bold">{o.name}</p>
                  <p className="text-white/80 text-sm">{o.role}</p>
                </div>
              </div>
              <p className="text-white/90">{o.bio_de || o.bio_en}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What */}
      <section id="what" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{t('what.title')}</h2>
        <p className="text-white/90">{info ? info.description_de || info.description_en : t('what.loading')}</p>
      </section>

      {/* What's playing */}
      <section id="playing" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">{t('playing.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, idx) => (
            <motion.a
              key={idx}
              href={e.ticket_url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              {e.cover_image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={e.cover_image} alt={e.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
              )}
              <div className="p-5 text-white">
                <p className="text-sm text-white/70">{new Date(e.date).toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' })} • {e.category}</p>
                <h3 className="mt-1 text-xl font-bold">{e.title}</h3>
                {e.description && <p className="text-white/80 mt-1">{e.description}</p>}
                <div className="mt-3 inline-block rounded-full bg-amber-500/90 px-3 py-1 text-sm font-semibold text-black">{t('playing.buy')}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-16 text-white/70">
        <p>© {new Date().getFullYear()} Kabarett & Impro Wien</p>
      </footer>
    </div>
  )
}
