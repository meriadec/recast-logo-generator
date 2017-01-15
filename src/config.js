import path from 'path'

const env = process.env.NODE_ENV || 'development'

export default {

  env,
  port: 3035,

  renderUrl: env === 'production'
    ? 'http://recastor.sigsev.io/render'
    : 'http://localhost:3035/render',

  assetsFolder: path.join(__dirname, './assets'),
  distFolder: path.join(__dirname, '../dist'),

}
