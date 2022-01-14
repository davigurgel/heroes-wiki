import React, { forwardRef, InputHTMLAttributes } from 'react'

import './styles.sass'

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>> = (
  { ...rest },
  ref,
) => (
  <div className="input-wrapper">
    <input
      ref={ref}
      className="input"
      {...rest}
    />
  </div>
)

export default forwardRef(Input)
