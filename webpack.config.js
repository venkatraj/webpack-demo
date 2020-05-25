const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Webpack Demo',
    }),
  ],
};
