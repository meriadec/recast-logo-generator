import webshot from 'webshot'

export default function shot (req, res) {

  const {
    color,
    fat,
    fatEyes,
  } = req.query

  const url = `http://localhost:3035/render?color=${color}&fat=${fat}&fatEyes=${fatEyes}`

  const options = {
    errorIfJSException: true,
  }

  const renderStream = webshot(url, options)

  res.setHeader('content-type', 'image/png')

  renderStream.on('data', data => {
    res.end(data)
  })

}
