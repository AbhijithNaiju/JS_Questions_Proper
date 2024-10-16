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

// Qn 38
function sumAvgToN()
{
	numberOne=document.getElementById("numberOne").value;
	let sum=0;
	if(checkIsEmpty(numberOne))
	{
		for(i=1;i<=Number(numberOne);i++)
		{
			sum=sum+i;
		}
		printOutput("answerSumAvgToN","Sum = "+sum+" Average = "+sum/Number(numberOne));
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}
