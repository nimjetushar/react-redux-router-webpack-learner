import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductListRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

const ProductListRow = ({ product, onDelete }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.status}</td>
      <td>
        <Link className="text-info" to={"product/" + product.id}>
          Edit
        </Link>
      </td>
      <td>
        <Link className="text-danger" to={"delete/product/" + product.id}>
          <span className="glyphicon glyphicon-remove-circle" />
        </Link>
      </td>
    </tr>
  );
};

export default ProductList;
