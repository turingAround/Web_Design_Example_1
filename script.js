// Theme toggling functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved user preference, if any, on load of the website
    const userPreference = localStorage.getItem('theme') || 
                          (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', userPreference);

    // Listen for toggle button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Set new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        // Save theme preference
        localStorage.setItem('theme', newTheme);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// for contact form

// Form handling for demo
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = document.querySelector('.submit-btn');
            submitButton.innerHTML = 'Sending...';
            submitButton.disabled = true;

            setTimeout(() => {
                alert('Form submitted! (Demo - no data was actually sent)');
                contactForm.reset();
                submitButton.innerHTML = 'Send Message';
                submitButton.disabled = false;
            }, 1500);
        });
    }

    // Dark mode toggle
    function dark() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    // Add click event listener to the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', dark);
    }
});


    // Theme toggle 
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }


