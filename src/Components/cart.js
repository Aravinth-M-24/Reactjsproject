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
                setError("Failed to load item.");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center mt-5">Loading item details...</div>;
    if (error) return <div className="alert alert-danger text-center">{error}</div>;

    return (
        <div className="container mt-5">
            <div className="card mx-auto shadow" style={{ maxWidth: "28rem" }}>
                <img 
                    src={item.image}
                    alt={item.title}
                    className="card-img-top p-3"
                    style={{ height: "300px", objectFit: "contain" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="fw-bold">Price: ₹{item.price}</p>
                    <Link to="/electronics" className="btn btn-secondary">Back to Products</Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
