import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ActionOrder } from "../Redux/Action";
import { ActionDelete } from "../Redux/Action";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

export default function CartPage() {
  const [amount, setAmount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [Actionss, SetAction] = useState(false);
  const dispatch = useDispatch();
  const cardata = useSelector((store) => store.cart);

  useEffect(() => {
    let amountTotal = 0;
    cardata.forEach((item) => {
      amountTotal += item.price;
    });
    setAmount(amountTotal);
  }, [cardata]);

  function OrderNow() {
    ActionOrder(dispatch, cardata);
    setShowAlert(true);
    SetAction(true);
    setAlertMessage("Product added for Checkout!");
  }

  function DeleteButton(id) {
    setShowAlert(true);
    SetAction(true);
    setAlertMessage("Product Deleted Successfully!");
    ActionDelete(dispatch, id);
  }

  return (
    <div>
      {showAlert && (
        <Alert
          variant={Actionss ? "success" : "danger"}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}
      <Link to={`/orders`}>
        <Button style={{ position: "relative", left: "40rem", top: "1px" }}>
          ORDER
        </Button>
      </Link>
      <h2>Cart Page</h2>
      <h3>Total Amount: {amount}.00 RS</h3>
      <div className="card-grid">
        {cardata.length > 0 ? (
          cardata.map((item) => (
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Subtitle>{item.title}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.brand}
                </Card.Subtitle>
                <Card.Subtitle>Category: {item.category}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Price: ${item.price}
                </Card.Subtitle>
                <Button variant="warning" onClick={OrderNow}>
                  Place order
                </Button>{" "}
                <Button
                  variant="warning"
                  onClick={() => {
                    DeleteButton(item.id);
                  }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <h1>No Data in Cart</h1>
        )}
      </div>
    </div>
  );
}
