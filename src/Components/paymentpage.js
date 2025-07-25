import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

const PaymentPage = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [showAddressForm, setShowAddressForm] = useState(false); 

    const [address, setAddress] = useState({
        fullName: "",
        phone: "",
        addressLine: "",
        city: "",
        state: "",
        pincode: ""
    });

    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [upiId, setUpiId] = useState("");
    const [cardDetails, setCardDetails] = useState({
        name: "",
        number: "",
        expiry: "",
        cvv: ""
    });

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setError("Failed to load product. Please try again later.");
                setLoading(false);
            });
    }, [id]);

    const handleAddressChange = (field, value) => {
        setAddress({ ...address, [field]: value });
    };

    const handleSaveAddress = () => {
        console.log("Address Saved:", address);
        alert("Address saved successfully.");
    };

    const renderPaymentFields = () => {
        switch (paymentMethod) {
            case "upi":
                return (
                    <div className="mt-3">
                        <label className="form-label">UPI ID</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="example@upi"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                        />
                    </div>
                );
            case "card":
                return (
                    <div className="mt-3">
                        <label className="form-label">Cardholder Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            value={cardDetails.name}
                            onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                        />

                        <label className="form-label mt-3">Card Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="1234 5678 9012 3456"
                            value={cardDetails.number}
                            onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                        />

                        <div className="d-flex gap-3 mt-3">
                            <div className="flex-fill">
                                <label className="form-label">Expiry</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="MM/YY"
                                    value={cardDetails.expiry}
                                    onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                                />
                            </div>
                            <div className="flex-fill">
                                <label className="form-label">CVV</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="123"
                                    value={cardDetails.cvv}
                                    onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                );
            case "cod":
            default:
                return (
                    <div className="mt-3 text-muted">
                        No payment details required. Pay with cash upon delivery.
                    </div>
                );
        }
    };

    if (loading) return <div className="text-center mt-5">Loading product...</div>;
    if (error) return <div className="alert alert-danger text-center">{error}</div>;

    return (
        <div className="container mt-5 bg-light p-4 rounded d-flex flex-column flex-md-row justify-content-between">
            {/*Delivery Address */}
            <div className="card p-4 w-100 me-md-3 mb-4 mb-md-0">
                <h1 className="fs-4 fw-bold mb-4">Delivery Address</h1>

                <button
                    className="btn btn-primary mb-4"
                    onClick={() => setShowAddressForm(!showAddressForm)}
                >
                    {showAddressForm ? "Hide Address Form" : "Add Your Address"}
                </button>

                {showAddressForm && (
                    <>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={address.fullName}
                                onChange={(e) => handleAddressChange("fullName", e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                value={address.phone}
                                onChange={(e) => handleAddressChange("phone", e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <textarea
                                className="form-control"
                                rows="2"
                                value={address.addressLine}
                                onChange={(e) => handleAddressChange("addressLine", e.target.value)}
                            />
                        </div>

                        <div className="mb-3 d-flex gap-3">
                            <div className="flex-fill">
                                <label className="form-label">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={address.city}
                                    onChange={(e) => handleAddressChange("city", e.target.value)}
                                />
                            </div>
                            <div className="flex-fill">
                                <label className="form-label">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={address.state}
                                    onChange={(e) => handleAddressChange("state", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Pincode</label>
                            <input
                                type="text"
                                className="form-control"
                                value={address.pincode}
                                onChange={(e) => handleAddressChange("pincode", e.target.value)}
                            />
                        </div>

                        <button className="btn btn-success" onClick={handleSaveAddress}>
                            Save Address
                        </button>
                    </>
                )}
            </div>

            {/* Payment Method */}
            <div className="card p-4 w-100" style={{ maxWidth: "450px" }}>
                <h2 className="fs-4 fw-bold mb-3">Payment Method</h2>

                <select
                    className="form-select mb-3"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                >
                    <option value="cod">Cash on Delivery</option>
                    <option value="card">Credit/Debit Card</option>
                    <option value="upi">UPI</option>
                </select>
                <h6 className='fs-3 fw-bolder ' style={{color:"green"}}>Total Amount : ₹{data.price}</h6>

                {renderPaymentFields()}

                <Link to={`/cart/${data.id}`} className="btn btn-warning btn-lg mt-4">
                    Proceed to Payment
                </Link>
            </div>
        </div>
    );
};

export default PaymentPage;
