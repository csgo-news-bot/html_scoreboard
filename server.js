const connect = require('connect');
const serveStatic = require('serve-static');


function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0');
  }
}

connect()
  .use(serveStatic(`${__dirname}/build`), {
    maxAge: '1d',
    setHeaders: setCustomCacheControl,
  })
  .listen(4000, () => console.log('Server running on 4000...'));

