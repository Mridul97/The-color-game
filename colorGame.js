var numSquares = 6 ;
var colors ;
var pickedColor ;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.getElementById("message");
var resetBtn = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");

init();

function init(){
	reset();
	
	setUpModeButtons();
	setUpSquares();
	
	resetBtn.addEventListener("click",function(){
		reset();
	});
}

function setUpSquares(){
	for(var i = 0; i < squares.length ; i++)
	{
		//add click listeners to squares
		squares[i].addEventListener("click",function()
		{
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to picked color
			if(clickedColor === pickedColor)
			{
				displayMessage.textContent = "Correct!";
				changeColor(clickedColor);
				reset.textContent = "Play Again?";
				h1.style.backgroundColor = clickedColor ;
			}else{
				this.style.backgroundColor = "#232323";
				displayMessage.textContent = "Try Again";
			}
		})
	}
}

function setUpModeButtons(){
	for(var i = 0 ;i < modeButtons.length ; i++)
	{
		modeButtons[i].addEventListener("click" , function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy")
			{
				numSquares = 3;
			}else{
				numSquares = 6;
			}
			reset();
		})
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor ;

	for(var i = 0 ; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}

	this.textContent = "New Colors";
	displayMessage.textContent = "";
	h1.style.backgroundColor = "steelblue";
}


function changeColor(color){
	for(var i = 0 ; i < squares.length ; i++)
	{
		squares[i].style.backgroundColor = color ;
	}
}

function pickColor() {
	var index = Math.floor(Math.random()*colors.length);
	return colors[index];
}

function generateRandomColors(noOfColors) {
	var arr = [];
	for(var i = 0 ; i< noOfColors ; i++)
	{
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor(){
	var r = (Math.floor(Math.random()*256));
	var g = (Math.floor(Math.random()*256));
	var b = (Math.floor(Math.random()*256));
	return "rgb(" + r + ", " + g +", " + b +")"; 
}
