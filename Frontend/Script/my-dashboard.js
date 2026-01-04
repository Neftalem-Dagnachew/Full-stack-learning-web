const profile_btn = document.getElementById("profile_btn");
const dropdownMenu = document.getElementById("dropdownMenu");

profile_btn.addEventListener("click", (e) => {
    dropdownMenu.classList.toggle("active");
});


document.addEventListener("click", (e) => {

    if (!profile_btn.contains(e.target) &&!dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("active");
    }
    
});
