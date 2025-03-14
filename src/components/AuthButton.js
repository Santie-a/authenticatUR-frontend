import React from "react";
import { login, logout } from "../api/auth";
import "../styles/components/AuthButton.css"

const AuthButton = (props) => {
    const { user } = props

    return (
        <div className={"auth-buttons"}>
            {user ? (
                <button className={"exit-button"} onClick={logout}>Salir</button>
            ) : (
                <button className={"button"} onClick={login}>Entrar</button>
            )}
        </div>
    );
};

export default AuthButton;
