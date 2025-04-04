document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Basic animation on scroll (example for team members)
    const teamMembers = document.querySelectorAll('.team-members .member');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    teamMembers.forEach(member => {
        member.style.opacity = 0; // Initially hide
        observer.observe(member);
    });

    // You can add more animations on scroll for other sections as needed.
});