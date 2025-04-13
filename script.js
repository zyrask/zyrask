// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all the tabs
  const tabs = document.querySelectorAll('.tab');

  // Loop through each tab
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove 'active' class from all tabs and hide their content
      tabs.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.tab-content').style.display = 'none';
      });

      // Add 'active' class to clicked tab
      tab.classList.add('active');
      tab.querySelector('.tab-content').style.display = 'block'; // Show content of the clicked tab
    });
  });
});

// Scroll animations for content sections
const contentSections = document.querySelectorAll('.content-section');

const options = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-animation');
      observer.unobserve(entry.target);
    }
  });
}, options);

contentSections.forEach(section => {
  observer.observe(section);
});

// Social links hover animation
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    link.style.transform = 'scale(1.3)';
    link.style.transition = 'transform 0.3s';
  });

  link.addEventListener('mouseleave', function() {
    link.style.transform = 'scale(1)';
    link.style.transition = 'transform 0.3s';
  });
});

// Smooth scrolling to anchor links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 100, // Offset to avoid covering the element with fixed nav
      behavior: 'smooth',
    });
  });
});
