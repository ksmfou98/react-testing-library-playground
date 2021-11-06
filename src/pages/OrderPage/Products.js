import React from "react";

function Products({ name, imagePath }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}>{name}</label>
        <input
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
          style={{ marginLeft: 7 }}
        />
      </form>
    </div>
  );
}

export default Products;
