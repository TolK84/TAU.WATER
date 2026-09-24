const strata = [
  { d: 'M0 0H600V92C480 104 360 80 240 90C150 98 70 86 0 96Z', fill: 'var(--color-section)', opacity: 1 },
  { d: 'M0 96C70 86 150 98 240 90C360 80 480 104 600 92V196C470 210 350 182 230 194C140 203 60 188 0 200Z', fill: 'var(--color-section)', opacity: 0.7 },
  { d: 'M0 200C60 188 140 203 230 194C350 182 470 210 600 196V300C480 316 360 286 250 298C150 309 70 292 0 306Z', fill: 'var(--color-card)', opacity: 0.45 },
  { d: 'M0 306C70 292 150 309 250 298C360 286 480 316 600 300V410C470 424 350 396 240 408C140 419 60 402 0 414Z', fill: 'var(--color-card)', opacity: 0.7 },
  { d: 'M0 414C60 402 140 419 240 408C350 396 470 424 600 410V580H0Z', fill: 'var(--color-card)', opacity: 1 },
]

const stream =
  'M-20 520C90 470 170 430 250 360C330 290 400 220 470 150C520 100 570 60 620 30V78C570 106 530 140 490 184C420 258 356 330 280 400C200 472 110 520 -20 572Z'

export default function WaterSource() {
  return (
    <svg
      viewBox="0 0 600 580"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Артезианский источник TAU WATERS"
      style={{ display: 'block', width: '100%', height: '100%' }}
    >
      <rect width="600" height="580" style={{ fill: 'var(--color-bg)' }} />
      {strata.map((s) => (
        <path key={s.d} d={s.d} style={{ fill: s.fill, fillOpacity: s.opacity }} />
      ))}
      <path d={stream} style={{ fill: 'var(--color-ice)', fillOpacity: 0.45 }} />
    </svg>
  )
}
