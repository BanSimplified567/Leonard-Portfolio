document.addEventListener('DOMContentLoaded', function () {
   const menuToggle = document.getElementById('menu-toggle');
   const sidebar = document.getElementById('sidebar');
   const mainContent = document.querySelector('.main-content');

   // Initialize sidebar state based on screen size
   function initializeSidebar() {
      if (window.innerWidth <= 768) {
         sidebar.classList.add('sidebar-hidden');
         mainContent.classList.add('main-content-full');
      }
   }

   // Call on page load
   initializeSidebar();

   // Toggle sidebar when menu button is clicked
   menuToggle.addEventListener('click', function () {
      sidebar.classList.toggle('sidebar-hidden');
      mainContent.classList.toggle('main-content-full');
   });

   // Handle window resize
   window.addEventListener('resize', function () {
      if (window.innerWidth <= 768) {
         if (!sidebar.classList.contains('sidebar-hidden')) {
            sidebar.classList.add('sidebar-hidden');
            mainContent.classList.add('main-content-full');
         }
      } else {
         // On larger screens, show sidebar by default
         sidebar.classList.remove('sidebar-hidden');
         mainContent.classList.remove('main-content-full');
      }
   });

   // Handle navigation link clicks (for mobile)
   const navLinks = document.querySelectorAll('.nav-links a');
   navLinks.forEach((link) => {
      link.addEventListener('click', function () {
         if (window.innerWidth <= 768) {
            sidebar.classList.add('sidebar-hidden');
            mainContent.classList.add('main-content-full');
         }
      });
   });
});
