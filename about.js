// JavaScript for GLCC About Page

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Header Navigation Links
    const navLinks = document.querySelectorAll(".header-nav a[href^='#']");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust offset for sticky header
                    behavior: "smooth"
                });
            }
        });
    });

    // Back to Top Button Functionality
    const backToTopBtn = document.createElement("button");
    backToTopBtn.textContent = "↑ Top";
    backToTopBtn.className = "back-to-top";
    document.body.appendChild(backToTopBtn);

    backToTopBtn.style.position = "fixed";
    backToTopBtn.style.bottom = "20px";
    backToTopBtn.style.right = "20px";
    backToTopBtn.style.padding = "10px 15px";
    backToTopBtn.style.fontSize = "1rem";
    backToTopBtn.style.backgroundColor = "#333";
    backToTopBtn.style.color = "#fff";
    backToTopBtn.style.border = "none";
    backToTopBtn.style.borderRadius = "5px";
    backToTopBtn.style.cursor = "pointer";
    backToTopBtn.style.display = "none";

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Show/Hide Back to Top Button on Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });
});