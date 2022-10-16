const open_btn = document.getElementById('menu-btn-open')
const close_btn = document.getElementById('menu-btn-close')
const nav = document.getElementById('menu')

open_btn.addEventListener('click', () => {
  nav.classList.toggle('hidden')
  close_btn.classList.remove('hidden')
  open_btn.classList.add('hidden')
})

close_btn.addEventListener('click', () => {
  nav.classList.toggle('hidden')
  close_btn.classList.add('hidden')
  open_btn.classList.remove('hidden')
})

const search_btn = document.getElementById('search-btn');
const search_bar = document.getElementById('search-bar');

search_btn.addEventListener('click', () => {
  search_bar.classList.toggle('hidden');
})

// const body = document.body;
// let lastScroll = 0;

// window.addEventListener('scroll', () => {
//   const currentScroll = window.pageYOffset;

//   if (currentScroll <= 0){
//     body.classList.remove("scroll-up");
//   }

//   if (currentScroll > lastScroll && !body.classList.contains("scroll-down")){
//     body.classList.remove("scroll-up");
//     body.classList.add("scroll-down");
//   }

//   if (currentScroll < lastScroll && body.classList.contains("scroll-down")){
//     body.classList.remove("scroll-down");
//     body.classList.add("scroll-up");
//   }

//   lastScroll = currentScroll;
// })

const scrollable = document.querySelector('scrollable');

let current = 0;
let target = 0;