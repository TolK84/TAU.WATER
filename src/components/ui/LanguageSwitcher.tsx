import { useLanguage, type Lang } from '../../i18n/LanguageContext'
import './LanguageSwitcher.css'

const OPTIONS: { code: Lang; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'kz', label: 'KZ' },
  { code: 'en', label: 'EN' },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="lang-switcher">
      {OPTIONS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={code === lang ? 'lang-switcher__btn lang-switcher__btn--active' : 'lang-switcher__btn'}
          aria-pressed={code === lang}
          onClick={() => setLang(code)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
