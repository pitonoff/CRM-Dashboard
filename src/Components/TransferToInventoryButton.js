import React from 'react';

function TransferToInventoryButton({ item, onTransferToInventory }) {
  const handleTransferToInventory = () => {
    onTransferToInventory(item);
  };

  return (
    <button onClick={handleTransferToInventory}>Возврат</button>
  );
}

export default TransferToInventoryButton;
