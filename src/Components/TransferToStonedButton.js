import React from 'react';
import Button from 'react-bootstrap/Button';

function TransferToStonedButton({ item, handleTransferToStoned }) {
  return (
    <Button variant="primary" size="sm" onClick={() => handleTransferToStoned(item)}>
      Transfer to Stoned
    </Button>
  );
}

export default TransferToStonedButton;
