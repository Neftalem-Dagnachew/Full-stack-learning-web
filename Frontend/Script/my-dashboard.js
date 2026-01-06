const profile_btn = document.getElementById("profile_btn");
const dropdownMenu = document.getElementById("dropdownMenu");

const dashboard_active = document.getElementById("dashboard_active");

dashboard_active.addEventListener("click", () => {
    dashboard_active.classList.toggle("give");
});


profile_btn.addEventListener("click", (e) => {
    dropdownMenu.classList.toggle("active");
});


document.addEventListener("click", (e) => {

    if (!profile_btn.contains(e.target) &&!dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("active");
    }
    
});

const token = localStorage.getItem("token")

if(!token) {
    window.location.href = "login.html";
}

const res = fetch("http://localhost:3000/users/Profile", {
    method: "GET",
    headers: {
                "Authorization": "Bearer " + token ,
                "Content-Type": "application/json"
            }
})
.then (res => res.json())
.then (user => {
    document.getElementById("main_name").textContent =
    `${user.first_name}`;

    const nickname = document.getElementById("user_name");
    if(nickname) {
        nickname.textContent = `@${user.nickname}`;
    }

    const navName = document.querySelector(".profile_btn span");
    if (navName) {
        navName.textContent = user.first_name;
    }

})

function logout() {
    localStorage.removeItem("token");
    window.location.href = "index.html";
}
