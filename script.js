
// Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});


