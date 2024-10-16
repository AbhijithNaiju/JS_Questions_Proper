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

// Qn 25
function firstAndLastDigit()
{
	let numberOne=document.getElementById("numberOne").value;
	let first=0;
	let last=0;
	if(checkIsEmpty(numberOne))
	{
		last=parseInt(numberOne)%10;
		while(parseInt(numberOne)!=0)
		{
			rem=parseInt(numberOne)%10;
			first=first*0+rem;
			numberOne=parseInt(numberOne)/10;	
		}
		printOutput("answerFirstAndLastDigit","First Digit : "+ first +", Last Digit : " +last);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the number");
	}	
}