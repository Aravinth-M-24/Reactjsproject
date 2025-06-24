import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";

function Category({ setShowMainMenu }) {
    const [categories, setCategories] = useState([]);
    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching categories:", error));
    }, []);

   


    return (
        <>
            <div style={{ textAlign: "center", margin: "20px 0" }}>
                <h1>Categories</h1>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                {categories.map((category) => (
                    <div
                        key={category}
                        className="card m-2"
                        style={{
                            width: "18rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <div className="card-body">
                            <h5 className="card-title">{category}</h5>
                            <p className="card-text">Explore products in the {category} category.</p>
                            <Link
                                to={`/${category}`}
                                className="btn btn-primary"
                               
                            >
                                View Product
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Category;
