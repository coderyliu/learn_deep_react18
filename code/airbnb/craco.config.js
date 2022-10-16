const path=require('path')
const CracoLessPlugin = require('craco-less')

const pathName=pathName=>path.join(__dirname,pathName)

module.exports={
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      // 配置less
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // webpack
  webpack:{
    alias:{
      '@':pathName('src'),
      'components':pathName('src/components'),
      'utils':pathName('src/utils')
    } 
  }
}