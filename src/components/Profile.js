import React from "react";
import "../styles/components/Profile.css"

const Profile = (props) => {
    const { user } = props

    if (!user) return <p></p>;

    return (
        <div className={"user-info"}>
            <h2>Usuario</h2>
            <p>{user.username}</p>
        </div>
    );
};

export default Profile;
