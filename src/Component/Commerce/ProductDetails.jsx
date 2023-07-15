import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import { ActionCart } from "../Redux/Action";
import { useDispatch } from "react-redux";
import Alert from "react-bootstrap/Alert";

export default function ProductDetails() {
  const [State, setState] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [Actionss, SetAction] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  function addtocard() {
    ActionCart(dispatch, State);
    setShowAlert(true);
    SetAction(true);
    setAlertMessage("Added in Cart successfully");
  }
  const getData = async (url) => {
    try {
      var data = await fetch(url);
      data = await data.json();
      setState(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <Link to={`/cart`}>
        <Button style={{ position: "relative", left: "40rem", top: "1px" }}>
          CART
        </Button>
      </Link>

      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={State.image} />
        <Card.Body>
          <Card.Subtitle>{State.title}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {State.brand}
          </Card.Subtitle>
          <Card.Subtitle>Category:{State.category}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            <h4>Price:RS. {State.price}</h4>
          </Card.Subtitle>
          <Button variant="primary" onClick={addtocard}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
