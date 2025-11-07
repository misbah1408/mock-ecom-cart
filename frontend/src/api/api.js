import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: { 'x-user-id': 'demo-user' } // mock user
});

export async function getProducts() {
  const res = await API.get('/products');
  return res.data;
}

export async function getCart() {
  const res = await API.get('/cart');
  return res.data;
}

export async function addToCart(productId, qty = 1) {
  const res = await API.post('/cart', { productId, qty });
  return res.data;
}

export async function removeCartItem(id) {
  const res = await API.delete(`/cart/${id}`);
  return res.data;
}

export async function updateCartItem(id, qty) {
  const res = await API.patch(`/cart/${id}`, { qty });
  return res.data;
}

export async function checkout(payload) {
  const res = await API.post('/checkout', payload);
  return res.data;
}
