module.exports = {
  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          vue$: 'vue/dist/vue.esm.js',
        },
      },
    };
  },

  // configure webpack-dev-server behavior
  devServer: {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
};
