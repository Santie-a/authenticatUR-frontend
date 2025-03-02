const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000"; // Update if using a different backend URL

export const login = async () => {
    window.location.href = `${API_BASE_URL}/auth/login`;
};

export const logout = async () => {
    try {
        console.log("Logging out...");
        const response = await fetch(`${API_BASE_URL}/auth/logout`, {
            method: "GET",
            credentials: "include",
        });

        if (response.redirected) {
            console.log("Logout successful");
            window.location.href = response.url; // Redirige a la URL final
        } else {
            console.error("Logout failed:", await response.text());
        }
    } catch (error) {
        window.location.reload();
    }
};


export const getUserProfile = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/profile`, {
            method: "GET",
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error("Unauthorized");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching profile:", error);
        return null;
    }
};
