  import React from 'react';
  import Button from 'react-bootstrap/Button';

  function TransferToInventoryButton({ item, onTransferToInventory }) {
    const handleTransferToInventory = () => {
      onTransferToInventory(item);
    };

    return (
      <Button variant="danger" size="sm" onClick={handleTransferToInventory}>Return to inventory</Button>
    );
  }

  export default TransferToInventoryButton;
  