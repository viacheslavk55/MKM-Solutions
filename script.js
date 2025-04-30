// Add this script to your JavaScript file or at the end of the body
document.addEventListener('DOMContentLoaded', function() {
    // Close navbar when clicking a nav item on mobile
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarSupportedContent');
    
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function() {
        if (window.innerWidth < 992) {
          // Bootstrap collapse method
          if (typeof bootstrap !== 'undefined') {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          } else {
            // Manual fallback if Bootstrap JS isn't available
            navbarCollapse.classList.remove('show');
            navbarToggler.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  });