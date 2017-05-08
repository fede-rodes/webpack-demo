'use strict';

// See: https://webpack.js.org/configuration/dev-server/
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const path = require('path');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  hot: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  historyApiFallback: { disableDotRule: true },
  stats: {
    colors: true,
  }
});

server.listen(8080, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('dev server started at http://localhost:8080');
});
