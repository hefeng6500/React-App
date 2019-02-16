const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[hash].bundle.js",
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 3000,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: ['babel-loader'],
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React App',
      filename: 'index.html',
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      inject: true,
      minify: { //压缩HTML文件
        removeComments: true,//移除HTML中的注释
        collapseWhitespace: true //删除空白符与换行符
      }
    })
  ]
}