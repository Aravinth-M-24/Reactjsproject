import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Login() {
    return(
            <div class="center">
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title" style={{textAlign:"center"}}>Login</h5>
                    <form>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>   
                    </form>


            </div>

        </div>
        </div>
    )
}

export default Login;