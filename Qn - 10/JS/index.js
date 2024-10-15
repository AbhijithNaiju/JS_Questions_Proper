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


// Qn10
function evenOrOdd()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	if(numberOne%2==0)
	{
		printOutput("answerEvenOrOdd","Even");	
	}
	else
	{
		printOutput("answerEvenOrOdd","Odd");
	}
}
