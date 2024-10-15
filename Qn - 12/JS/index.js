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



// Qn12
function swapNumbers()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	let numberTwo=parseInt(document.getElementById("numberTwo").value);
	if(checkIsEmpty(num1) &&checkIsEmpty(num2))
	{
		printOutput("answerBeforeSwap","Number 1: "+numberOne + ",  Number 2: " + numberTwo);
		numberOne=numberOne+numberTwo;
		numberTwo=numberOne-numberTwo;
		numberOne=numberOne-numberTwo;
		printOutput("answerAfterSwap","Number 1: "+ numberOne +", Number 2: "+ numberTwo);
	}
	else
	{
		printOutput("error","Please enter the number");
	}
}

