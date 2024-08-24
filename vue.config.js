const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/<Project__CV_Vue-3>/' : '/'
}


//module.exports = defineConfig({
//  transpileDependencies: true
//})