import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setError("Failed to fetch product");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center mt-5">Loading product details...</div>;
    if (error) return <div className="alert alert-danger text-center">{error}</div>;

    return (
        <div className="container mt-4">
            <div className="mb-3">
                <Link to="/Table" className="btn btn-outline-info w-100 w-sm-auto">
                    View All Products
                </Link>
            </div>

            <div className="card mx-auto shadow-sm" style={{ maxWidth: "100%", width: "700px" }}>
                <img
                    src={product.image}
                    className="card-img-top img-fluid p-4"
                    alt={product.title}
                    style={{ maxHeight: "400px", objectFit: "contain" }}
                />
                <div className="card-body">
                    <h4 className="card-title text-truncate">{product.title}</h4>

                    <h5 className="text-success fw-bold fs-3">
                        ${product.price.toFixed(2)}
                    </h5>

                    <p className="card-text small">{product.description}</p>

                    <p className="card-text">
                        <strong className="fst-italic">Category:</strong> {product.category}
                    </p>

                    <div className="d-grid">
                        <Link to={`/cart/${product.id}`} className="btn btn-warning btn-lg">
                            Add to Cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
