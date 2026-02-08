import React from "react";


const LogIn = () => {
    return (
        <div className="signin-wrapper d-flex flex-column">
            
            <div className="signin-card">
                {/* Left Section */}
                <div className="signin-left">
                    <h1>Welcome</h1>
                    <form className="signin-form">
                        <input type="email" placeholder="Email address" />
                        <input type="password" placeholder="Password" />

                        <button type="submit">Sign In</button>
                    </form>

                    <span className="signin-footer">
                        Don’t have an account? <a href="/register">Join</a>
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

export default LogIn;
