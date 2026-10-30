
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {

   const [formData,setData]=useState({usename:"",password:""});

   const navigate=useNavigate();


   function handleChange(e){
     setData({...formData,[e.target.name]:e.target.value});
   }

   async function handleSubmit(e){
     e.preventDefault();
     const res=await fetch("http://localhost:8000/login",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"include",
        body:JSON.stringify(formData)
     })
     
     const msg=await res.text();

     if(!res.ok){
        alert(msg);
        return;
     }

     alert("Login successful");
     navigate("/");

   }

    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">

            <div className="row w-100 justify-content-center">

                <div className="col-md-6 col-lg-5">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body p-4 p-md-5">

                            <div className="text-center mb-4">
                                <h2 className="fw-bold">Welcome Back</h2>
                                <p className="text-muted">
                                    Login to your OurKitchen account 🍽️
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>

                                {/* Username */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Username
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="username"
                                        placeholder="Enter your username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="btn btn-dark btn-lg w-100"
                                >
                                    Login
                                </button>

                            </form>

                            <div className="text-center mt-4">
                                <span className="text-muted">
                                    Don't have an account?
                                </span>

                                <a
                                    href="/signup"
                                    className="text-decoration-none fw-semibold ms-1"
                                >
                                    Sign Up
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

