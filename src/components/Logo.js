import React, { Component } from 'react'

import LogoBody from 'components/logo/body'
import LogoEyes from 'components/logo/eyes'

class Logo extends Component {

  render () {
    return (
      <div className='Logo'>
        <div className='Logo-body'>
          <LogoBody
            style={{
              width: 300,
            }}
          />
        </div>
        <div className='Logo-eyes'>
          <LogoEyes
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
