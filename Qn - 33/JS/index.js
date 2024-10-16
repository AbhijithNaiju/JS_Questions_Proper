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

// Qn 33
function perfectNumber()
{
	let num1=document.getElementById("numberOne").value;
	let sumFacors=0;
	if(checkIsEmpty(num1))
	{
		for(i=1;i<=Number(num1)/2;i++)
		{
			if((num1%i)==0)
			{
				sumFacors=sumFacors+i;
			}
		}
		if(num1==sumFacors)
		{
			printOutput("answerPerfectNumber","Perfect Number");
		}
		else
		{
			printOutput("answerPerfectNumber","Not a perfect number");
		}
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}