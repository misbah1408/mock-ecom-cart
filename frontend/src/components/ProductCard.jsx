import React from 'react';

export default function ProductCard({ product, onAdd, loading }){
  return (
    <div className="bg-white p-3 rounded shadow-sm flex flex-col">
      <div className="h-36 bg-gray-100 rounded flex items-center justify-center mb-3">
        <span className="text-sm text-gray-500">Image</span>
      </div>
      <h3 className="font-medium">{product.name}</h3>
      <p className="text-sm text-gray-600 flex-1">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-semibold">₹{product.price}</div>
        <button disabled={loading} onClick={onAdd} className="bg-blue-600 text-white px-3 py-1 rounded">
          Add
        </button>
      </div>
    </div>
  );
}
