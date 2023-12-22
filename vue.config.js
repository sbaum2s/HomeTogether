const webpack = require('webpack');
const packageJson = require('./package.json');

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