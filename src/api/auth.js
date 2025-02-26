const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000"; // Update if using a different backend URL

export const login = async () => {
    window.location.href = `${API_BASE_URL}/auth/login`;
};

export const logout = async () => {
    try {
        await fetch(`${API_BASE_URL}/auth/logout`, { method: "GET", credentials: "include" });
        window.location.href = "/";
    } catch (error) {
        console.error("Logout failed:", error);
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
