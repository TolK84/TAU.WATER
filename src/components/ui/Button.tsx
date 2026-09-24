import type { ButtonHTMLAttributes } from 'react'
import './ui.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ variant = 'primary', type = 'button', className, children, ...rest }: Props) {
  const cls = variant === 'primary' ? 'btn-primary' : 'btn-ghost'
  return (
    <button type={type} className={className ? `${cls} ${className}` : cls} {...rest}>
      {children}
    </button>
  )
}
