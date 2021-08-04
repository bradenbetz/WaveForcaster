const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const apicache = require('apicache');
const expressHttpProxy = require('express-http-proxy');
const corsAnywhere = require('cors-anywhere');
const CORS_PROXY_PORT = 5000;

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const testAPIRouter = require("./routes/testAPI");

corsAnywhere.createServer({})
    .listen(CORS_PROXY_PORT,
        () => console.log(`Internal CORS Anywhere server started at port ${CORS_PROXY_PORT}`));

let server = express();

// Proxy to CORS server
server.use(expressHttpProxy(`localhost:${CORS_PROXY_PORT}`));
const APP_PORT = process.env.PORT || 8080;
server.listen(APP_PORT, () => {
  console.log(`External CORS cache server started at port ${APP_PORT}`);
});

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', indexRouter);
server.use('/users', usersRouter);
server.use("/testAPI", testAPIRouter);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

/**
 * Construct the caching middleware
 */
function cacheMiddleware() {
  const cacheOptions = {
    statusCodes: { include: [200] },
    defaultDuration: 60000,
    appendKey: (req, res) => req.method
  };
  let cacheMiddleware = apicache.options(cacheOptions).middleware();
  return cacheMiddleware;
}

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
server.get('/*', cacheMiddleware());
server.options('/*', cacheMiddleware());

module.exports = server;
