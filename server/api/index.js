const { Router } = require('express');

const items = [
  { id: 1, name: ['Item1', '/images/placeholder.png', 100, undefined] },
  { id: 2, name: ['Item2', '/images/placeholder.png', 200, 150] },
  { id: 3, name: ['Item3', '/images/placeholder.png', 300, 250] },
  { id: 4, name: ['Item4', '/images/placeholder.png', 400, 350] },
  { id: 5, name: ['Item5', '/images/placeholder.png', 500, 450] },
  { id: 6, name: ['Item6', '/images/placeholder.png', 600, undefined] },
];

const api = Router();

/* Our demo API */

api
  .get('/items', (req, res) => res.json({ data: items }))
  .get('/api/items/:id', (req, res) =>
    res.json({ data: items[req.params.id + 1] || null })
  );

module.exports = api;
