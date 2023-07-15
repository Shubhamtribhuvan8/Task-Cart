import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Action } from "../Redux/Action";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import Pagination from "./Pagination";

export default function ProductPage() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  async function Mrequest(URL) {
    let res = await fetch(URL);
    // https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products
    let data = await res.json();
    setTotal(data.totalPages);
    Action(dispatch, data.data);
    console.log(data.data);
  }

  useEffect(() => {
    HandleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let data = useSelector((store) => {
    return store.products;
  });

  function HandleFilter() {
    let fcategory = document.getElementById("filter").value;
    let sorting = document.getElementById("sorting").value;
    if (fcategory === "filter" && sorting === "sort") {
      Mrequest(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products??limit=12&page=${page}`
      );
    } else if (sorting !== "sort" && fcategory !== "filter") {
      Mrequest(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=12&page=${page}&filter=${fcategory}&sort=price&order=${sorting}`
      );
    } else if (sorting !== "sort") {
      Mrequest(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=12&page=${page}&sort=price&order=${sorting}`
      );
    } else if (fcategory !== "filter") {
      Mrequest(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=12&page=${page}&filter=${fcategory}`
      );
    }
  }
  // Mrequest();
  return (
    <div style={{ marginTop: "1%" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <Form.Select
          size="lg"
          id="filter"
          style={{ width: "14rem" }}
          onChange={HandleFilter}
        >
          <option value="filter">Filter By Category</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
          <option value="women">Women</option>
          <option value="homedecor">homedecor</option>
        </Form.Select>

        <Form.Select
          size="lg"
          id="sorting"
          style={{ width: "11rem" }}
          onChange={HandleFilter}
        >
          <option value="sort">Sort By Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Form.Select>
      </div>
      <p style={{ marginTop: "-8px" }} />
      <div className="card-grid">
        {data ? (
          data.map((e, id) => {
            return (
              <>
                <div>
                  <Card style={{ width: "20rem" }}>
                    <Link to={`/product/${e.id}`}>
                      <Card.Img variant="top" src={e.image} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{e.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {e.brand}
                      </Card.Subtitle>
                      <Card.Subtitle>Category:{e.category}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">
                        <h4>Price:Rs.{e.price}</h4>
                      </Card.Subtitle>
                      <Link to={`/product/${e.id}`}>
                        <Button variant="info">More Info</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })
        ) : (
          <h1>....Loading</h1>
        )}
      </div>
      <Pagination items={{ currPage: page, setPage, total }} />
    </div>
  );
}
