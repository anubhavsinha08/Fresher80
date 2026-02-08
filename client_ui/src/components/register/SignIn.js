import React from "react";

const SignIn = () => {
    return (
        <div className="signin-wrapper d-flex flex-column">
            <h1>Create account</h1>
                    <p>Sign in to continue building with freshers80.</p>
            <div className="signin-card">
                {/* Left Section */}
                <div className="signin-left">
                    

                    <form className="signin-form">
                        <input type="UserName" placeholder="Enter username" />
                        <input type="email" placeholder="Email address" />
                        <input type="password" placeholder="Password" />

                        <button type="submit">Sign In</button>
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
