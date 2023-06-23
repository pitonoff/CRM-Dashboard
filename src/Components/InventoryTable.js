import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function InventoryTable({ inventory, handleSale }) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>In Stock</th>
          <th>Amount</th>
          <th>Cost</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.itemName}</td>
            <td>{item.amount}</td>
            <td>{item.cost}</td>
            <td>{item.price}</td>
            <td>
              <Button variant="primary" size="sm" onClick={() => handleSale(item)}>
                Sell
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default InventoryTable;
