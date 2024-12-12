window.addEventListener('scroll', function() {
    const body = document.body;
        if (window.scrollY > 50) { 
             body.classList.add('scroll-effect');
 } else {
          body.classList.remove('scroll-effect');
   } });