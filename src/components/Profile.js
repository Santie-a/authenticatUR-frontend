import React from "react";

const Profile = (props) => {
    const { user } = props

    if (!user) return <p>Please log in.</p>;

    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Email:</strong> {user.username}</p>
        </div>
    );
};

export default Profile;
