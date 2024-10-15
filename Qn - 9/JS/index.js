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

// Qn9
function cubeOfNumber()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	printOutput("answerCube",numberOne**3);	
}

