// Toggle sidebar functionality
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

menuToggle.addEventListener('click', function () {
   sidebar.classList.toggle('sidebar-hidden');
   mainContent.classList.toggle('main-content-full');
});

// Close sidebar automatically on smaller screens when a link is clicked
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
   link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
         sidebar.classList.add('sidebar-hidden');
         mainContent.classList.add('main-content-full');
      }
   });
});

// Set active link based on scroll position
window.addEventListener('scroll', function () {
   const sections = document.querySelectorAll('.section');
   const navLinks = document.querySelectorAll('.nav-links a');

   let current = '';

   sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
         current = section.getAttribute('id');
      }
   });

   navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
         link.classList.add('active');
      }
   });
});

// Check window width on load and resize
function checkWidth() {
   if (window.innerWidth <= 768) {
      sidebar.classList.add('sidebar-hidden');
      mainContent.classList.add('main-content-full');
   } else {
      sidebar.classList.remove('sidebar-hidden');
      mainContent.classList.remove('main-content-full');
   }
}

window.addEventListener('load', checkWidth);
window.addEventListener('resize', checkWidth);
