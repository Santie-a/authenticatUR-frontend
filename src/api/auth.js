const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000"; // Update if using a different backend URL

export const login = async () => {
    window.location.href = `${API_BASE_URL}/auth/login`;
};

export const logout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token"); // Remove token from storage
    window.location.href = "/"; // Redirect to home/login page
};

export const getUserProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No JWT token found.");
        return null;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/auth/profile`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
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

export const exchangeCode = async (code) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/exchange`, {
            method: "GET",
            headers: {
                "ExchangeCode": `Bearer ${code}`
            }
        });

        if (!response.ok) {
            throw new Error("Unauthorized");
        }

        const data = await response.json();
        return data.token;
        
    } catch (error) {
        console.error("Error fetching profile:", error);
        return null;
    }
}
