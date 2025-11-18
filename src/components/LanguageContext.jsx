import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('de')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved) setLang(saved)
  }, [])

  const value = useMemo(() => ({
    lang,
    setLang: (l) => { setLang(l); localStorage.setItem('lang', l) },
    t: (de, en) => (lang === 'de' ? de : en)
  }), [lang])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
