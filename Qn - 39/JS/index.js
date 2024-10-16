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

// Qn39
function sumEvenToN()
{
	numberOne=document.getElementById("numberOne").value;
	let sum=0;
	if(checkIsEmpty(numberOne))
	{
		for(i=1;i<=Number(numberOne);i++)
		{
			if(i%2==0)
			{
				sum=sum+i;
			}
		}
		printOutput("answerSumEvenToN",sum);
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}
