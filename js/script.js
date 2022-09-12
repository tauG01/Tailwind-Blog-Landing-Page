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
