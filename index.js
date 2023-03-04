$('.owl-carousel').owlCarousel({
  items:1,
  loop:true,
  margin:0,
  autoplay:true,
  autoplayTimeout:5000,
});


const header = document.querySelector("header");
const navToggle = document.querySelector('.mobile-nav-toggle');
const sectionOne = document.querySelector(".home-intro");
const navDiv = document.querySelector(".drawer-full-width")

const sectionOneOptions = {
  rootMargin: "-300px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      navToggle.classList.add("nav-scrolled-for-button");
    } else {
      header.classList.remove("nav-scrolled");
      navToggle.classList.remove("nav-scrolled-for-button");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


const primaryNav = document.querySelector('.nav__list');


navToggle.addEventListener("click", () => {
    const visible = primaryNav.getAttribute('data-visible');
    if(visible === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
        navDiv.setAttribute('nav-expanded', 'true');
    }
    else if(visible === 'true') {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
        navDiv.setAttribute('nav-expanded', 'false');
    }
});

let currentIdx = -1;

const items = document.querySelectorAll(".footer-section__title");

const navItems = document.querySelectorAll(".nav__link");
const remove = () => {
  items.forEach(el => {
    const parent = el.parentNode;
    parent.classList.remove('active');
  })
}
const removeNav = () => {
  navItems.forEach(el => {
    const parent = el.parentNode;
    parent.classList.remove('active');
  })
}
const  toggleAccordion  = (el, idx) => {
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

let currentNavIdx = -1;

const  toggleNavAccordion  = (el, idx) => {
  if(idx === currentNavIdx){
    removeNav();
    currentNavIdx = -1;
  }
  else{
    removeNav()
    el.parentNode.classList.toggle('active');
    currentNavIdx = idx;
  }
}

items.forEach((item, index)=> item.addEventListener('click', () => toggleAccordion(item, index)));

navItems.forEach((item, index)=> item.addEventListener('click', () => toggleNavAccordion(item, index)));







