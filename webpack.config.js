const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    bundle: './index.ts'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: './[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "../pug/index.pug"
    })
  ]
};
