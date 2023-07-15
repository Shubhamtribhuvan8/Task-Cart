import React from "react";
import "../../App.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function OrderPage() {
  const [amount, setAmount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const orderData = useSelector((store) => store.order);

  const flattenedOrderData = orderData.flat();

  useEffect(() => {
    let amountTotal = 0;
    flattenedOrderData.forEach((item) => {
      amountTotal += item.price;
    });
    setAmount(amountTotal);
  }, [flattenedOrderData]);

  function orderPay() {
    if (amount === 0) {
      setShowAlert(true);
      setAlertMessage("Order More!");
    } else {
      setShowAlert(true);
      setAlertMessage("Order Placed Successfully!");
      setOrderPlaced(true);
    }
  }

  return (
    <div>
      <h1>Order Page</h1>
      {showAlert && (
        <Alert
          variant={orderPlaced ? "success" : "danger"}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}
      {orderPlaced ? (
        <h3>Order Placed Successfully!</h3>
      ) : (
        <h3>Total Amount: {amount}.00 RS</h3>
      )}
      {orderPlaced ? null : (
        <div className="card-grid">
          {flattenedOrderData.length > 0 ? (
            flattenedOrderData.map((item) => (
              <Card key={item.id} style={{ width: "16rem" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Subtitle>{item.title}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Price: ${item.price}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h1>No Order in Cart</h1>
          )}
        </div>
      )}
      {!orderPlaced && (
        <Button variant="warning" onClick={orderPay}>
          PAYMENT
        </Button>
      )}
    </div>
  );
}
