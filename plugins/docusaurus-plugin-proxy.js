

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-proxy',
    configureWebpack(config, isServer, utils) {
      return {
        devServer: {
          proxy: {
            '/api': {
              target: 'http://localhost:3000',
              changeOrigin: true,
            },
          },
        },
      };
    },
  };
};