document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the target container's ID from the link's href
            const targetId = link.getAttribute('href').substring(1);

            // Scroll to the target container
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});