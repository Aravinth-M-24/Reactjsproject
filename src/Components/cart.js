import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Cart() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setError("Failed to load item. Please try again later.");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center mt-5">Loading item details...</div>;
    if (error) return <div className="alert alert-danger text-center">{error}</div>;

    return (
        <>
            <div className="container mt-5">
                <div className="card p-4">
                    <h2 className="fw-bold mb-4">🛒 Shopping Cart</h2>
                    <hr className="border border-dark" />

                    <div className="d-flex flex-column flex-md-row align-items-start mt-4 gap-4">
                        <img
                            src={item?.image}
                            alt={item?.title}
                            className="img-thumbnail"
                            style={{ width: "150px", height: "150px", objectFit: "contain" }}
                        />

                        <div className="flex-grow-1">
                            <p className="text-uppercase text-muted fw-semibold">{item?.category}</p>
                            <h4 className="fw-bold">{item?.title}</h4>
                            <p className="text-secondary">{item?.description}</p>

                            <div className="d-flex gap-3 my-3 flex-wrap">
                                <span className="badge bg-secondary">
                                    In Stock: {item?.rating?.count}
                                </span>
                                <span className="badge bg-warning text-dark">
                                    ⭐ Rating: {item?.rating?.rate}
                                </span>
                            </div>

                            <h5 className="text-success fw-bold mt-2">₹ {item?.price}</h5>

                            <div className="text-center">
                                <button className="btn btn-danger mt-4">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <hr className="my-4 border border-dark" />
                    <div className="text-end">
                        <Link to="/" className="btn btn-outline-primary">← Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
