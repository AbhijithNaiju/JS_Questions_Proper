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



// Qn13
function numberPower()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	let power=parseInt(document.getElementById("power").value);	
	printOutput("answerPower",numberOne**power);	
}
