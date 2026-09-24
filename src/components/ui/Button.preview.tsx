import Button from './Button'

export default function ButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4 p-16">
      <Button variant="primary">
        Смотреть каталог
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
      <Button variant="ghost">О компании</Button>
    </div>
  )
}
