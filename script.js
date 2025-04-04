document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // CV Upload Display
  const cvUpload = document.getElementById('cv-upload');
  const fileName = document.getElementById('file-name');

  cvUpload.addEventListener('change', () => {
      if (cvUpload.files.length > 0) {
          fileName.textContent = cvUpload.files[0].name;
      } else {
          fileName.textContent = 'No file selected';
      }
  });

  // Form Submission (Simulated)
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('form-status');

  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validation
      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const message = contactForm.querySelector('textarea').value;

      if (!name || !email || !message) {
          formStatus.textContent = 'Please fill all required fields!';
          formStatus.className = 'error';
          return;
      }

      // Simulate form submission
      formStatus.textContent = 'Message sent successfully!';
      formStatus.className = 'success';

      // Reset form
      contactForm.reset();
      fileName.textContent = 'No file selected';

      // Hide status after 5 seconds
      setTimeout(() => {
          formStatus.style.display = 'none';
      }, 5000);
  });
});