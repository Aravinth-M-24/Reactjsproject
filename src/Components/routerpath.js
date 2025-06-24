import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Signin from "./Signin";
import Login from "./login";
import Category from "./categories";
import Products from "./electronics";
import Jwellery from "./jwellery";
import Menc from "./Menc";
import Womenc from "./womenc";
import Cart from "./cart";
import ProductDetails from "./products"; // Make sure the file name is correct
import ShowTable from "./table";

function Routerpath() {
   

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Category />} />
                    <Route path="signin" element={<Login />} />
                    <Route path="signup" element={<Signin />} />
                    <Route path="category" element={<Category />} />
                    <Route path="jewelery" element={<Jwellery />} />
                    <Route path="men's clothing" element={<Menc />} />
                    <Route path="women's clothing" element={<Womenc />} />
                    <Route path="electronics" element={<Products />} />
                    <Route path="products/:id" element={<ProductDetails  />} />
                    <Route path="Table" element={<ShowTable  />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routerpath;
