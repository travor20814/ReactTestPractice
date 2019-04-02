// @flow
/* eslint quotes: 0 */
const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

const developmentPlugins = [
  new webpack.HotModuleReplacementPlugin(),
];

const productionPlugins = [];

const developmentEntries = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8794',
  'webpack/hot/only-dev-server',
];

module.exports = {
  devtool: NODE_ENV !== 'production' ? 'source-map' : false,
  entry: [
    ...(NODE_ENV !== 'production' ? developmentEntries : []),
    path.resolve(__dirname, 'entry.jsx'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: `'${process.env.API_HOST || ''}'`,
    }),
    ...(NODE_ENV !== 'production' ? developmentPlugins : productionPlugins),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    hot: true,
    contentBase: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'static'),
    ],
    publicPath: '/',
    compress: true,
    port: 8794,
    filename: 'bundle.js',
    historyApiFallback: true,
    host: '0.0.0.0',
    proxy: {
      '/locales': {
        target: 'http://localhost:8794',
        bypass: req => req.path.replace(/^\/locales\//, ''),
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        include: [
          __dirname,
        ],
      }, {
        test: /\.(jpe?g|png|gif|svg|mp3)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            hash: 'sha512',
            digest: 'hex',
            name: '[hash].[ext]',
          },
        }],
        include: /static/,
      },
    ],
  },
};
