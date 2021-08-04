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
        () => console.log(`Internal CORS Anywhere app started at port ${CORS_PROXY_PORT}`));

let app = express();

// Proxy to CORS app
app.use(expressHttpProxy(`localhost:${CORS_PROXY_PORT}`));
const APP_PORT = process.env.PORT || 8080;
app.listen(APP_PORT, () => {
  console.log(`External CORS cache app started at port ${APP_PORT}`);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
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
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.get('/*', cacheMiddleware());
app.options('/*', cacheMiddleware());

module.exports = app;
