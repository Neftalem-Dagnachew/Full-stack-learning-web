const API_URL = import.meta.env.VITE_API_URL;

export const getUser = async () => {
    const res = await fetch(`${API_URL}/users/get`)
    return res.json();
}

// LOGIN
export async function registerUsers(formData) {

    const res = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(formData)
    })

    if(!res) throw new Error("Register failed");
    console.log("API_URL:", API_URL);
    return res.json();
}