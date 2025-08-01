document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add some animation to the header text
    const headerContent = document.querySelector('.header-content');
    headerContent.style.opacity = '0';
    headerContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        headerContent.style.transition = 'all 1s ease';
        headerContent.style.opacity = '1';
        headerContent.style.transform = 'translateY(0)';
    }, 500);
});
