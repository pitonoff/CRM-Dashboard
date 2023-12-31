import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import inventoryData from '../Data/inventoryData.json';
import TransferToInventoryButton from './TransferToInventoryButton';
import Button from 'react-bootstrap/Button';

function Sales() {
  const [inventory, setInventory] = useState(inventoryData);
  const [sales, setSales] = useState([]);
  const [cash, setCash] = useState(0);
  const [margin, setMargin] = useState(0);

  const handleTransferToInventory = (item) => {
    setSales((prevSales) => {
      const index = prevSales.findIndex((i) => i.itemName === item.itemName);
      if (index !== -1) {
        const updatedSales = [...prevSales];
        updatedSales.splice(index, 1);
        return updatedSales;
      }
      return prevSales;
    });
  
    setInventory((prevInventory) => {
      const updatedInventory = prevInventory.inventory.map((i) => {
        if (i.itemName === item.itemName) {
          return {
            ...i,
            amount: i.amount + 1
          };
        }
        return i;
      });
  
      return {
        ...prevInventory,
        inventory: updatedInventory
      };
    });
  
    setCash((prevCash) => prevCash - item.price);
    setMargin((prevMargin) => prevMargin - (item.price - item.cost));
  
    console.log("Возвращено в Inventory:", item.itemName, "Количество:", 1);
  };
  

  const handleSale = (item) => {
    const saleItem = {
      itemName: item.itemName,
      amount: 1,
      cost: item.cost,
      price: item.price,
      saleDate: new Date().toLocaleString()
    };

    setSales((prevSales) => [...prevSales, saleItem]);

    setInventory((prevInventory) => {
      const updatedInventory = prevInventory.inventory.map((i) => {
        if (i.itemName === item.itemName) {
          return {
            ...i,
            amount: i.amount - 1
          };
        }
        return i;
      });

      return {
        ...prevInventory,
        inventory: updatedInventory
      };
    });

    setCash((prevCash) => prevCash + item.price);
    setMargin((prevMargin) => prevMargin + (item.price - item.cost));

    console.log("Продано:", item.itemName, "Количество:", 1);
  };

  useEffect(() => {
    const totalCash = sales.reduce((total, item) => total + item.price, 0);
    setCash(totalCash);
  }, [sales]);

  return (
    <div className='colored'>
      <Container fluid="md">
        <Row>
          <Col>
          <h3>Inventory:</h3>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
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
          {inventory.inventory.map((item, index) => (
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
      <Container fluid="md">
        <Row>
          <Col></Col>
          <Col>
            <h3>Sales:</h3>
          </Col>
          <Col>
            Cash: <h4>${cash}</h4>
          </Col>
          <Col>
            Margin: <h4>${margin}</h4>
          </Col>
        </Row>
      </Container>
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
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Sales;
