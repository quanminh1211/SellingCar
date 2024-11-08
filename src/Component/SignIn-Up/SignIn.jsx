import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(auth);

    };

    const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    auth[name] = value;
    setAuth({
        ...auth,
    })
    // console.log(auth);
    };

    const [auth, setAuth] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    });

    return (
    <div className="container">
        <h2 className="title">Create an Account</h2>
        <form onSubmit={handleSubmit} className="form">
        <label className="label">Name</label>
        <input
            name="name"
            type="text"
            id="name"
            placeholder="Full Name"
            className="input"
            onChange={handleChange}
            value={auth.name}
        />

        <label className="label">Email</label>
        <input
            name="email"
            type="email"
            id="email"
            placeholder="name@mail.com"
            className="input"
            onChange={handleChange}
        />

        <label className="label">Phone Number</label>
        <input
            name="phone"
            type="tel"
            id="phone"
            placeholder="000-000-000"
            className="input"
            onChange={handleChange}
        />

        <label className="label">Password</label>
        <div className="passwordContainer">
            <input
            name="password"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="password"
            className="input"
            onChange={handleChange}
            />
            <span onClick={togglePasswordVisibility} className="togglePassword">
            {showPassword ? "🙈" : "👁️"}
            </span>
        </div>

        <button type="submit" className="button">
            Create My Account
        </button>
        </form>

        <p className="loginText">
        Already have an account?{" "}
        <a href="#" className="link">
            Login here
        </a>
        </p>
    </div>
    );
};

export default SignIn;
