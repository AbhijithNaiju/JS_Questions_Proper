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



// Qn8
function calculateFloatNumbers()
{
	let numberOne=parseFloat(document.getElementById("numberOne").value);
	let numberTwo=parseFloat(document.getElementById("numberTwo").value);
	printOutput("answerFloatSum",(numberOne+numberTwo).toFixed(2));
	printOutput("answerFloatDifference",(numberOne-numberTwo).toFixed(2));
	printOutput("answerFloatProduct",(numberOne*numberTwo).toFixed(2));
	if(numberTwo!=0)
	{
		printOutput("answerFloatQuotient",(numberOne/numberTwo));
	}
	else
	{
		printOutput("answerFloatQuotient","Division by 0 is not possible");	
	}
}
