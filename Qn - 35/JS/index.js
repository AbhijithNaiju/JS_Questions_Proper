var printLocation;
var printValue;
// Print data
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

// Qn 35
function positiveOrNegative()
{
	let num1=document.getElementById("numberOne").value;
	if(checkIsEmpty(num1))
	{
		num1=Number(num1);
		if(num1>0)
		{
			printOutput("answerPositiveOrNegative","Positive");
		}
		else if(num1<0)
		{
			printOutput("answerPositiveOrNegative","Negative");
		}
		else 
		{
			printOutput("answerPositiveOrNegative","Zero");
		}
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}
