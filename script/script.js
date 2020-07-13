

window.addEventListener('load', start)

let inputRange, inputText;
let boxColor;

function start() {

  loadElements()
  changeInputValues(inputRange[0], inputText[0])
  changeInputValues(inputRange[1], inputText[1])
  changeInputValues(inputRange[2], inputText[2])

  clearBox()

}

function loadElements() {

  inputRange = Array.from(document.querySelectorAll('input[type=range]'))
  inputText = Array.from(document.querySelectorAll('input[type=text]'))
  boxColor = document.querySelector('.boxColor')

}

function changeInputValues(inputRange, inputText) {
  inputRange.onchange = () => {

    inputText.value = inputRange.value

    changeColorBox()
  }
}

function changeColorBox() {

  boxColor.style.backgroundColor = `rgb(${inputRange[0].value}, ${inputRange[1].value}, ${inputRange[2].value});`

}


function clearBox() {

  inputText.forEach(element => element.value = 0)
  inputRange.forEach(element => element.value = 0)

  changeColorBox();
}