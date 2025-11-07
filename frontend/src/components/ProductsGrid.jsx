import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsGrid({ products, onAdd, loading }){
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(p => (
          <ProductCard key={p._id} product={p} onAdd={() => onAdd(p._id)} loading={loading}/>
        ))}
      </div>
    </div>
  );
}
