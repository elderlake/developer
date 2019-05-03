document.addEventListener('scroll', function () {
  var _nav = document.querySelector("#nav")

  if (window.scrollY > _nav.offsetHeight) {
    _nav.classList.add('scrolled')
  } else {
    _nav.classList.remove('scrolled')
  }
})

let codes = document.getElementsByTagName('pre')

for (let index = 0; index < codes.length; index++) {
  codes[index].innerHTML = codes[index].innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}