const webpack = require('webpack');
const dotenv = require('dotenv');

// 加载 .env 文件中的环境变量
dotenv.config();

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-env',
    configureWebpack(config, isServer, utils) {
      return {
        plugins: [
          new webpack.DefinePlugin({
            'process.env.REACT_APP_SERVER': JSON.stringify(process.env.REACT_APP_SERVER),
            'process.env.REACT_APP_VERSION': JSON.stringify(process.env.REACT_APP_VERSION),
          }),
        ],
      };
    },
  };
};