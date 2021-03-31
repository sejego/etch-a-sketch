const cleanerDiv = document.getElementById("menu");
const menuButtons = cleanerDiv.children;
const mainBoxSize = 680;

function menuHandler(element)
{
    switch(element.target.textContent) {
        case "Clear":
          clearGrid();
          break;
        case "Grid size":
            changeSize();
      } 
}

function changeSize()
{
    var size = prompt("Enter the size from 1 to 64")
            if (size !== null) {
                size = parseInt(size);
                if (size < 1 || size > 64 || Number.isNaN(size)) {
                    alert("Enter a number from 1-64 range");
                    changeSize();
                }else{
                    setGrid(size);
                }
            }else{
                alert("Enter a number from 1-64 range");
                changeSize()
            }
}

function setGrid(gridSize)
{
    mainDiv.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    mainDiv.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    var sizeX = gridSize*gridSize;
    sideSize = Math.sqrt((mainBoxSize*mainBoxSize)/sizeX) - 2;
    regenerateCells(mainDiv, sizeX, sideSize);
}

function regenerateCells(parent, newCellsNumber, cellSize)
{
    let divArr = [];
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for(i=0;i<newCellsNumber;i++){
        divArr[i] = document.createElement('div');
        divArr[i].classList.add('box');
    }
    appendChildren(mainDiv, divArr);
    sideSizePx = cellSize.toString()+'px';
    for(i=0;i<mainDiv.children.length;i++)
    {
        mainDiv.children[i].style.width = sideSizePx;
        mainDiv.children[i].style.height = sideSizePx;
    }
    addHoverListeners(mainDiv.children);
}

function clearGrid()
{
    for(i=0;i<mainDiv.children.length;i++)
    {
        mainDiv.children[i].style.backgroundColor = 'white';
    }
}

function addClickListeners(elements)
{
    for(i=0; i<elements.length; i++)
    {
        elements[i].addEventListener('click', menuHandler);
    }
}

function appendChildren(parent, children)
{
    children.forEach(function (child){
        parent.appendChild(child);
    })
}

function addHoverListeners(elements)
{
   for(i=0; i< elements.length; i++)
   {
       elements[i].addEventListener('pointerenter',setElementBackground);
   }
}

function setElementBackground(element){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.target.style.backgroundColor = "#" + randomColor;
    //console.log(element.target);
}

let mainDiv = document.getElementById("main-div");
let arrLength = 400;
let divArr = [];
for(i=0; i<arrLength; i++)
{
    divArr[i] = document.createElement('div');
    divArr[i].classList.add('box');
}
appendChildren(mainDiv, divArr);
addHoverListeners(mainDiv.children);
addClickListeners(menuButtons);
/* Set initial Grid*/
setGrid(20);