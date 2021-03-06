import React from 'react'
import cl from 'color'

export default (props) => {

  const {
    style,
    color,
  } = props

  const pupillColor = cl(color).darken(0.4)
  const eyeColor = cl(color).lighten(0.9)

  return (
    <svg viewBox='0 0 100.28 42.36' {...style}>
      <path
        id='eye-l'
        d='M27.28,16.6c0-9.17-6-16.6-13.58-16.6S0,7.42,0,16.6c0,1.6,0,7.58,0,9.17,0,9.16,6,16.59,13.63,16.59s13.62-7.42,13.62-16.59V16.6Z'
        style={{
          fill: eyeColor,
        }}
      />
      <path
        id='pupille-l'
        d='M22.28,25.2c0-3.91-3.87-7.11-7.79-7.11A7.42,7.42,0,0,0,7,25.2c0,0.69-.17,3.25-0.17,3.94,0,3.93,3.78,7.11,7.71,7.11s7.72-3.18,7.72-7.11V25.2Z'
        style={{
          fill: pupillColor,
        }}
      />
      <path
        id='eye-r'
        d='M100.28,16.6C100.28,7.42,93.76,0,86.14,0s-14,7.42-14,16.6c0,1.6-.11,7.58-0.11,9.17,0,9.16,6.49,16.59,14.11,16.59s14.11-7.42,14.11-16.59V16.6Z'
        style={{
          fill: eyeColor,
        }}
      />
      <path
        id='puille-r'
        d='M94.28,25.2c0-3.91-3.87-7.11-7.79-7.11A7.42,7.42,0,0,0,79,25.2c0,0.69-.17,3.25-0.17,3.94,0,3.93,3.78,7.11,7.71,7.11s7.72-3.18,7.72-7.11V25.2Z'
        style={{
          fill: pupillColor,
        }}
      />
    </svg>
  )
}
