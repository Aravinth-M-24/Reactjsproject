import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainMenu from './mainmenu'

function Jwellery() {
  const [jwellery, setJwellery] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => response.json())
      .then((data) => setJwellery(data))
      .catch((error) => console.error("Error fetching jewellery data:", error));
  }, []);

  return (
    
    <div className="container">
      
      <MainMenu/>

      <div>
        <h1 className="text-center my-4">JEWELERY</h1>
      </div>
      <div className="row">
        {jwellery.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text" title={item.description}>
                  Description: {item.description.length > 100 ? item.description.slice(0, 100) + "..." : item.description}
                </p>
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
  );
}

export default Jwellery;
