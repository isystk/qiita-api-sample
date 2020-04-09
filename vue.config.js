module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vuejs-qiita-api/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}