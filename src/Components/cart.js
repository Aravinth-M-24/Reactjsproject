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
       
       <>
       <div className="card  mt-5 p-2 container">
        <div className=" text-start fw-bolder fs-2 p-3">
            Shopping cart
            <hr className="my-5 border border-dark"></hr>
        </div>
        <div className="mt-3 d-flex">
            <div  className="mb-5 card-body ">
               <img src={item.image} style={{height:"100px" ,width:"100px"}}></img>
            </div>  
            <div>
                <p className="text-center fw-bolder ">{item.category}</p>
                <p className="fw-bold mt-2">{item.title}</p>
                <p className="fw-lighter">{item.description}</p>
               <div className="" style={{display:"flex" ,gap:"10px"}}>
                <span className=" fw-bolder" style={{backgroundColor:"gray", color:"white",borderRadius:"5px"}} >In Stock: {item.rating.count}</span>
                <span className="fw-bolder  bg-warning" style={{ borderRadius:"5px"}}> Rating:  {item.rating.rate}</span>
             </div>
             <p className="mt-2 fw-bolder  text-success">price: {item.price}</p>
             <div style={{textAlign:"center"}}>
                <span className="btn btn-danger mt-5 " > Buy now</span>
             </div>
             
            </div>
            
        </div>
        <hr className="my-5 mt-3 mb-5 border border-dark"></hr>
       </div>
       </>
       
    );
}

export default Cart;
