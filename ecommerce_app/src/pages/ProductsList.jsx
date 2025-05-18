import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { LanguageContext } from "../contexts/LanguageContext";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 10;
  const dispatch = useDispatch();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/products?limit=${limit}&skip=${skip}`
        );
        setProducts(res.data.products || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [skip]);

  return (
    <div className="container my-4" dir={language === "ar" ? "rtl" : "ltr"}>
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 text-dark">
              <Link
                to={`/product/${product.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card-body pb-0">
                  <span
                    className={`badge mb-2 ${
                      product.stock > 0 ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {product.stock > 0 ? "In stock" : "Out of stock"}
                  </span>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="img-fluid mb-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <p className="card-text text-muted">Rating: {product.rating}</p>
                </div>
              </Link>
              <div className="card-footer bg-transparent border-0">
                <button
                  className="btn btn-outline-success w-100"
                  onClick={() => dispatch(addToCart(product))}
                  disabled={product.stock === 0}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-secondary"
          onClick={() => setSkip(Math.max(skip - limit, 0))}
          disabled={skip === 0}
        >
          Previous
        </button>
        <button
          className="btn btn-success"
          onClick={() => setSkip(skip + limit)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
