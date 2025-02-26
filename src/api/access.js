const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

export const generateCode = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/access/generate-code`, {
            method: "POST",
            credentials: "include",
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

export const validateCode = async (token) => {
    try {
        const response = await fetch(`${API_BASE_URL}/access/validate-code/${token}`, {
            method: "POST",
            credentials: "include",
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || "Invalid code");
        }

        return await response.json();
    } catch (error) {
        console.error("Error validating code:", error);
        return { message: "Invalid or expired code" };
    }
};
