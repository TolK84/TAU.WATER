import './ui.css'

type Props = {
  text?: string
  className?: string
}

export default function SectionLabel({ text = 'Подпись секции', className }: Props) {
  return (
    <div className={className ? `section-label ${className}` : 'section-label'}>
      <span className="section-label__text">{text}</span>
    </div>
  )
}
