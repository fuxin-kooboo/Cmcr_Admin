const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,//开启eslint-loader进行检查
  // webpack.config
  configureWebpack: config => {
    config.resolve.alias['assets'] = resolve('src/assets')
    config.resolve.alias['components'] = resolve('src/components')
    config.resolve.alias['sass'] = resolve('src/sass')
    config.resolve.alias['views'] = resolve('src/views')
    config.resolve.alias['siteConfig'] = resolve(`app-config/app.${process.env.VUE_APP_CONFIG || 'dev'}.config`)

    config.plugins.push(new StyleLintPlugin({
      files: [
        'src/**/*.vue',
        'src/sass/**/*.scss'
      ]
    })
    )
  },
  // css
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import 'sass/global.scss';`
  //     }
  //   }
  // },

  devServer: {
    headers: {
      'X-Frame-Options': 'SAMEORIGIN',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
    }
  }
}
