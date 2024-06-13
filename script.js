// JavaScript to add interactivity to the navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    // Function to add/remove scrolled class based on scroll position
    function onScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    // Add scroll event listener
    window.addEventListener("scroll", onScroll);

    // Initial check in case the page is already scrolled
    onScroll();
});
