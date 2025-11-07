import React, { useEffect, useState } from 'react';
import { getProducts, getCart, addToCart, removeCartItem, updateCartItem, checkout } from './api/api';
import ProductsGrid from './components/ProductsGrid';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';

export default function App(){
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(false);
  const [receipt, setReceipt] = useState(null);

  async function loadProducts(){
    const p = await getProducts();
    setProducts(p);
  }
  async function loadCart(){
    const c = await getCart();
    setCart(c);
  }

  useEffect(()=>{ loadProducts(); loadCart(); }, []);

  async function handleAdd(productId){
    setLoading(true);
    try {
      await addToCart(productId, 1);
      await loadCart();
    } catch (e) { console.error(e); alert('Error adding'); }
    setLoading(false);
  }

  async function handleRemove(id){
    await removeCartItem(id);
    await loadCart();
  }

  async function handleUpdate(id, qty){
    if (qty < 1) return;
    await updateCartItem(id, qty);
    await loadCart();
  }

  async function handleCheckout(customer){
    const r = await checkout(customer);
    setReceipt(r);
    await loadCart();
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vibe Commerce — Mock Cart</h1>
        <div>Cart total: ₹{cart.total}</div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <ProductsGrid products={products} onAdd={handleAdd} loading={loading}/>
        </section>

        <aside className="md:col-span-1">
          <Cart items={cart.items} total={cart.total} onRemove={handleRemove} onUpdate={handleUpdate} onCheckoutClick={handleCheckout}/>
        </aside>
      </main>

      {receipt && <CheckoutModal receipt={receipt} onClose={()=>setReceipt(null)} />}
    </div>
  );
}
