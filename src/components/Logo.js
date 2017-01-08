import React, { Component } from 'react'
import cl from 'color'

import LogoBody from 'components/logo/body'
import LogoEyes from 'components/logo/eyes'

class Logo extends Component {

  render () {

    const {
      color,
      fat,
    } = this.props

    const c = cl(color)

    const lighten = c.light()
      ? c.darken(0.3)
      : c.lighten(0.2)

    return (
      <div className='Logo'>
        <div
          className='Logo-body'
          style={{
            transform: `scaleX(${fat})`,
          }}
        >
          <LogoBody
            headColor={color}
            reflectColor={lighten}
            style={{
              width: 300,
            }}
          />
        </div>
        <div className='Logo-eyes'>
          <LogoEyes
            color={color}
            style={{
              width: 100,
            }}
          />
        </div>
      </div>
    )
  }

}

export default Logo
