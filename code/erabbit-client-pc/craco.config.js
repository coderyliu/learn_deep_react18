const path = require('path')
const CracoLessPlugin = require('craco-less')

const pathName = (pathName) => path.join(__dirname, pathName)

module.exports = {
  // less相关
  plugins: [{
    plugin: CracoLessPlugin,
    // 主题色相关
    // options: {
    //   lessLoaderOptions: {
    //     lessOptions: {
    //       modifyVars: { '@primary-color': '#1DA57A' },
    //       javascriptEnabled: true,
    //     },
    //   },
    // },
  }],
  // webpack相关
  webpack: {
    alias: {
      '@': pathName('src'),
      'utils': pathName('src/utils'),
      'components': pathName('src/components'),
      'views': pathName('src/views'),
    },
    configure: (webpackConfig, {
      env,
      paths
    }) => {
      webpackConfig.devtool = false

      return webpackConfig
    }
  }
}