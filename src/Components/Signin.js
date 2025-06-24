import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Signin() {
    return(
        <div class="center">
            <div class="card">
                <div class="card-title">
                    <h2>Sign In</h2>
                </div>
                <div class="card-body" style={{width: "22rem"}}>
                    <form>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email" />
                        </div>
                        <div class="mb-3">
                            <label for="emial" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="email" />
                        </div>
                        <div class="mb-3">
                            <label for="phoneno" class="form-label">PhoneNO</label>
                            <input type="number" class="form-control" id="number" placeholder="PhoneNO" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" />
                        </div>
                        <div class="button"><button type="submit" class="btn btn-primary">Sign In</button></div>
                        
                    </form>
                </div>

            </div>

        </div>

    )
}

export default Signin;
