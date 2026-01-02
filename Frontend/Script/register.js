

document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const data = {

        email: formData.get("email"),
        password: formData.get("password"),                
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        nickname: formData.get("nickname"),
        phone_numer: formData.get("phone_numer"),
        identity: formData.get("identity"),

    };

    try {

        const res = await fetch("http://localhost:3000/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if(res.ok) {
            alert("Account created successfully");
            console.log(result)
        } else {
            alert(result.message || "Registration failed");
        }

    } catch (error) {
        console.error(error);
        alert("Server error");
    }

})