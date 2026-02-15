import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";



const LogIn = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);


    const [formData, setFormData] = useState({
        Email: "",
        Password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:3001/api/auth/login",
                formData
            );

            const { token, role } = res.data;

            login(token, role); // 🔥 IMPORTANT FIX

            setFormData({
                Email: "",
                Password: "",
            });

            if (role === "freelancer" || role === "seller") {
                navigate("/");
            } else {
                navigate("/about");
            }

        } catch (error) {
            if (error.response?.data?.error) {
                alert(error.response.data.error);
            } else {
                alert("Login failed. Try again.");
            }
        }
    };


    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (token && role) {
            if (role === "freelancer" || role === "seller") {
                navigate("/dashboard");
            } else {
                navigate("/");
            }
        }
    }, [navigate]);


    return (
        <div className="signin-wrapper d-flex flex-column">
            <div className="signin-card">

                <div className="signin-left">
                    <h1>Welcome</h1>

                    <form className="signin-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="Email"
                            value={formData.Email}
                            placeholder="Email address"
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            name="Password"
                            value={formData.Password}
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Login</button>
                    </form>

                    <span className="signin-footer">
                        Don’t have an account? <a href="/register">Join</a>
                    </span>
                </div>

                <div className="signin-right">
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ width: "100%", borderRadius: "2rem" }}
                    >
                        <source
                            src="media/images/services/Vibe coding marketing banner loop.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

            </div>
        </div>
    );
};

export default LogIn;
