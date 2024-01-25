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
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});