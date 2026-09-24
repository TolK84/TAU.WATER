import './Marquee.css'

const items = [
  'Артезианская скважина',
  'Обратный осмос',
  'Без ГМО',
  'Лаборатория контроля',
  'Будь уверен!',
  'Казахстан',
]

// Массив дублируется, чтобы translateX(-50%) замыкал ленту без разрыва.
const track = [...items, ...items].flatMap((item) => [item, '·'])

export default function Marquee() {
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
