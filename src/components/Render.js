import React, { Component } from 'react'

import Logo from 'components/Logo'

class Render extends Component {

  render () {

    const params = {
      color: `#${this.props.location.query.color}`,
      fat: Number(this.props.location.query.fat),
      fatEyes: Number(this.props.location.query.fatEyes),
    }

    return (
      <div className='darender'>
        <Logo
          render
          {...params}
        />
      </div>
    )
  }

}

export default Render
