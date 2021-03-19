const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')



module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
},
module.exports = {
  // ...

  output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
  },
},
module.exports = {
  // ...

  plugins: [
      new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: path.resolve(__dirname, './src/template.html'), // шаблон
          filename: 'index.html', // название выходного файла
      }),
  ],
},
// module.exports = {
//   // ...

//   plugins: [
//       // ...
//       new CleanWebpackPlugin(),
//   ],
// },
module.exports = {
  // ...

  module: {
      rules: [
          // JavaScript
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader'],
          },
      ],
  }
},
module.exports = {
  // ...

  module: {
      rules: [
          // изображения
          {
              test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
              type: 'asset/resource',
          },
      ],
  },
},
module.exports = {
  // ...

  module: {
      rules: [
          // шрифты и SVG
          {
              test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
              type: 'asset/inline',
          },
      ],
  },
},
module.exports = {
  plugins: {
      'postcss-preset-env': {
          browsers: 'last 2 versions',
      },
  },
},
module.exports = {
  // ...

  module: {
      rules: [
          // CSS, PostCSS, Sass
          {
              test: /\.(scss|css)$/,
              use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
          },
      ],
  },
}


