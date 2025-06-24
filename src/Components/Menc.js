import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainMenu from "./mainmenu";

function Menc() {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then((response) => response.json())
            .then((data) => {
                setCollections(data);
            });
    }, []); // ✅ Corrected: dependency array goes here

    return (
        <>
            <div>
                <MainMenu/>
                <h1 style={{ textAlign: "center" }}>MENS COLLECTION</h1>
            </div>
            <br />
            <div className="container">
                <div className="row">
                    {collections.map((item, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="card-img-top"
                                    style={{ width: "100%", height: "250px", objectFit: "contain" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description.substring(0, 100)}...</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between align-items-center">
                                    <span className="text-success fw-bold">Rs {item.price}</span>
                                    <button className="btn btn-warning">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Menc;
