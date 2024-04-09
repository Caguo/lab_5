const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      template: './src/pages/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'About Page',
      template: './src/pages/about.html',
      filename: 'about.html',
      chunks: ['about'],
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true, // Додаємо опцію open, щоб автоматично відкривати браузер
  },
};

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Інші налаштування Webpack...

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'images' } // Копіювати всі файли з src/assets/images до dist/images
      ]
    })
  ]
};


const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Другие настройки конфигурации...

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
