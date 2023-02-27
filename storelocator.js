const primaryNav = document.querySelector('.nav__list');
const navToggle = document.querySelector('.mobile-nav-toggle');


navToggle.addEventListener("click", () => {
    const visible = primaryNav.getAttribute('data-visible');
    if(visible === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
    }
    else if(visible === 'true') {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

let currentIdx = -1;

const items = document.querySelectorAll(".footer-section__title");
const remove = () => {
  items.forEach(el => {
    const parent = el.parentNode;
    parent.classList.remove('active');
  })
}
const  toggleAccordion  = (el,idx) => {
  if(idx === currentIdx){
    remove();
    currentIdx = -1;
  }
  else{
    remove()
    el.parentNode.classList.toggle('active');
    currentIdx = idx;
  }
}

items.forEach((item, index)=> item.addEventListener('click', () => toggleAccordion(item, index)));