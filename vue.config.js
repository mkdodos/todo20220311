module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/todo20220311/'
  : '/'
  ,
  transpileDependencies: [
    'vuetify'
  ]
}
