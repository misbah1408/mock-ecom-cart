const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

// Helper: get userId from header or default
function getUserId(req) {
  return req.header('x-user-id') || 'demo-user';
}

// GET /api/cart
router.get('/', async (req, res) => {
  const userId = getUserId(req);
  try {
    const items = await CartItem.find({ userId }).populate('product');
    const total = items.reduce((s, it) => s + it.product.price * it.qty, 0);
    res.json({ items, total });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/cart { productId, qty }
router.post('/', async (req, res) => {
  const { productId, qty } = req.body;
  const userId = getUserId(req);
  if (!productId || !qty) return res.status(400).json({ message: 'productId and qty required' });
  try {
    // if same product exists for user, update quantity
    let existing = await CartItem.findOne({ userId, product: productId });
    if (existing) {
      existing.qty += qty;
      await existing.save();
      return res.status(200).json(existing);
    }
    const item = new CartItem({ userId, product: productId, qty });
    await item.save();
    const populated = await item.populate('product');
    res.status(201).json(populated);
  } catch (err) {
    console.log(err);
    
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /api/cart/:id
router.delete('/:id', async (req, res) => {
  const userId = getUserId(req);
  try {
    const item = await CartItem.findOneAndDelete({ _id: req.params.id, userId });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// PATCH /api/cart/:id -> update qty
router.patch('/:id', async (req, res) => {
  const { qty } = req.body;
  const userId = getUserId(req);
  try {
    const item = await CartItem.findOne({ _id: req.params.id, userId });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    item.qty = qty;
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
