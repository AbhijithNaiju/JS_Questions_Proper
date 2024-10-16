var printLocation;
var printValue;

function printOutput(printLocation,printValue)
{
	document.getElementById(printLocation).innerHTML = printValue;
}
function checkIsEmpty(checkValue)
{
	if(checkValue.trim().length==0)
	{
		return false;
	}	
	else
	{ 
		return true;
	}
}


// Qn2
function addTwoNum()
{
	let NumberOne=document.getElementById("NumberOne").value;
	let NumberTwo=document.getElementById("NumberTwo").value;
	if(checkIsEmpty(NumberOne) && checkIsEmpty(NumberTwo))
	{
		printOutput("answerTwo",Number(NumberOne)+Number(NumberTwo));
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}
