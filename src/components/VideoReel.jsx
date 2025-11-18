import { useEffect, useState } from 'react'
import { useLang } from './LanguageContext'

export default function VideoReel() {
  const { t } = useLang()
  const [info, setInfo] = useState(null)

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/info`)
        const data = await res.json()
        setInfo(data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchInfo()
  }, [])

  const reel = info?.video_reel_url || 'https://www.youtube.com/embed/ysz5S6PUM-U'

  return (
    <section id="reel" className="bg-black py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">{t('Monatlicher Video-Reel','Monthly Video Reel')}</h2>
        <div className="aspect-video w-full rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
          <iframe
            className="w-full h-full"
            src={reel}
            title="Video reel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
