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


// Qn15
function reverseNumber()
{
	let numberOne=document.getElementById("numberOne").value;
	let rev=0;
	let rem=0;
	if(checkIsEmpty(numberOne))
	{
		while(parseInt(numberOne)!=0)
		{
			rem=parseInt(numberOne)%10;
			rev=rev*10+rem;
			numberOne=parseInt(numberOne)/10;	
		}
		printOutput("answerReverse",rev);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the number");
	}	
}
