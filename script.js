document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference when page loads
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }

    // Form handling for demo
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

    // Dark mode toggle with localStorage
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Toggle dark mode class
            document.body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    }
});

// Handles phone input
document.addEventListener('DOMContentLoaded', function() {
    // Phone input handling
    const phoneInputs = document.querySelectorAll('.phone-input-group input');
    
    phoneInputs.forEach((input, index) => {
        input.addEventListener('input', function(e) {
            // Remove non-numeric characters
            this.value = this.value.replace(/[^0-9]/g, '');
            
            // Move to next input if current is filled
            if (this.value.length === this.maxLength && index < phoneInputs.length - 1) {
                phoneInputs[index + 1].focus();
            }
        });

        // Handle backspace
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !this.value && index > 0) {
                phoneInputs[index - 1].focus();
            }
        });
    });
});
