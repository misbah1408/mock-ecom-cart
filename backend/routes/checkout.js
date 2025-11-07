const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

// POST /api/checkout { cartItems, name, email }  - but we will use server cart for persistence
router.post('/', async (req, res) => {
  const userId = req.header('x-user-id') || 'guest';
  const { name, email } = req.body;
  try {
    const items = await CartItem.find({ userId }).populate('product');
    if (!items.length) return res.status(400).json({ message: 'Cart is empty' });
    const total = items.reduce((s, it) => s + it.qty * it.product.price, 0);
    // Create mock receipt
    const receipt = {
      id: `R-${Date.now()}`,
      total,
      timestamp: new Date(),
      items: items.map(i => ({ name: i.product.name, qty: i.qty, price: i.product.price })),
      customer: { name: name || 'Guest', email: email || null }
    };
    // Clear cart (mock checkout)
    await CartItem.deleteMany({ userId });
    res.json(receipt);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
