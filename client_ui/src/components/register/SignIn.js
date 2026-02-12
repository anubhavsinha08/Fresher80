import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";


const SignIn = () => {
    // let navigate = useNavigate();
    const [formData, setFormData] = useState({
        UserName: "",
        Email: "",
        Password: "",
        role: "",
        phone: "",
        desc: "",
        country: ""
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

        const res = await fetch("http://localhost:3001/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formData }),
        });

        const data = await res.json();
        console.log({ data });
        setFormData({
            UserName: "",
            Email: "",
            Password: "",
            role: "",
            phone: "",
            desc: "",
            country: ""
        })
        // navigate("/login")
    };


    return (
        <div className="signin-wrapper d-flex flex-column" style={{ marginTop: "8rem" }}>
            <h1>Create account</h1>
            <p>Sign in to continue building with freshers80.</p>
            <div className="signin-card mt-5">
                {/* Left Section */}
                <div className="signin-left">


                    <form className="signin-form" onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="UserName"
                            value={formData.UserName}
                            placeholder="Enter username"
                            onChange={handleChange}
                            required
                        />

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

                        <select
                            name="role"
                            // value={formData.role}
                            onChange={handleChange}
                            className="form-select"
                            style={{height:"4rem"}}
                        >
                            <option value="client">Client</option>
                            <option value="freelancer">Freelancer</option>
                        </select>



                        <div className="row d-flex flex-column gap-4">

                            <div className="col-12 ">
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    placeholder="Country"
                                    onChange={handleChange}
                                    required
                                    className="form-select "
                                    
                                />
                            </div>
                            <div className="col12 ">
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    className="form-select "
                                />
                            </div>
                        </div>

                        <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Description"
                            name="desc"
                            value={formData.desc}
                            onChange={handleChange}
                        />

                        <button type="submit">Create account</button>
                    </form>


                    <span className="signin-footer">
                        Login to your account? <a href="/login">login</a>
                    </span>
                </div>

                {/* Right Section */}
                <div className="signin-right">
                    <video id="video" autoPlay
                        loop
                        muted style={{ width: "100%", borderRadius: "2rem" }}>
                        <source src="media\images\services\Vibe coding marketing banner loop.mp4" type="video/mp4" />
                    </video>

                </div>
            </div>
        </div>
    );
};

export default SignIn;
