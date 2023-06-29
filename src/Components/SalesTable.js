import React from 'react';
import Table from 'react-bootstrap/Table';
import TransferToInventoryButton from './TransferToInventoryButton';
import TransferToStonedButton from './TransferToStonedButton';

function SalesTable({ sales, handleTransferToInventory, stoned, handleTransferToStoned }) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Amount</th>
          <th>Cost</th>
          <th>Price</th>
          <th>Margin</th>
          <th>Sale Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.itemName}</td>
            <td>{item.amount}</td>
            <td>{item.cost}</td>
            <td>{item.price}</td>
            <td>{item.price - item.cost}</td>
            <td>{item.saleDate}</td>
            <td>
              <TransferToInventoryButton item={item} onTransferToInventory={handleTransferToInventory} />
              <TransferToStonedButton item={item} onTransferToStoned={handleTransferToStoned} />
            </td>
            <SalesTable
  sales={sales}
  handleTransferToInventory={handleTransferToInventory}
  stoned={stoned}
  handleTransferToStoned={handleTransferToStoned}
/>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default SalesTable;
