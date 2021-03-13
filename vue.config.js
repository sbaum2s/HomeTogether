var webpack = require('webpack');
var packageJson = require('./package.json');

module.exports = {
  transpileDependencies: [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          PACKAGE_JSON: '"' + escape(JSON.stringify(packageJson)) + '"'
        }
      })
    ]
  }
}