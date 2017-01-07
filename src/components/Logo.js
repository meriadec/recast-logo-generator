import React, { Component } from 'react'

import LogoBody from 'components/logo/body'
import LogoEyes from 'components/logo/eyes'

class Logo extends Component {

  render () {

    const {
      color,
    } = this.props

    return (
      <div className='Logo'>
        <div className='Logo-body'>
          <LogoBody
            headColor={color}
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
