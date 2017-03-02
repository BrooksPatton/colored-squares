/** Variable Declarations **/
// We need to get the section that holds all the colors
var colorsNode = document.querySelector('section.colors')

// Get the grid section so that we can later grab each cell
var gridNode = document.querySelector('section.grid')

// the white color is going to be selected by default so we need to grab it
var whiteNode = document.querySelector('section.colors .white')

// Lets set the default color to white
var currentColor = 'white'

/** Event Listeners **/
// Select the color that we want to paint with
colorsNode.addEventListener('click', function(event) {
  if(event.target.attributes['data-color']) {
    currentColor = event.target.attributes['data-color'].nodeValue
    removeSelectedBoxFromColors()
    event.target.classList.add('selected')
  }
})

// color the picture when we click the mouse button down
gridNode.addEventListener('click', function(event) {
  if(event.target.classList.contains('cell')) {
    removeOtherColors(event.target)
    event.target.classList.add(currentColor)
  }
})
// Paint while moving the mouse with the button down

/** Function Declarations **/
// Remove the other colors from the cell
function removeOtherColors(cell) {
  cell.classList.remove('red', 'blue', 'green', 'black', 'white', 'yellow', 'orange', 'lightgreen', 'indianred', 'hotpink', 'royalblue', 'brown')
}

// Remove the selected boxes from all of the color boxes
function removeSelectedBoxFromColors() {
  var cells = document.querySelectorAll('section.colors .cell')

  for(var i = 0; i < cells.length; i = i + 1) {
    cells[i].classList.remove('selected')
  }
}
/** Main logic **/
// Select the white color as it is the default
whiteNode.classList.add('selected')
