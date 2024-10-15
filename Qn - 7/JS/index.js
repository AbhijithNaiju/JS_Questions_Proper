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

// Qn7
function areaOfCircle()
{
	const pi=3.14;
	let radius=document.getElementById("radius").value;
	printOutput("answerCircleArea",pi*Number(radius)**2);
}
