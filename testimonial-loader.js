document.addEventListener('DOMContentLoaded', function() {
    // Fetch the testimonials JSON data
    fetch('data/testimonials.json')
      .then(response => response.json())
      .then(data => {
        loadTestimonials(data.testimonials);
        
        // Initialize Owl Carousel after loading testimonials
        initializeCarousel();
      })
      .catch(error => console.error('Error loading testimonials:', error));
  });
  
  function loadTestimonials(testimonials) {
    const carouselContainer = document.querySelector('.owl-carousel');
    
    // Clear any existing content
    carouselContainer.innerHTML = '';
    
    // Add each testimonial to the carousel
    testimonials.forEach(testimonial => {
      const testimonialHTML = `
        <div class="item">
          <div class="testimonial_box">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <div class="img-box">
              <img src="${testimonial.image}" alt="${testimonial.name}" />
            </div>
            <h5>${testimonial.name}</h5>   
            <span>${testimonial.project}</span>
            <div class="testimonial-content">
              <p>"${testimonial.testimonial}"</p>
              <span>${testimonial.date}</span>
            </div>
          </div>
        </div>
      `;
      
      carouselContainer.innerHTML += testimonialHTML;
    });
  }
  
  function initializeCarousel() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
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
  }