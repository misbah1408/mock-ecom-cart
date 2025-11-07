export default function CheckoutModal({ receipt, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded p-5 max-w-md w-full">
        <h3 className="text-lg font-semibold mb-2">Receipt</h3>
        <div className="text-sm text-gray-600 mb-2">Order ID: {receipt.id}</div>
        <div className="space-y-2 mb-3">
          {receipt.items.map((it, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <div>
                {it.name} x {it.qty}
              </div>
              <div>₹{it.price * it.qty}</div>
            </div>
          ))}
        </div>
        <div className="font-semibold mb-3">Total: ₹{receipt.total}</div>
        <div className="text-xs text-gray-500 mb-3">
          Time: {new Date(receipt.timestamp).toLocaleString()}
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 rounded border">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
