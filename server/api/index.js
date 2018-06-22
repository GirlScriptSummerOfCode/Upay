const { Router } = require('express');

const items = [
  { id: 1, name: 'item 1' },
  { id: 2, name: 'item 2' },
  { id: 3, name: 'item 3' },
  { id: 4, name: 'item 4' },
  { id: 5, name: 'item 5' },
  { id: 6, name: 'item 6' },
];

const api = Router();

/* Our demo API */

api
  .get('/items', (req, res) => res.json({ data: items }))
  .get('/api/items/:id', (req, res) =>
    res.json({ data: items[req.params.id + 1] || null })
  );

module.exports = api;
