const port = 5213
module.exports = {
  css: {
    sourceMap: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        views: '@/views',
        api: '@/api'
      }
    }
  },
  devServer: {
    port
  }
}
