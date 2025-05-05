// Add this script at the end of your HTML file, before the closing </body> tag
document.addEventListener('DOMContentLoaded', function() {
  // Find all carousels
  const carousels = document.querySelectorAll('.carousel');
  
  // Initialize each carousel
  carousels.forEach(function(carousel) {
    initCarousel(carousel);
  });
  
  function initCarousel(carousel) {
    let currentSlide = 0;
    const slides = carousel.querySelectorAll('.slide');
    const dots = carousel.querySelectorAll('.dot');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const totalSlides = slides.length;
    
    // Set up event listeners for this specific carousel
    prevBtn.addEventListener('click', function() {
      changeSlide(-1);
    });
    
    nextBtn.addEventListener('click', function() {
      changeSlide(1);
    });
    
    // Add click events to dots
    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        goToSlide(index);
      });
    });
    
    // Change slide function for this carousel
    function changeSlide(direction) {
      currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
      updateSlides();
    }
    
    // Go to specific slide
    function goToSlide(index) {
      currentSlide = index;
      updateSlides();
    }
    
    // Update the slides display
    function updateSlides() {
      // Hide all slides
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      
      // Hide all active dots
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      
      // Show the current slide and dot
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }
    
    // Auto-advance slides every 5 seconds for this carousel
    const interval = setInterval(function() {
      changeSlide(1);
    }, 5000);
    
    // Clear interval if user leaves the page
    window.addEventListener('beforeunload', function() {
      clearInterval(interval);
    });
  }
});
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

// Initialize testimonial carousel
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
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