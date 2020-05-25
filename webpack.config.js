const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
require('dotenv').config();

const parts = require('./webpack.parts');

const productionConfig = merge([]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST, // get host and port from cli command or .env file (using dotenv package)
    port: process.env.PORT,
  }),
]);

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebPackPlugin({
        title: 'Webpack Demo',
      }),
    ],
  },
]);

module.exports = (mode) => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
