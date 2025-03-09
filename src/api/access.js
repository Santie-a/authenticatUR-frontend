const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

export const generateCode = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No JWT token found.");
        return null;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/access/generate-code`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Failed to generate code");
        }

        const data = await response.json();
        return data.token;
        
    } catch (error) {
        console.error("Error generating code:", error);
        return null;
    }
};
