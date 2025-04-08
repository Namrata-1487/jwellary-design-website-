 

var navLinks = document.querySelectorAll('.nav-link');


   navLinks.forEach(link => 
{
    link.addEventListener('click', (e) => {
     e.preventDefault();
     const targetId = link.getAttribute('href');
     const targetSection = document.querySelector(targetId);

     if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70; // Adjust for navbar height
      window.scrollTo({
       top: offsetTop,
       behavior: 'smooth'
      });

      // Highlight the section briefly
      targetSection.classList.add('section-highlight');
      setTimeout(() => {
       targetSection.classList.remove('section-highlight');
      }, 1000);
     }
    });
   });
