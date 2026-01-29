const API_URL = import.meta.env.VITE_API_URL;

export const getUser = async () => {
    const res = await fetch(`${API_URL}/users/get`)
    return res.json();
}

// export const loginUser = async (formData) => {
//     const res = await fetch(`${API_URL}/users/login`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//     });

//     if(!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || "Login failed");
//     }

//     return res.json();
// }

// LOGIN
export async function loginUser(formData) {
    const res = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(formData)
    })

    if(!res) throw new Error("Login failed");
    return res.json();
}