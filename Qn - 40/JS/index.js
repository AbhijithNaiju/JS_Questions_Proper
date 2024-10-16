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


// Qn40
function sumEvenAndOddToN()
{
	numberOne=document.getElementById("numberOne").value;
	let oddSum=0;
	let evenSum=0;
	if(checkIsEmpty(numberOne))
	{
		for(i=1;i<=Number(numberOne);i++)
		{
			if(i%2==0)
			{
				evenSum=evenSum+i;
			}
			else
			{
				oddSum=oddSum+i;
			}
		}
		printOutput("answerSumEvenAndOddToN","Sum of odd numbers= "+oddSum+" Sum of even numbers = "+evenSum);
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}