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
