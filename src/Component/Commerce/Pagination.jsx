import React from "react";
import Button from "react-bootstrap/Button";
export default function Pagination({ items }) {
  const { currPage, setPage, total } = items;
  return (
    <div>
      <Button
        variant="secondary"
        disabled={currPage === 1 ? true : false}
        onClick={() => {
          setPage(currPage - 1);
        }}
      >
        Prev
      </Button>{" "}
      <Button variant="primary">{currPage}</Button>{" "}
      <Button
        variant="secondary"
        disabled={currPage === total ? true : false}
        onClick={() => {
          setPage(currPage + 1);
        }}
      >
        Next
      </Button>{" "}
    </div>
  );
}
