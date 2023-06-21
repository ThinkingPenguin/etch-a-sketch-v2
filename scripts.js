const btnGrid = document.querySelector('.ask-user');
const btnBlack = document.querySelector('.black-btn');
const btnRainbow = document.querySelector('.rainbow-color');
const btnClear = document.querySelector('.clear');
const btnDarken = document.querySelector('.darkening');
let penType = "shade";
let size = 0;

function setGrid() {
  btnGrid.addEventListener('click', () => {
  let size = parseInt(prompt("Enter size number:"));
  if (size > 100) {
    alert("You can't choose value superior to 100. Default value applied")
    size = 16;
  }
  let container = document.querySelector('.container');
  container.textContent = "";
  buildGrid(size);
  return size;
});
}


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
            square.style.height = `${containerHeight / sizeSquare}px`;
            square.style.width = `${containerWidth / sizeSquare}px`;
            container.appendChild(square);
            btnBlack.addEventListener('click', drawBlack);
            btnRainbow.addEventListener('click', drawRainbow);
            btnClear.addEventListener('click', clearGrid);
            btnDarken.addEventListener('click', darkenGrid);
        }   
    }
    
    
}

function killOpacity(item){
  //console.log(penType)
  if (penType == 'black') { // turns cell black
    item.classList.remove('shade');
    item.style.backgroundColor = '#101010';
    item.style.opacity = '1';
    //console.log('Make cell black');
  } 

  else if (penType == "rainbow"){
    item.classList.remove('shade');
    item.style.backgroundColor = randColors();
    item.style.opacity = '1';
    //console.log('Make cell rainbow')
  }

  else if (penType == "clear"){
    item.classList.remove('shade');
    item.style.backgroundColor = 'white';
    item.style.opacity = '';
  }

  else if (penType == 'shade') { // turns cell 0.1
    let opacity = item.style.opacity;
    if (item.classList.contains("shade")) {
      item.style.opacity = (Number(opacity) + 0.1);
      //console.log('If there is shade, increase opacity.')
    } 
    
    else {
      item.classList.add('shade');
      item.style.backgroundColor = '#101010';
      item.style.opacity = (parseFloat(item.style.opacity) || 0) + 0.2;
      //console.log('Else, add shade class.')
    }
  }

  
}

function drawBlack(){
	let items = [...document.querySelectorAll('.square')];
	let changeColor = false;
  penType = 'black';
    items.forEach(item => {
  	    item.addEventListener('mousedown',() => {
          killOpacity(item);
    	    //item.style.backgroundColor = "black";
          changeColor = true;
    });
    item.addEventListener('mouseup', () => {
    	changeColor=false;
    });
    
    item.addEventListener('mouseover', () => {
    	if(changeColor){
        killOpacity(item);
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
    //console.log(newColor);
    return newColor;

}

function drawRainbow(){
  let items = [...document.querySelectorAll('.square')];
  let changeColor = false;
  penType = 'rainbow';

  items.forEach((item) => {
  	item.addEventListener('mousedown',() => {
      killOpacity(item);
      changeColor = true;
    });
    
    item.addEventListener('mouseup', () => {
    	changeColor=false;
    });
    
    item.addEventListener('mouseover', () => {
    	if(changeColor){
        killOpacity(item);
      }
    });
    
  });	

}

function clearGrid() {
  penType = 'clear';
  let items = [...document.querySelectorAll('.square')];
  items.forEach(item => {
    killOpacity(item);
  });

}

function darkenGrid(){
	let items = [...document.querySelectorAll('.square')];
	let changeColor = false;
  penType = 'shade';
    items.forEach(item => {
  	    item.addEventListener('mousedown',() => {
          killOpacity(item);
          changeColor = true;
    });
    item.addEventListener('mouseup', () => {
    	changeColor=false;
    });
    
    item.addEventListener('mouseover', () => {
    	if(changeColor){
        killOpacity(item);
      }
    });
    
  });	
}

setGrid()
