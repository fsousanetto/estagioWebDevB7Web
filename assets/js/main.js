const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const bar = document.querySelector('bar')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#premium .image, #premium h1, #premium p, #premium .small, #premium .button,
   #download h1, #download p, #download .button`,
  { interval: 150 }
)
