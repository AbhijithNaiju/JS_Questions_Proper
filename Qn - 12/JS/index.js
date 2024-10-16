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
	let numberOne=document.getElementById("numberOne").value;
	let numberTwo=document.getElementById("numberTwo").value;
	if(checkIsEmpty(numberOne) && checkIsEmpty(numberTwo))
	{
		numberOne=Number(numberOne);
		numberTwo=Number(numberTwo);
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

