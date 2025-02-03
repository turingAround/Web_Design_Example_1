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
// Simple form handling for demo
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const submitButton = document.querySelector('.submit-btn');
            
            // Show loading state
            submitButton.innerHTML = 'Sending...';
            submitButton.disabled = true;

            // Simulate sending (1.5 second delay)
            setTimeout(() => {
                // Show demo success message
                alert('Form submitted! (Demo - no data was actually sent)');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitButton.innerHTML = 'Send Message';
                submitButton.disabled = false;
            }, 1500);
        });
    }

    // Theme toggle (if you need it)
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
});
