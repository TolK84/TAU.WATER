import SectionHeading from './SectionHeading'
import SectionLabel from './SectionLabel'

export default function SectionHeadingPreview() {
  return (
    <div className="p-16">
      <SectionLabel text="Линейка лимонадов" className="fade-up fade-up-1 mb-5" />
      <SectionHeading text="Вкусы, которые" accent="узнаёшь сразу" className="fade-up fade-up-2" />
    </div>
  )
}
