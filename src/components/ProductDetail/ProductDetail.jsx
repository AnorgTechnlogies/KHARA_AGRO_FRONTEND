import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";
import "./ProductDetail.css";

const ProductDetail = ({ productId }) => {
  const { url } = useContext(StoreContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${url}/api/food/${productId}`);
        if (res.data.success) setProduct(res.data.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [url, productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={`${url}/uploads/${product.image}`} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><b>Category:</b> {product.category}</p>
      <p><b>Price:</b> ₹{product.price}</p>
      <p><b>Discount:</b> {product.discount}%</p>
      <p><b>Sizes:</b> {product.sizes.join(", ")}</p>
    </div>
  );
};

export default ProductDetail;
