import React, { useState } from 'react';

export default function Cart({ items = [], total = 0, onRemove, onUpdate, onCheckoutClick }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Your Cart</h2>
      <div className="space-y-3 scrollable">
        {items.length === 0 && <div className="text-sm text-gray-500">Cart is empty</div>}
        {items.map(it => (
          <div key={it._id} className="flex items-center justify-between border-b pb-2">
            <div>
              <div className="font-medium">{it.product.name}</div>
              <div className="text-sm text-gray-600">₹{it.product.price} × {it.qty}</div>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" className="w-16 p-1 border rounded" value={it.qty} onChange={(e)=>onUpdate(it._id, Number(e.target.value))}/>
              <button className="text-red-600" onClick={()=>onRemove(it._id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="flex justify-between font-semibold">
          <div>Total</div>
          <div>₹{total}</div>
        </div>

        <div className="mt-3">
          <input className="w-full p-2 mb-2 border rounded" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
          <input className="w-full p-2 mb-2 border rounded" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <button onClick={() => onCheckoutClick({ name, email })} className="w-full bg-green-600 text-white py-2 rounded">Checkout</button>
        </div>
      </div>
    </div>
  );
}
