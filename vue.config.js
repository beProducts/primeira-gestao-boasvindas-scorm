module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',

  devServer: {
    port: 8080,
    hot: true
  },

  css: {
    loaderOptions: {
      sass: {
        data: `
          $PRIMARY: ${process.env.VUE_APP_TPL_PRIMARY_COLOR};
        `
      }
    }
  }

  // chainWebpack: config => {
  //   config.module.rule('images').use('url-loader')
  //     .loader('file-loader')
  //     .tap(options => Object.assign(options, {
  //       name: '[name].[hash:8].[ext]'
  //     }))

  //   config.module.rule('svg').use('file-loader')
  //     .tap(options => Object.assign(options, {
  //       name: '[name].[hash:8].[ext]'
  //     }))

  //   config.module.rule("file").test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
  //     .use("url-loader")
  //     .loader("url-loader")
  //     .options({
  //       limit: 10000,
  //       name: '[name].[hash:8].[ext]'
  //     })
  //     .end();

  //   if (config.plugins.has("extract-css")) {
  //     const extractCSSPlugin = config.plugin("extract-css");
  //     extractCSSPlugin &&
  //       extractCSSPlugin.tap(() => [
  //         {
  //           filename: "[name].[hash:8].css",
  //           chunkFilename: "[name].[hash:8].css"
  //         }
  //       ]);
  //   }
  // },
  // configureWebpack: {
  //   output: {
  //     filename: '[name].[hash:8].js',
  //     chunkFilename: '[name].[hash:8].js',
  //   }
  // }
}