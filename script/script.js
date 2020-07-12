window.addEventListener('load', start)

let inputRange, inputText, boxColor;

function start() {

  loadElements()
  changeInputValues(inputRange, inputText)
  clearBox()

}

function loadElements() {

  inputRange = Array.from(document.querySelectorAll('input[type=range]'))
  inputText = Array.from(document.querySelectorAll('input[type=text]'))
  boxColor = document.querySelector('.boxColor')

}

function changeInputValues(inputRange, inputText) {
  inputRange.forEach(element => element.onchange = e => {
      let value = e.target.value

      if (e.target == inputRange[0]) {
        inputText[0].value = value
      } else if (e.target == inputRange[1]) {
        inputText[1].value = value
      } else {
        inputText[2].value = value
      }
      
      changeColorBox()

    })
  
}

function changeColorBox() {

  boxColor.style.backgroundColor = `rgb(${inputRange[0].value}, ${inputRange[1].value}, ${inputRange[2].value});`
  
}


function clearBox() {

  inputText.forEach(element => element.value = 0)
  inputRange.forEach(element => element.value = 0)

  changeColorBox();
}