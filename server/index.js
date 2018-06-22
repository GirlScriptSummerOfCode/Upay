const express = require('express');
const next = require('next');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handleNextPages = nextApp.getRequestHandler();

const items = [
  { id: 1, name: 'item 1' },
  { id: 2, name: 'item 2' },
  { id: 3, name: 'item 3' },
  { id: 4, name: 'item 4' },
  { id: 5, name: 'item 5' },
  { id: 6, name: 'item 6' },
];

nextApp.prepare().then(() => {
  const expressServer = express();

  /**
   * Our example API.
   */
  expressServer.get('/api/items', (req, res) => res.json({ data: items }));
  expressServer.get('/api/items/:id', (req, res) =>
    res.json({ data: items[req.params.id] })
  );

  expressServer.get('*', handleNextPages);

  expressServer.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`); // eslint-disable-line no-console
  });
});
