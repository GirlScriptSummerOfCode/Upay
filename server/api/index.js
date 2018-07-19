const { Router } = require('express');

const items = [
  {
    id: 1,
    name: 'Item 1',
    imageUrls: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/upay.png',
      '/images/placeholder.png',
    ],
    originalPrice: 100,
    discountedPrice: undefined,
  },
  {
    id: 2,
    name: 'Item 2',
    imageUrls: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/upay.png',
      '/images/placeholder.png',
    ],
    originalPrice: 200,
    discountedPrice: 150,
  },
  {
    id: 3,
    name: 'Item 3',
    imageUrls: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/upay.png',
      '/images/placeholder.png',
    ],
    originalPrice: 300,
    discountedPrice: 250,
  },
  {
    id: 4,
    name: 'Item 4',
    imageUrls: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/upay.png',
      '/images/placeholder.png',
    ],
    originalPrice: 400,
    discountedPrice: undefined,
  },
  {
    id: 5,
    name: 'Item 5',
    imageUrls: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/upay.png',
      '/images/placeholder.png',
    ],
    originalPrice: 500,
    discountedPrice: 450,
  },
  {
    id: 6,
    name: 'Item 6',
    imageUrls: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/upay.png',
      '/images/placeholder.png',
    ],
    originalPrice: 600,
    discountedPrice: 550,
  },
];

const api = Router();

/* Our demo API */

api
  .get('/items/:id', (req, res) =>
    res.json({ data: items[req.params.id - 1] || null })
  )
  .get('/items', (req, res) => res.json({ data: items }));

module.exports = api;
