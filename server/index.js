const express = require('express');
const next = require('next');
const path = require('path');
const api = require('./api');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handleNextPages = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const expressServer = express();

  /* Static assets are kept at /public folder */

  expressServer.use(express.static(path.resolve(__dirname, '..', 'public')));

  /* APIs go there */
  expressServer.use('/api', api);

  /*Clean URL for rendering Product Information*/
  expressServer.get('/product/:id', (req, res) => {
    const actualPage = '/product';
    nextApp.render(req, res, actualPage, req.params);
  });

  /* All website routes are automatically handled by next */
  expressServer.get('*', handleNextPages);

  /* Listen to the server now */
  expressServer.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`); // eslint-disable-line no-console
  });
});
