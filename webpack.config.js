// Notice that throughout the configuration we use Node's built-in path module
// and prefix it with the __dirname global. This prevents file path issues
// between operating systems and allows relative paths to work as expected. See
// this section for more info on POSIX vs. Windows paths.
const path = require('path');
const webpack = require('webpack');

const PRODUCTION = process.env.NODE_ENV === 'production';
const DEVELOPMENT = process.env.NODE_ENV === 'development';

const entry = PRODUCTION
  ? ['./src/index.js']
  : [
      './src/index.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
    ];

const plugins = PRODUCTION
  ? [
      new webpack.optimize.UglifyJsPlugin(),
    ]
  : [
      new webpack.HotModuleReplacementPlugin(),
    ];

// Pushing vars to global scope
plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION),
  })
)

// Default sintax for CommonJS module exports which can be understand by webpack? what about ES6?
// See: https://webpack.js.org/configuration/
const config = {
  devtool: 'source-map',
  entry,  // string | object | array
  // Here the application starts executing and webpack starts bundling

  plugins,

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
        loaders: ['style-loader', 'css-loader?localIdentName=[path][name]--[local]'],
        exclude: '/node_modules/',
      },
    ]
  },

  output: {

    path: path.resolve(__dirname, 'dist'), // string
    // the target directory for all output files must be an absolute path
    // (use the Node.js path module)

    publicPath: '/dist/', // public url of the output file when referenced in a browser
    filename: 'bundle.js',
  },
};

module.exports = config;
