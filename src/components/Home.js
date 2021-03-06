import React, { Component } from 'react'
import Slider from 'react-slider'
import cl from 'color'
import { HuePicker } from 'react-color'
import { Saturation } from 'react-color/lib/components/common'

import Logo from 'components/Logo'

class Home extends Component {

  state = {
    color: '#ffca2b',
    inputValue: '#ffca2b',
    fat: 1,
    fatEyes: 1,
  }

  handleChangeInput (e) {
    let { value } = e.target

    if (value && value[0] !== '#') {
      value = `#${value}`
    }

    try {
      const c = cl(e.target.value)
      this.setState({
        inputValue: value,
        color: c.hex(),
      })
    } catch (err) {
      this.setState({
        inputValue: value,
      })
    }
  }

  handleChangeHue (color) {
    if (!color) { return }

    const {
      hex,
    } = color

    this.setState({
      color: hex,
      inputValue: hex,
    })

  }

  handleChangeHSV (color) {
    const c = cl(this.state.color).hsv(color.h, color.s, color.v)
    const hex = c.hex()
    this.setState({
      color: hex,
      inputValue: hex,
    })
  }

  handleChangeSize (v) {
    this.setState({ fat: v })
  }

  handleChangeSizeOfEyes (v) {
    this.setState({ fatEyes: v })
  }

  render () {

    const {
      color,
      inputValue,
      fat,
      fatEyes,
    } = this.state

    const c = cl(color)
    const hsv = c.hsv().color
    const hsl = c.hsl().color

    const saturationColor = {
      hsv: {
        h: hsv[0] / 100,
        s: hsv[1] / 100,
        v: hsv[2] / 100,
      },
      hsl: {
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
      },
    }

    const isLight = c.light()

    return (
      <div
        className='Home'
        style={{
          backgroundColor: isLight ? '#424242' : '#bbb',
        }}
      >

        <Logo
          color={color}
          fat={fat}
          fatEyes={fatEyes}
        />

        <div className='controls'>
          <div
            style={{
              position: 'relative',
              height: 200,
            }}
          >
            <Saturation
              {...saturationColor}
              onChange={::this.handleChangeHSV}
            />
          </div>
          <HuePicker
            color={color}
            onChange={::this.handleChangeHue}
          />
          <input
            type='text'
            value={inputValue}
            style={{
              borderColor: color,
            }}
            onChange={::this.handleChangeInput}
          />

          <Slider
            className='horizontal-slider'
            min={0.5}
            max={1.5}
            defaultValue={1}
            withBars
            onChange={::this.handleChangeSize}
            step={0.01}
          />

          <Slider
            className='horizontal-slider'
            min={0.5}
            max={1.5}
            defaultValue={1}
            withBars
            onChange={::this.handleChangeSizeOfEyes}
            step={0.01}
          />

        </div>

        <a
          style={{ marginTop: 20 }}
          target='_blank'
          rel='noopener noreferrer'
          href={`/shot?color=${color.substr(1)}&fat=${fat}&fatEyes=${fatEyes}`}
        >
          {'Download'}
        </a>

      </div>
    )
  }

}

export default Home
