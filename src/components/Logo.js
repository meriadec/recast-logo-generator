import React, { Component } from 'react'
import cl from 'color'

import LogoBody from 'components/logo/body'
import LogoEyes from 'components/logo/eyes'

class Logo extends Component {

  render () {

    const {
      color,
      fat,
      fatEyes,
      render,
    } = this.props

    const c = cl(color)

    const lighten = c.light()
      ? c.darken(0.3)
      : c.lighten(0.2)

    return (
      <div className={`Logo ${render ? 'render' : ''}`}>
        <div
          className='Logo-body'
          style={{
            transform: `scaleX(${fat})`,
            WebkitTransform: `scaleX(${fat})`,
          }}
        >
          <LogoBody
            headColor={color}
            reflectColor={lighten}
            style={{
              width: render ? 300 : 300,
              height: render ? 300 : 300,
            }}
          />
        </div>
        <div
          className='Logo-eyes'
          style={{
            transform: `scale(${fatEyes})`,
            WebkitTransform: `scale(${fatEyes})`,
          }}
        >
          <LogoEyes
            color={color}
            style={{
              width: render ? 100 : 100,
              height: render ? 42 : 42,
            }}
          />
        </div>
      </div>
    )
  }

}

export default Logo
