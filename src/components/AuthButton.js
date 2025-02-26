import React from "react";
import { login, logout } from "../api/auth";

const AuthButton = (props) => {
    const { user } = props

    return (
        <div>
            {user ? (
                <div>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={login}>Login with Microsoft</button>
            )}
        </div>
    );
};

export default AuthButton;
