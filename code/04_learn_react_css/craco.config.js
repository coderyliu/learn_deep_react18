// ?在react中如果要使用less,那么我们需要借助@craco/craco@alpha，这个库来支持react18中编写less
// ?并且需要在根目录建一个craco.config.js文件，整个webpack也要通过craco 启动

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};