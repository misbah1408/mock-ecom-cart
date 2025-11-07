const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  userId: { type: String, default: 'guest' }, // simple mock user
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  qty: { type: Number, default: 1 }
}, { timestamps: true });

module.exports = mongoose.model('CartItem', cartItemSchema);
