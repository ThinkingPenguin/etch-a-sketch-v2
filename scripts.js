const size = 16;
const btnBlack = document.querySelector('.black-btn');
const btnRainbow = document.querySelector('.rainbow-color');
const btnClear = document.querySelector('.clear');

function buildGrid(sizeSquare) {
    let container = document.querySelector('.container');
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    
    for (let i = 0; i < sizeSquare; i++) {
        for (let j = 0; j < sizeSquare; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.boxSizing = "border-box"
            square.style.border = '1px black solid';
            square.style.height = `${containerHeight / size}px`;
            square.style.width = `${containerWidth / size}px`;
            container.appendChild(square);
            btnBlack.addEventListener('click', drawBlack);
            btnRainbow.addEventListener('click', drawRainbow);
            btnClear.addEventListener('click', clearGrid);
        }   
    }
    
    
}

function drawBlack(){
	let items = [...document.querySelectorAll('.square')];
	let changeColor = false;
    items.forEach(item => {
  	    item.addEventListener('mousedown',() => {
    	    item.style.backgroundColor = "black";
            changeColor = true;
    });
    item.addEventListener('mouseup', () => {
    	changeColor=false;
    });
    
    item.addEventListener('mouseover', () => {
    	if(changeColor){
      	item.style.backgroundColor = "black";
      }
    });
    
  });	
}

function randColors() {
    let hexaColor = "0123456789ABCDEF"
    let hashTag = "#"
    let colOp = "";
    for (let i = 0; i < 6; i++) {
        colOp += hexaColor[Math.floor(Math.random() * 16)];
    };
    let newColor = hashTag + colOp;
    console.log(newColor);
    return newColor;

}

function drawRainbow(){
  let items = [...document.querySelectorAll('.square')];
  let changeColor = false;

  items.forEach((item) => {
  	item.addEventListener('mousedown',() => {
      item.style.backgroundColor = randColors();
      changeColor = true;
    });
    
    item.addEventListener('mouseup', () => {
    	changeColor=false;
    });
    
    item.addEventListener('mouseover', () => {
    	if(changeColor){
      	item.style.backgroundColor = randColors();
      }
    });
    
  });	

}

function clearGrid() {
    let elements = document.getElementsByClassName('square');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "";
        
    }
    
}
 
buildGrid(size);
