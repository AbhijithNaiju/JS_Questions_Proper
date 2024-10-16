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


// Qn 24
function factorial()
{
	numberOne=document.getElementById("numberOne").value;
	if(checkIsEmpty(numberOne))
	{
		var fact=1;
		for(i=1;i<=Number(numberOne);i++)
		{
			fact=fact*i;
		}
		printOutput("answerFactorial",fact);
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}