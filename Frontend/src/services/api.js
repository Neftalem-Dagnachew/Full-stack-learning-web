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
  });

  if(!res.ok) throw new Error("Login Failed")
  return res.json();
    
}

// photo
export async function updateProfilePhoto(file) {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append('image', file); 

  const res = await fetch(`${API_URL}/users/update-photo`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData 
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Photo upload failed");
  }
  
  return res.json();
}
export const updateCoverPhoto = async (file) => {
  const formData = new FormData();
  formData.append("cover_image", file);

  const token = localStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:5000/users/update-cover", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update cover photo");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export async function updateProfile(formData) {

  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/users/update-profile`, {
    method: "PUT",
    headers: {
      "Content-type" : "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData)
  });

  if(!res.ok) throw new Error("not Updated");
  return res.json();
  
}

export async function deleteProfilePhoto() {

  const token = localStorage.getItem("token"); // get token
  if (!token) throw new Error("No token found");
  const res = await fetch(`${API_URL}/users/delete-photo`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
  
}

export async function deleteCoverPhoto() {

  const token = localStorage.getItem("token"); // get token
  if (!token) throw new Error("No token found");
  const res = await fetch(`${API_URL}/users/delete-cover`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
  
}

// --- Course Related Functions ---

export async function getCourses(grade, subject) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/courses/search?grade_level=${grade}&subject_name=${subject}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "can not get course");
  }

  return res.json();
}

export async function addCourse(courseData) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/courses/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(courseData),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "can nnot add the course");
  }

  return res.json();
}