const content = document.querySelector('#content')
const items = document.querySelector('#items')
const output = document.querySelector('#output')
const copy = document.querySelector('#copy')

const options = [
  [$('#direction'), 'flexDirection'],
  [$('#wrap'), 'flexWrap'],
  [$('#justify'), 'justifyContent'],
  [$('#align'), 'alignItems']
]

items.addEventListener('change', function () {
  while (content.firstChild) {
    content.removeChild(content.firstChild)
  }

  for (let index = 0; index < this.value; index++) {
    let item = document.createElement('div')
    item.classList.add('element')
    item.textContent = (index + 1).toString()
    
    content.appendChild(item)
  }
})

options.forEach((option, optionIndex) => {
  option[0].addEventListener('change', function () {
    content.style[option[1]] = this.value

    output.textContent = content.style.cssText.replace(/; /g, ';\n')

    output.classList.remove('prettyprinted')
    PR.prettyPrint()
  })
})

copy.addEventListener('click', function () {
  copy_to_clipboard(output)

  this.classList.add('success')

  setTimeout(() => {
    window.getSelection().removeAllRanges()
    this.classList.remove('success')
  }, 120)
})

function $ (query) {
  return document.querySelector(query)
}

function copy_to_clipboard (element) {
  var range = document.createRange()
  range.selectNodeContents(element)
  var sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)

  document.execCommand('copy')
}