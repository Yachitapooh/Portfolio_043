// window.onload = pageLoad;

// function pageLoad()
// {
// 	var startButton = document.getElementById('start');
// 	startButton.onclick = startGame;
// }

// function startGame()
// {
// 	var boxValue = document.getElementById('numbox');
// 	console.log(boxValue.value);

// 	if(boxValue.value >=1)
// 	{
// 		addBox();
// 		timeStart();
// 		alert("Ready");
// 	}
// 	else
// 	{
// 		alert("Invalid value input, Please try again!");
// 		boxValue.value = "";
// 	}
// }

// function timeStart()
// {
// 	toggleStartButton();
// 	var TIMER_TICK = 1000;
// 	var timer = null;
// 	var min = 0.5; // 0.5 minute
// 	var second = min*60; 
// 	var x = document.getElementById('clock');
// 	var timer = document.getElementById('clock').value;
// 	//setting timer using setInterval function
// 	// timer = setInterval(timeCount, TIMER_TICK);
// 	var difficulty = document.getElementById('difficulty').value;
// 	timer = difficulty;

// 	var timer_interval = setInterval(timeCount,TIMER_TICK);
	
// 	function timeCount()
// 	{
// 		var allbox = document.querySelectorAll("#game-layer div");
// 		timer = timer - 1;
// 		x.innerHTML = timer;
// 		if(timer <= -1 && allbox.length >=1)
// 		{
// 			alert ("Game Over !!");
// 			clearInterval(timer_interval);
// 			clearScreen();
// 		}
// 		else if(timer > 0 && allbox.length == 0)
// 		{
// 			alert ("You Win !!");
// 			clearInterval(timer_interval);
// 			clearScreen();
// 		}
// 		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
// 		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
// 		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
// 	}
// }

// function addBox()
// {
// 	// สร้างกล่องตาม input ที่เราใส่ 
// 	var numbox = document.getElementById('numbox').value;
// 	var gameLayer = document.getElementById('game-layer');  //.value;
// 	var colorDrop = document.getElementById('color').value;
// 	var score = document.getElementById('score');
// 	score.value = 0;

// 	for (var i =0; i<numbox;i++)
// 	{
// 		var tempbox = document.createElement('div');
// 		tempbox.classList.add ('square' , colorDrop);
// 		tempbox.id = "box"+i;
// 		tempbox.style.left = Math.random() * (500 - 25) + "px";
// 		tempbox.style.top = Math.random() * (500 - 25) + "px";
// 		//add element to HTML node
// 		gameLayer.aapendChild(tempbox);
// 		bindBox(tempbox,score);
// 	}
// }

// function bindBox(box, score)
// {
// 	//เมื่อกดแล้ว กล่องจะหายไป
// 	box.onclick = function()
// 	{
// 		box.parentNode.removeChild(box);
// 		score.value += 1000;
// 		console.log(score);
// 	}
// }

// function clearScreen()
// {
// 	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
// 	var allbox = document.querySelectorAll("#game-layer div");

// 	//delete all  div
// 	for (var i=0;i<allbox.length;i++)
// 	{
// 		var tempbox = document.getElementById('box' + i);
// 		tempbox.parentNode.removeChild(tempbox);
// 	}
// 	location.reload();
// }

// function toggleStartButton()
// {
// 	var startButton = document.getElementById('start');
// 	startButton.style.display = 'none';
// }

// function resetButton()
// {
// 	resetButton.onclick = location.reload();
// }



window.onload = pageLoad;

function pageLoad()
{
    var startButton = document.getElementById('start');
    startButton.onclick = startGame;
}

function startGame()
{
    var boxValue = document.getElementById("numbox")
    console.log(boxValue.value);

    if(boxValue.value >= 1)
	{
        alert("Ready");
        addBox();
        timeStart();
    }
    else
	{
        alert("Invalid value input , Please try again");
        boxValue.value = "";
    }

}

function timeStart()
{
    toggleStartButton();
    var TIMER_TICK = 1000;
    var timer = null;
    var min = 0.5; // 0.5 minute
    var second = min*60; 
    var x = document.getElementById('clock');
    var timer = document.getElementById('clock').value;
	var timer = second;
    //setting timer using setInterval function

    // var difficulty = document.getElementById('difficulty').value;
    // timer = difficulty;

    var timer_interval = setInterval(timeCount , TIMER_TICK);

    function timeCount()
	{
        var allbox = document.querySelectorAll("#game-layer div");
		x.innerHTML = timer;
        timer = timer - 1;
        //
        
        if(timer <= -1 && allbox.length >= 1 )
		{
            alert("Game Over !!");
            clearInterval(timer_interval);
            clearScreen();
        }else if(timer > 0 && allbox.length == 0)
		{
            alert("You win !!");
            clearInterval(timer_interval);
            clearScreen();
        }
        // จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
        // ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
        // ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
    }
}
function addBox()
{
    // สร้างกล่องตาม input ที่เราใส่ 
    var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById('game-layer');
    var colorDrop = document.getElementById('color').value;
    // var score = document.getElementById("score");
    // score.value = 0;

    for (var i =0; i<numbox;i++)
	{
        var tempbox = document.createElement('div');
        tempbox.classList.add('square', colorDrop);
        tempbox.id = "box"+i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        //add element to HTML node
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box)
{
    //เมื่อกดแล้ว กล่องจะหายไป
    box.onclick = function()
	{
        box.parentNode.removeChild(box);
        score.value +=  1000;
        console.log(score);
    }
}

function clearScreen()
{
    //ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
    var allbox = document.querySelectorAll("#game-layer div");

    //delete all  div
    for (var i=0;i<allbox.length;i++)
	{
        var tempbox = document.getElementById('box' + i);
        tempbox.parentNode.removeChild(tempbox);
    }

    location.reload();
}

function toggleStartButton() 
{
    var startButton = document.getElementById('start');
    startButton.style.display = 'none';
}

function resetButton()
{
    resetButton.onclick = location.reload();
}



