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

// Qn 23
function factors()
{
	numberOne=document.getElementById("numberOne").value;
	const array1=[];
	if(checkIsEmpty(numberOne))
	{
		for(i=1;i<=Number(numberOne);i++)
		{
			if((numberOne%i)==0)
			{
				array1.push(i);
			}
		}
		printOutput("answerFactors",array1);
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}