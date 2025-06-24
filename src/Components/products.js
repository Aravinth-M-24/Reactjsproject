import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetails() {
    const { id } = useParams(); // ✅ Get product ID from URL
    const [product, setProduct] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
      console.log( id);

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
            <div>
                <Link to="/Table" className=" btn btn-outline-info tablebutton">View All products</Link>
            </div>
            
            <div className="card mx-auto" style={{ maxWidth: "700px" }}>
                <img
                    src={product.image}
                    className="card-img-top p-5"
                    alt={product.title}
                    style={{ height: "400px", objectFit: "contain" }}
                />
                <div className="card-body">
                    <h3 className="card-title">{product.title}</h3>
                    <h5 className="text-success" style={{fontWeight:"500px",fontSize:"50px"}}>${product.price.toFixed(2)}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                        <strong style={{fontFamily:"cursive"}}>Category:</strong> {product.category}
                    </p>
                    <div style={{textAlign:'center'}}>
                        <Link to="cart" className="btn btn-warning "  >Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
