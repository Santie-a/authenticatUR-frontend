import React, {useState, useEffect} from "react";
import AccessCode from "../components/AccessCode";
import Profile from "../components/Profile";
import AuthButton from "../components/AuthButton";
import { getUserProfile } from "../api/auth";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    
        useEffect(() => {
            async function fetchProfile() {
                const profile = await getUserProfile();
                setUser(profile?.user || null);
            }
            fetchProfile();
        }, []);

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
