var connect = require('connect');
var serveStatic = require('serve-static');

connect()
    .use(serveStatic(__dirname + '/build'), {
        maxAge: '1d',
        setHeaders: setCustomCacheControl,
    })
    .listen(3000, () => console.log('Server running on 3000...'));

function setCustomCacheControl (res, path) {
    if (serveStatic.mime.lookup(path) === 'text/html') {
        // Custom Cache-Control for HTML files
        res.setHeader('Cache-Control', 'public, max-age=0')
    }
}
