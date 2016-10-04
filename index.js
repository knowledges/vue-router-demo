var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./build/webpack.dev.conf');
var app = express();
var compiler = webpack(config);
app.use('/member4s', express.static(path.join(__dirname, './dist/')));
app.use('/assets', express.static(path.join(__dirname, './dist/assets')));

//app.use(favicon(path.join(__dirname, './favicon.ico')))
//app.use(express.static(path.join(__dirname, './dist')));
// app.get('/', function (req, res) {
//   res.sendFile('index.html', { root: path.join(__dirname, './dist') })
// })

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

var server = app.listen(3030, '0.0.0.0', function () {

  var host = server.address().address
  var port = server.address().port

  console.log('vue-ui-router listening at http://%s:%s', host, port)

});
