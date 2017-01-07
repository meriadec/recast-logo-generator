import React, { Component } from 'react'
import {
  HuePicker,
} from 'react-color'

import Logo from 'components/Logo'

class Home extends Component {

  state = {
    color: '#ffca2b',
  }

  handleChangeHue (color) {
    if (!color) { return }

    const {
      hex,
    } = color

    this.setState({
      color: hex,
    })

  }

  render () {

    const {
      color,
    } = this.state

    return (
      <div>

        <Logo
          color={color}
        />

        <div className='controls'>
          <HuePicker
            color={color}
            onChange={::this.handleChangeHue}
          />
          <input
            type='text'
            value={color}
            style={{
              borderColor: color,
              color,
            }}
          />
        </div>

      </div>
    )
  }

}

export default Home
