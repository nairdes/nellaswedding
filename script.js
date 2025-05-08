document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      // Hide all sections
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
      });
  
      // Show the selected section
      const target = this.getAttribute('data-section');
      document.getElementById(target).classList.add('active');
    });
  });
  