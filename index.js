// document.getElementById("rules").style.color = "red";

var your_choise = 0;
var house_choise = 0;
var your_score = 0;
var flag = false;

display_result(0);

function openRules()
{
    var over = document.getElementsByClassName("hidden_overlay")[0];
    over.className = "overlay";
}
function closeRules()
{
    var over = document.getElementsByClassName("overlay")[0];
    over.className = "hidden_overlay";
}


function choseRock()
{
	setRock();
	setTimeout(function(){houseChoise();},1000);
	setTimeout(function(){result();},2000);
	
}
function setRock()
{
	your_choise = 1;
	var div1 = document.getElementById("btm");
	div1.className = "hidden_bottom";

	var div2 = document.getElementById("second_bottom");
	div2.className = "not_hidden";

	document.getElementById("your_choise").className = "rock_2";
}

function chosePaper()
{
	setPaper();
	setTimeout(function(){houseChoise();},1000);
	setTimeout(function(){result();},2000);
}

function setPaper()
{
   your_choise = 2;
   var div1 = document.getElementById("btm");
   div1.className = "hidden_bottom";

   var div2 = document.getElementById("second_bottom");
   div2.className = "not_hidden";

   document.getElementById("your_choise").className = "paper_2";
}

function choseScissors()
{
	setScissors();
    setTimeout(function(){houseChoise();},1000);
    setTimeout(function(){result();},2000);

}

function setScissors()
{
	your_choise = 3;
	var div1 = document.getElementById("btm");
	div1.className = "hidden_bottom";

	var div2 = document.getElementById("second_bottom");
	div2.className = "not_hidden";

	document.getElementById("your_choise").className = "scissor_2";
}

function houseChoise()
{
  house_choise = 1+(Math.floor(Math.random()*3));
  // alert(house_choise);
  if(house_choise == 1)
  {
  	document.getElementById("house_choise").className = "rock_2";
  }
  else if(house_choise == 2)
  {
  	document.getElementById("house_choise").className = "paper_2";
  }
  else
  {
  	document.getElementById("house_choise").className = "scissor_2";
  }
}

function result()
{
	if(your_choise == house_choise)
	{
		document.getElementById("second_bottom").className = "not_hidden_2";
		document.getElementById("result").className = "resultClass";
		document.getElementById("result_text").innerHTML = "DRAW!!";
	}
	else if(your_choise == 1 && house_choise == 2)
	{
		document.getElementById("second_bottom").className = "not_hidden_2";
		document.getElementById("result").className = "resultClass";
		document.getElementById("result_text").innerHTML = "YOU LOSE";
		document.getElementById("house_choise").className = "paper_3";
		your_score--;
		display_result(your_score);
	}
	else if(your_choise == 1 && house_choise == 3)
	{
		document.getElementById("second_bottom").className = "not_hidden_2";
		document.getElementById("result").className = "resultClass";
		document.getElementById("result_text").innerHTML = "YOU WIN";
		document.getElementById("your_choise").className = "rock_3";
		your_score++;
	    display_result(your_score);
	}
	else if(your_choise == 2 && house_choise == 1)
	{
		document.getElementById("second_bottom").className = "not_hidden_2";
		document.getElementById("result").className = "resultClass";
		document.getElementById("result_text").innerHTML = "YOU WIN";
		document.getElementById("your_choise").className = "paper_3";
		your_score++;
		display_result(your_score);
	}
	else if(your_choise == 2 && house_choise == 3)
	{
		document.getElementById("second_bottom").className = "not_hidden_2";
		document.getElementById("result").className = "resultClass";
		document.getElementById("result_text").innerHTML = "YOU LOSE";
		document.getElementById("house_choise").className = "scissor_3";
		your_score--;
		display_result(your_score);
	}
	else if(your_choise == 3 && house_choise == 2)
	{
		document.getElementById("second_bottom").className = "not_hidden_2";
		document.getElementById("result").className = "resultClass";
		document.getElementById("result_text").innerHTML = "YOU WIN";
		document.getElementById("your_choise").className = "scissor_3";
		your_score++;
		display_result(your_score);
	}
	else if(your_choise == 3 && house_choise == 1)
	{
		document.getElementById("second_bottom").className = "not_hidden_2";
		document.getElementById("result").className = "resultClass";
		document.getElementById("result_text").innerHTML = "YOU LOSE";
		document.getElementById("house_choise").className = "rock_3";
		your_score--;
		display_result(your_score);
	}
}

function play_again()
{
   document.getElementById("btm").className = "bottom";
   document.getElementById("second_bottom").className = "hidden";
   document.getElementById("result").className = "hidden_result";
   document.getElementById("house_choise").className = "blank"
}

function display_result( val )
{
  document.getElementsByClassName("span2")[0].innerHTML = val;
}