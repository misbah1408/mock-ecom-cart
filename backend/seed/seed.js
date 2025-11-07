require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../db/db');
const Product = require('../models/Product');

const products = [
  { name: 'Vibe T-Shirt', price: 399, description: '100% cotton tee' },
  { name: 'Vibe Hoodie', price: 999, description: 'Comfy hoodie' },
  { name: 'Vibe Mug', price: 199, description: 'Ceramic mug' },
  { name: 'Vibe Tote Bag', price: 299, description: 'Durable canvas' },
  { name: 'Vibe Cap', price: 249, description: 'Adjustable snapback' },
  { name: 'Vibe Stickers Pack', price: 99, description: 'Set of stickers' }
];

async function seed() {
  try {
    await connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/mock-ecom');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Seeded products');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
