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
// Qn 48
function digitCount()
{
	let num1=document.getElementById("numberOne").value;
	let count=0;
	if(checkIsEmpty(num1))
	{
		while(parseInt(num1)!=0)
		{
			count+=1;
			num1=parseInt(num1)/10;	
		}
		printOutput("answerDigitCount",count);
		printOutput("error","");
	}
	else
	{
        printOutput("answerDigitCount","");
		printOutput("error","Please enter the number");
	}	
}