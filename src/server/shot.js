import webshot from 'webshot'

import config from 'config'

export default function shot (req, res) {

  const {
    color,
    fat,
    fatEyes,
  } = req.query

  const url = `${config.renderUrl}?color=${color}&fat=${fat}&fatEyes=${fatEyes}`

  const options = {
    customCSS: `
    body {
      margin: 0;
      padding: 0;
    }
    img {
      display: block;
      margin: 0;
      padding: 0;
    }
    `,
  }

  const renderStream = webshot(url, options)

  res.setHeader('content-type', 'image/png')

  renderStream.on('data', data => {
    res.end(data)
  })

}
