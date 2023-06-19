import React, { useState } from 'react';

function TransferToSalesButton({ item, onTransferToSales }) {
  const [saleAmount, setSaleAmount] = useState(0);

  const handleTransferToSales = () => {
    onTransferToSales(item, saleAmount);
    setSaleAmount(0);
  };

  return (
    <div>
      <input
        type="number"
        value={saleAmount}
        onChange={(e) => setSaleAmount(parseInt(e.target.value))}
      />
      <button onClick={handleTransferToSales}>Продажа</button>
    </div>
  );
}

export default TransferToSalesButton;
