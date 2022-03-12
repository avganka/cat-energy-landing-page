const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = { 
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle-[hash].js',
    publicPath: '',
  },
  module: {
    rules: [      
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: 'html-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset',
        generator: {
          filename: './fonts/[name]-[hash][ext]',
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset',
        generator: {
          filename: './img/[name]-[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',      
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/catalog.html'),
      filename: 'catalog.html',
    }),
    new CleanWebpackPlugin()
  ],
};