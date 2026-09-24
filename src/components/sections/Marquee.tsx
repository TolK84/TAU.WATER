import { useLanguage } from '../../i18n/LanguageContext'
import { MARQUEE_I18N } from './Marquee.i18n'
import './Marquee.css'

export default function Marquee() {
  const items = MARQUEE_I18N[useLanguage().lang]
  // Массив дублируется, чтобы translateX(-50%) замыкал ленту без разрыва.
  const track = [...items, ...items].flatMap((item) => [item, '·'])

  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} className={item === '·' ? 'marquee__sep' : 'marquee__item'}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
