import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainMenu from "./mainmenu";
import { Link } from "react-router-dom";
function Womenc() {
    const [collection, setCollections] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/women's clothing")
            .then((response) => response.json())
            .then((data) => setCollections(data))
            .catch((error) => console.error("Error fetching women's collection:", error));
    }, []);

    return (
        <div className="container">
            <MainMenu/>
            <h1 className="text-center my-4">WOMEN'S COLLECTION</h1>
            <div className="row">
                {collection.map((item) => (
                    <div key={item.id} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="card-img-top p-3"
                                style={{ height: "250px", objectFit: "contain" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text " title={item.description}>
                                    {item.description.length > 100 ? item.description.substring(0, 100) + "..." : item.description}
                                </p>
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
    );
}

export default Womenc;
