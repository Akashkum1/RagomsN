const header = document.querySelector("header");
const navToggle = document.querySelector('.mobile-nav-toggle');
const sectionOne = document.querySelector(".home-intro");
const navDiv = document.querySelector(".drawer-full-width")

const sectionOneOptions = {
  rootMargin: "-400px 0px 0px 0px"
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

const carousel = document.querySelector('.home-intro');
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const pagination = document.querySelector('.carousel-pagination');
const time = 6000

let currentIndex = 0;
let slideInterval = setInterval(nextSlide, time);

function createPaginationButton(index) {
  const button = document.createElement('button');
  button.classList.add('carousel-pagination-button');
  if (index === 0) {
    button.classList.add('active');
  }
  button.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
  return button;
}

for (let i = 0; i < carouselItems.length; i++) {
  const button = createPaginationButton(i);
  pagination.appendChild(button);
}


function nextSlide() {
  currentIndex+=1;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  currentIndex-=1;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length-1;
  }
  updateCarousel();
}

function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
  const paginationButtons = document.querySelectorAll('.carousel-pagination-button');
  paginationButtons.forEach((button, index) => {
    if (index === currentIndex) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

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







