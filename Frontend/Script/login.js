
document.getElementById("loginForm").addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    try {

        const res = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(data)
        })

        const result = await res.json()

        if(res.ok) {
            alert("Login successfully");
            console.log(result);
        } else {
            alert(result.message || "Registration failed")
        }

    } catch (error) {
        alert("Server error");
        console.error(error);
    }

})