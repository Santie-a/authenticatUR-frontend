import React, { useState, useEffect } from "react";
import AccessCode from "../components/AccessCode";
import Profile from "../components/Profile";
import AuthButton from "../components/AuthButton";
import { getUserProfile, exchangeCode } from "../api/auth";

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
        <div>
            <h1>AuthenticatUR</h1>
            <Profile user={user}/>
            {user && <AccessCode />}
            <AuthButton user={user} />
        </div>
    );
};

export default Dashboard;
