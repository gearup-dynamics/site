// Use a combined container for all testimonial content
    const container = document.getElementById('testimonial-container');
    const textEl = document.getElementById("testimonial-text");
    const authorEl = document.getElementById("testimonial-author");
    const starsEl = document.getElementById("testimonial-stars");

    let testimonials = [];
    let current = 0;

    function renderTestimonial(data) {
      let stars = "★".repeat(data.stars) + "☆".repeat(5 - data.stars);
      textEl.textContent = `“${data.quote}”`;
      authorEl.textContent = `– ${data.author} on ${data.platform}`;
      starsEl.textContent = stars;
    }

    function updateTestimonial() {
      container.classList.remove('active');
      setTimeout(() => {
        current = (current + 1) % testimonials.length;
        renderTestimonial(testimonials[current]);
        container.classList.add('active');
      }, 600); // match the transition time in CSS
    }

    fetch('/data/testimonials.json')
      .then(res => res.json())
      .then(data => {
        testimonials = data;
        renderTestimonial(testimonials[0]);
        container.classList.add('active');
        setInterval(updateTestimonial, 3000);
      });