// Toggle nav menu for mobile
document.getElementById('hamburger').addEventListener('click', function () {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show');
});

// Section switching
document.querySelectorAll('.clickable_nav').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });

    // Show the selected section
    const target = this.getAttribute('data-section');
    document.getElementById(target).classList.add('active');

    // Hide mobile nav if open
    document.getElementById('nav-menu').classList.remove('show');
  });
});
