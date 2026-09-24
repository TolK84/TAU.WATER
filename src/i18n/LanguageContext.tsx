import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

// Механика языка по образцу tau.vodka (design/BRIEF.md:88):
// ?lang= -> localStorage['lang'] -> 'ru'; язык браузера не читается.
export type Lang = 'ru' | 'kz' | 'en'

const LANGS: readonly Lang[] = ['ru', 'kz', 'en']
const STORAGE_KEY = 'lang'

const isLang = (v: string | null): v is Lang => v !== null && (LANGS as readonly string[]).includes(v)

function readStored(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function detectLang(): Lang {
  const fromUrl = new URLSearchParams(location.search).get('lang')
  if (isLang(fromUrl)) return fromUrl
  const stored = readStored()
  if (isLang(stored)) return stored
  return 'ru'
}

type LanguageContextValue = { lang: Lang; setLang: (lang: Lang) => void }

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'kz' ? 'kk' : lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // localStorage недоступен: язык живёт в state и ?lang= до конца сессии.
    }
    const url = new URL(location.href)
    url.searchParams.set('lang', next)
    history.replaceState(history.state, '', url)
  }, [])

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage() вызван вне <LanguageProvider>: оберните дерево компонентов в LanguageProvider')
  return ctx
}
