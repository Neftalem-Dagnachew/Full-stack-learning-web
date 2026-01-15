const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (FormData) => {
    const res = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(FormData)
    });

    if(!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
    }

    return res.json();
}