const path=require('path')
const CracoLessPlugin = require('craco-less')

const pathName=pathName=>path.join(__dirname,pathName)

module.exports={
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
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