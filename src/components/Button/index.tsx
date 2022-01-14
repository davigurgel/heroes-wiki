import React from 'react'

import './styles.sass'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string,
  onClick: () => void,
  className: 'button' | 'compare' | 'view'
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  onClick,
  className,
}) => (
  <button
    type="button"
    className={className}
    disabled={disabled}
    onClick={onClick}
  >
    { label }
  </button>
)

export default Button
