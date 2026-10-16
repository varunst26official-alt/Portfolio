// Picto White Theme Interactive JavaScript for Varun ST

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Project Portfolio Category Filter (Light Theme Classes)
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-item-card');

  if (projectFilterBtns.length > 0) {
    projectFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle button active styling
        projectFilterBtns.forEach(b => {
          b.classList.remove('active', 'bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-600/20');
          b.classList.add('bg-slate-100', 'border', 'border-slate-200', 'text-slate-600');
        });
        btn.classList.add('active', 'bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-600/20');
        btn.classList.remove('bg-slate-100', 'border', 'border-slate-200', 'text-slate-600');

        const filterValue = btn.getAttribute('data-project-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-project-category');
          if (filterValue === 'all' || category === filterValue) {
            card.classList.remove('hidden-card');
          } else {
            card.classList.add('hidden-card');
          }
        });
      });
    });
  }

  // 3. Scroll Spy for Active Navigation
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#navbar nav a.nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active', 'text-indigo-600');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active', 'text-indigo-600');
      }
    });
  });
});
