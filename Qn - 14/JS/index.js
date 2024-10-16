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


// Qn14
function digitsSum()
{
	let numberOne=document.getElementById("numberOne").value;
	let sum=0;
	let rem=0;
	if(checkIsEmpty(numberOne))
	{
		numberOne=parseInt(numberOne)
		while(numberOne!=0)
		{
			rem=numberOne%10;
			sum=sum+rem;
			numberOne=Math.floor(numberOne/10);	
		}
		printOutput("answerDigitsSum",sum);	
	}
	else
	{
		printOutput("error","Please enter the number");
	}
}
