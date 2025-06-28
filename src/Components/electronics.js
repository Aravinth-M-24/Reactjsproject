import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from "./mainmenu";
import useFetch from "./usefetch";

function Products() {
    /*const [products, setProducts] = useState([]);*/
    const [products] = useFetch("https://fakestoreapi.com/products/category/electronics");
    
    /*useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/electronics")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                
            })
            .catch((err) => {
                setError("Failed to load products");
               
            });
    }, []);

   
    if (error) return <div className="alert alert-danger text-center">{error}</div>;*/

    return (
        <div className="container">
            <MainMenu/>
            <h2 className="text-center my-4">Electronics Collection</h2>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card h-100 shadow-sm">
                            <img 
                                src={product.image}
                                className="card-img-top p-3"
                                alt={product.title}
                                style={{ height: "200px", objectFit: "contain" }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title" style={{ fontSize: "1rem", minHeight: "60px" }}>
                                    {product.title.length > 50
                                        ? product.title.substring(0, 47) + "..."
                                        : product.title}
                                </h5>
                                <p className="card-text fw-bold text-success">
                                    ${product.price.toFixed(2)}
                                </p>
                                <Link to={`/products/${product.id}`} className="btn btn-primary">
                                    View Product
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
