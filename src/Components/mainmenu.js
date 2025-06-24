import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function MainMenu() {
    return (
         <nav class="navbar navbar-expand-lg navbar-dark bg-gray MainMenu">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"  style={{color:"white"}}>MainMenu</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
       
        <li class="nav-item">
          <Link class="nav-link" to="/electronics">Electronics</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/jewelery">JEWELERY</Link>
        </li>
            
        <li class="nav-item">
          <Link class="nav-link" to="/women's clothing">Womencollection</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/men's clothing">Mencollections</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
           
        
    )
}

export default MainMenu;