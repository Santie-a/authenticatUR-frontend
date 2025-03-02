const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000"; // Update if using a different backend URL

export const login = async () => {
    window.location.href = `${API_BASE_URL}/auth/login`;
};

export const logout = async () => {
    try {
        console.log("Logging out...");

        const response = await fetch(`${API_BASE_URL}/auth/logout`, {
            method: "GET",
            credentials: "include", // Ensure cookies are included
            mode: "cors",          // Use CORS to allow cross-origin requests
            cache: "no-cache",     // Force no cache to avoid old cookies
            headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0", // Additional cache control
                Pragma: "no-cache",
            },
        });

        if (response.ok) {
            console.log("Logout successful");
            // Clear browser cache before reloading
            window.location.href = "/";
        } else {
            console.error("Logout failed:", await response.text());
        }
    } catch (error) {
        console.error("Logout request failed:", error);
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
