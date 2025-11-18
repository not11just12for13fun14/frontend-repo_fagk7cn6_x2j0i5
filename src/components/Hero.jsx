import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ t, onCTAClick }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-10">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-lg md:text-xl text-white/85"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <button
            onClick={onCTAClick}
            className="rounded-full bg-pink-500/90 hover:bg-pink-500 text-white px-6 py-3 text-base md:text-lg shadow-[0_10px_30px_rgba(236,72,153,0.6)] transition"
          >
            {t('hero.cta')}
          </button>
          <a
            href="#video"
            className="rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 backdrop-blur border border-white/20"
          >
            {t('hero.reel')}
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
    </section>
  )
}
