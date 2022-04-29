const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// GET /api/items
router.get('/', notesCtrl.index);
// GET /api/items/:id
router.get('/:id', notesCtrl.show);
// POST /api/orders/cart/items/:id
router.post('/', notesCtrl.create);

module.exports = router;