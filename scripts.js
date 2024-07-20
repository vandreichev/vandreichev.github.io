document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Check for saved theme in localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        themeIcon.src = "images/sun.png";
    }

    // Theme toggle event listener
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            themeIcon.src = "images/sun.png";
        } else {
            localStorage.setItem("theme", "light");
            themeIcon.src = "images/moon.png";
        }
    });

    // Hamburger Menu and Mobile Navigation
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburgerMenu && mobileNav) {
        // Toggle mobile navigation visibility
        hamburgerMenu.addEventListener('click', () => {
            mobileNav.classList.toggle('show');
            hamburgerMenu.classList.toggle('menu-open');
        });

        // Hide mobile navigation if clicking outside of it
        document.addEventListener('click', (event) => {
            if (!hamburgerMenu.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileNav.classList.remove('show');
                hamburgerMenu.classList.remove('menu-open');
            }
        });
    }

    // Scroll-Up Button Functionality
    const scrollUpButton = document.querySelector('.scroll-up');

    // Show or hide the scroll-up button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollUpButton.classList.add('show');
        } else {
            scrollUpButton.classList.remove('show');
        }
    });

    // Smooth scroll to top on button click
    scrollUpButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Download Resume Button Functionality
    const downloadResumeButton = document.getElementById('download-resume');

    if (downloadResumeButton) {
        downloadResumeButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const resumeUrl = 'files/resume.pdf'; // Replace with the actual path
            window.location.href = resumeUrl;
        });
    }
});
