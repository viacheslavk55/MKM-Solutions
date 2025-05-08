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
  // Update current year in footer
document.getElementById('displayYear').textContent = new Date().getFullYear();

var backToTopButton = document.getElementById("backToTop");
  
  // When the user scrolls down 300px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  backToTopButton.addEventListener("click", function() {
    // For a smooth scroll behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === "#") return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navbarCollapse = document.getElementById('navbarSupportedContent');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  });
});

// Add active class to navbar based on scroll position
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 200;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);
    
    if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.closest('.nav-item').classList.remove('active');
      });
      navLink.closest('.nav-item').classList.add('active');
    }
  });
});

// Form validation
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let valid = true;
    const formInputs = this.querySelectorAll('input, select, textarea');
    
    formInputs.forEach(input => {
      if (input.hasAttribute('required') && !input.value.trim()) {
        input.classList.add('is-invalid');
        valid = false;
      } else {
        input.classList.remove('is-invalid');
      }
      
      if (input.type === 'email' && input.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          input.classList.add('is-invalid');
          valid = false;
        }
      }
    });
    
    if (valid) {
      // Here you would normally send the form data to your server
      alert('Thank you! Your request has been submitted. We will contact you within 24 hours.');
      this.reset();
    }
  });
}