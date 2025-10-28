import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ variant = 'primary', children, ...rest }: ButtonProps) {
  const base = 'px-4 py-2 rounded text-sm'
  const cls = variant === 'primary' ? `${base} bg-primary text-white` : `${base} border`
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
