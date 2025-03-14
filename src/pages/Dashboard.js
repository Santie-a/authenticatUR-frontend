import React, { useState, useEffect } from "react";
import AccessCode from "../components/AccessCode";
import Profile from "../components/Profile";
import AuthButton from "../components/AuthButton";
import { getUserProfile, exchangeCode } from "../api/auth";
import "../styles/pages/Dashboard.css" 

const useQuery = () => new URLSearchParams(window.location.search);

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const query = useQuery();
    
        useEffect(() => {
            const codeFromUrl = query.get("code")

            async function fetchProfile() {
                const profile = await getUserProfile();
                setUser(profile?.user || null);
            }

            async function exchange() {
                const token = await exchangeCode(codeFromUrl);
                localStorage.setItem("token", token)
                fetchProfile()
            }

            if (codeFromUrl) {
                exchange();
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        });

    return (
        <div className={"container content-box"}>
            <img src="img/logo_urosario.png" alt="Logo AuthenticatUR" className={"logo"}></img>
            <h1>AuthenticatUR</h1>
            <Profile user={user}/>
            {user && <AccessCode />}
            <AuthButton user={user} />
        </div>
    );
};

export default Dashboard;
