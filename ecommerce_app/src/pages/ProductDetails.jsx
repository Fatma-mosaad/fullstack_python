import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);
  

  if (!product) return <div className="text-center py-5">Loading...</div>;

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.description}</p>

          <div className="mb-3">
            <span className="text-warning">★★★★★</span>{" "}
            <span className="text-muted">({product.rating})</span>
          </div>

          <h4 className="text-primary">${product.price}.00</h4>
          <p className="text-muted">or 99.99/month</p>

          <span
            className={`badge ${
              product.stock > 0 ? "bg-success" : "bg-danger"
            }`}
          >
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </span>

          <div className="my-3">
            <p>
              Category: <strong>{product.category}</strong>
            </p>
            <p>
              Brand: <strong>{product.brand}</strong>
            </p>
          </div>

          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-outline-secondary" onClick={decreaseQty}>
              −
            </button>
            <span className="mx-3">{quantity}</span>
            <button className="btn btn-outline-secondary" onClick={increaseQty}>
              +
            </button>
          </div>

          <p className="text-danger fw-bold">
            Only {product.stock} items left! Don’t miss it
          </p>

          <div className="d-flex gap-3">
            <button className="btn btn-success">Buy Now</button>
            <button className="btn btn-outline-success">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
