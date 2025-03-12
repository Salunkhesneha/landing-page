// Add a smooth scroll effect to all anchor links in the navigation bar
document.querySelectorAll('.nav-links a').forEach(link => {
    // Attach event listener to each link
    link.addEventListener('click', function(event) {
        // Prevent the default action (i.e., jumping to the section immediately)
        event.preventDefault();

        // Get the ID of the section to scroll to (removes the '#' from the href attribute)
        const targetId = this.getAttribute('href').substring(1);

        // Scroll to the target section with smooth behavior
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Function to programmatically scroll to a section when called (e.g., from a button click)
function scrollToSection(id) {
    // Scroll to the section with the given ID with smooth behavior
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
