const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single'
  }
  if (isProd) { // minimize html css js
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config
}


module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    app: './main.tsx'
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[fullhash].js",
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js','.ts', '.tsx', '.scss'],
    alias: {
      app: path.resolve(__dirname, 'src/app/'),
      assets: path.resolve(__dirname, 'src/assets/'),

      '@': path.resolve(__dirname, "src"),

    }
  },
  optimization: optimization(),
  devServer: {
    port: 4000,
    hot: isDev,
    historyApiFallback: true
  },
  devtool: isProd ? false : 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: "./assets/html/index.html",
      favicon: "./assets/html/favicon.ico",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css'
    })
  ],
  module: {
    rules: [

      {
        test: /\.tsx?$/,
        use: [
          !isProd && {
            loader: 'babel-loader',
          },
          'ts-loader'
        ].filter(Boolean)
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|webp)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
    ]
  }
}