/*document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    window.addEventListener("scroll", () => {
        document.body.classList.toggle("scrolled", window.scrollY > 50);
    });
});
*/

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    // Toggle menu visibility on click
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Toggle scrolled class on scroll
    window.addEventListener("scroll", () => {
        document.body.classList.toggle("scrolled", window.scrollY > 50);

        // Show/hide the back-to-top button
        const backToTopButton = document.getElementById("back-to-top");
        if (window.scrollY > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll to top on back-to-top button click
    const backToTopButton = document.getElementById("back-to-top");
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
