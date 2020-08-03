const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: path.resolve(__dirname, './loaders/colorLoader.js'),
            options: {
              origin: '#00f',
              target: '#f40'
            }
          },
          'less-loader'
        ]
      },
      // {
      //   test: /\.(png|jpg|jpeg|svg)$/,
      //   use: 'file-loader'
      // },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240
          }
        }]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  // 性能提示 https://www.webpackjs.com/configuration/performance/
  performance: {
    hints: false
  }
}