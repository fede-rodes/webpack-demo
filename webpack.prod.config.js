// Notice that throughout the configuration we use Node's built-in path module
// and prefix it with the __dirname global. This prevents file path issues
// between operating systems and allows relative paths to work as expected. See
// this section for more info on POSIX vs. Windows paths.
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';
const DEVELOPMENT = process.env.NODE_ENV === 'development';

// Default sintax for CommonJS module exports which can be understand by webpack? what about ES6?
// See: https://webpack.js.org/configuration/
const config = {
  devtool: false,
  entry: './src/index.js',  // string | object | array
  // Here the application starts executing and webpack starts bundling

  plugins: [
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(DEVELOPMENT),
      PRODUCTION: JSON.stringify(PRODUCTION),
    }),
    new ExtractTextPlugin('styles-[contenthash:10].css'),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index-template.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader?localIdentName=[hash:base64:10]'
          }),
        exclude: '/node_modules/',
      },
    ]
  },

  output: {

    path: path.resolve(__dirname, 'dist'), // string
    // the target directory for all output files must be an absolute path
    // (use the Node.js path module)

    publicPath: '/', // public url of the output file when referenced in a browser
    filename: 'bundle.[hash:12].min.js',
  },
};

module.exports = config;
