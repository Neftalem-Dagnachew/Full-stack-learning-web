const API_URL = import.meta.env.VITE_API_URL;

export const getUser = async () => {
    const res = await fetch(`${API_URL}/users/get`)
    return res.json();
}

export async function getMe() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/users/getMe`, {
    headers: {
      "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
    }
  });

  if (!res.ok) {
    localStorage.removeItem("token");
    throw new Error("Unauthorized");
  }

  return res.json();
}

// Register
export async function registerUsers(formData) {

    const res = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(formData)
    })

    if(!res.ok) throw new Error("Register failed");
    return res.json();
}

// Login
export async function loginUsers(formData) {
    const res = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(formData)
    })

    if(!res.ok) throw new Error("Login Failed")
    return res.json();
    
}

// photo
export async function updateProfilePhoto(file) {
    const token = localStorage.getItem("token")

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(`${API_URL}/users/update-photo`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData
    });
    if(!res.ok) throw new Error("Photo upload failed");

    return res.json();
}