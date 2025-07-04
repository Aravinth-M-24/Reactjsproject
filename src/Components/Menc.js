import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainMenu from "./mainmenu";
import { Link } from "react-router-dom";

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
                                <p style={{color:"green",fontSize:"25px"}}>price:{item.price}</p>
                                <div className="mt-5 mb-5">
                                    
                                     <Link to={`/products/${item.id}`} className="btn btn-primary">View Product</Link>
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
