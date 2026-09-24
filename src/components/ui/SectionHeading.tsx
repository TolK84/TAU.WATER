import './ui.css'

type Props = {
  text?: string
  accent?: string
  className?: string
}

export default function SectionHeading({ text = 'Заголовок секции', accent = '', className }: Props) {
  return (
    <h2 className={className ? `section-heading ${className}` : 'section-heading'}>
      {text}
      {accent && <span className="section-heading__accent">{accent}</span>}
    </h2>
  )
}
