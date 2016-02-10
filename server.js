/* eslint no-console: 0 */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';

const isDeveloping = process.env.NODE_ENV !== 'production';
const APP_PORT = isDeveloping ? 3000 : process.env.PORT || 3000;

let app = express();

if (isDeveloping) {

  const compiler = webpack(config);

  app = new WebpackDevServer(compiler, {
    hot: true,
    historyApiFallback: true,
    contentBase: 'src',
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
   });

   app.use(webpackHotMiddleware(compiler));

} else {
  app.use(express.static('./dist'));
  app.get('*', function response(req, res, next) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
}

app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});
