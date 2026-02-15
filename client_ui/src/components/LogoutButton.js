import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LogoutButton = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout(); // 🔥 updates state + clears storage
        navigate("/login");
    };

    return (
        <button onClick={handleLogout} className="btn border-0">
            Logout
        </button>
    );
};

export default LogoutButton;
