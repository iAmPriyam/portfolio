$(document).ready(function () {
  $('.hero-image-wrapper').tilt({
    maxTilt: 10
  })
})

window.onscroll = function () {
  showButton()
}

const btn = document.getElementById('scroll-btn')

function showButton() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    btn.style.display = 'block'
  } else {
    btn.style.display = 'none'
  }
}

function scrollToTop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

// const collapsableHeader = document.querySelectorAll('.exp-header')

// const toggleBoxState = (event) => {
//   console.log(event.target.className)
// }

// collapsableHeader.forEach((item) =>
//   item.addEventListener('click', toggleBoxState)
// )
