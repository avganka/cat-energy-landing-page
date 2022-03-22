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
        test: /\.(s*)css$/i,
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
        test: /\.(html)$/i,
        use: {
          loader: 'html-loader-srcset',
          options: {
             attrs: [':src', ':srcset'],
          }            
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name]-[hash][ext]',
        },
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        type: 'asset/resource',
        generator: {
          filename: './img/[name]-[hash][ext]',          
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: './img/icons/[name]-[hash][ext]',          
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/form.html'),
      filename: 'form.html',
    }),
    new CleanWebpackPlugin()
  ],
};