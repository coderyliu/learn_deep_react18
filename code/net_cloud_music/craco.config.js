const path = require('path')
const CracoLessPlugin = require('craco-less');

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
  }, ],
  // webpack相关
  webpack: {
    alias: {
      '@': pathName('src'),
      'components': pathName('src/components'),
      'utils': pathName('src/utils'),
      'views': pathName('src/views')
    }
  }
}