// main.js — client behavior for Blogs Project
document.addEventListener('DOMContentLoaded', ()=>{
  const input = document.getElementById('search');
  const posts = Array.from(document.querySelectorAll('#posts .card'));
  if(!input) return;
  input.addEventListener('input', ()=>{
    const q = input.value.trim().toLowerCase();
    posts.forEach(p=>{
      const title = (p.dataset.title || '').toLowerCase();
      p.style.display = q && !title.includes(q) ? 'none' : '';
    })
  });

  // Accessibility: focus first card when user presses Enter in search with exact match
  input.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
      const q = input.value.trim().toLowerCase();
      const match = posts.find(p=> (p.dataset.title||'').toLowerCase().includes(q));
      if(match){
        match.querySelector('h3')?.focus();
      }
    }
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const headerInner = document.querySelector('.header-inner');
  if(navToggle && headerInner){
    navToggle.addEventListener('click', ()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      headerInner.classList.toggle('nav-open');
    });
  }
});
