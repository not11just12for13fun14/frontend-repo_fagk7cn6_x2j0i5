const de = {
  nav: {
    where: 'Wo',
    who: 'Wer',
    what: 'Was',
    playing: 'Programm',
    tickets: 'Tickets',
    switch: 'Sprache wechseln'
  },
  hero: {
    title: 'Kabarett, Stand-up & Impro in Wien',
    subtitle: 'Ein verspieltes Zuhause für Humor, Charaktere und spontane Bühnenmagie.',
    cta: 'Tickets kaufen',
    reel: 'Monats-Showreel ansehen'
  },
  video: {
    title: 'Monatliches Showreel',
    subtitle: 'Highlights unserer Künstler:innen – jeden Monat neu.',
    placeholder: 'Video lädt…'
  },
  tickets: {
    title: 'Lust auf Lachen?',
    subtitle: 'Sichere dir jetzt Plätze für die kommenden Shows.',
    cta: 'Zum Programm'
  },
  where: {
    title: 'Wo findest du uns?',
    loading: 'Lade Wegbeschreibung…'
  },
  who: {
    title: 'Wer steckt dahinter?'
  },
  what: {
    title: 'Was ist das hier?',
    loading: 'Lade Informationen…'
  },
  playing: {
    title: 'Was läuft demnächst?',
    buy: 'Tickets'
  }
}

const en = {
  nav: {
    where: 'Where',
    who: 'Who',
    what: 'What',
    playing: "What's playing",
    tickets: 'Tickets',
    switch: 'Switch language'
  },
  hero: {
    title: 'Cabaret, Stand-up & Improv in Vienna',
    subtitle: 'A playful home for humor, characters and spontaneous stage magic.',
    cta: 'Buy tickets',
    reel: 'Watch monthly reel'
  },
  video: {
    title: 'Monthly Video Reel',
    subtitle: 'Highlights from our artists — refreshed every month.',
    placeholder: 'Loading video…'
  },
  tickets: {
    title: 'Ready to laugh?',
    subtitle: 'Grab your seats for the upcoming shows.',
    cta: 'See schedule'
  },
  where: {
    title: 'Where to find us',
    loading: 'Loading directions…'
  },
  who: {
    title: 'Who runs the show?'
  },
  what: {
    title: 'What is this place?',
    loading: 'Loading info…'
  },
  playing: {
    title: "What's playing next?",
    buy: 'Tickets'
  }
}

export const createT = (lang) => (key) => {
  const dict = lang === 'de' ? de : en
  return key.split('.').reduce((acc, k) => acc?.[k], dict) || key
}
