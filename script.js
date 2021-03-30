const cleanerDiv = document.getElementById("menu");
const menuButtons = cleanerDiv.children;


function menuHandler(element)

{
    switch(element.target.textContent) {
        case "Clear":
          clearGrid();
          break;
      } 
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
    /*
    elements.forEach(function (element){
        element.addEventListener('pointerenter', setElementBackground);
    })
    */
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
