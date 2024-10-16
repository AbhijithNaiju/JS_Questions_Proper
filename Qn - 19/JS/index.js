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

// Qn19
function dayName()
{
	let num1=document.getElementById("numberOne").value;
	if(checkIsEmpty(num1))
	{
		printOutput("error","");
		num1=parseInt(num1);
		switch(num1)
		{
			case 1:
				printOutput("answerDayName","Sunday");
				break;
			case 2:
				printOutput("answerDayName","Monday");
				break;
			case 3:
				printOutput("answerDayName","Tuesday");
				break;
			case 4:
				printOutput("answerDayName","Wednesday");
				break;
			case 5:
				printOutput("answerDayName","Thursday");
				break;
			case 6:
				printOutput("answerDayName","Friday");
				break;
			case 7:
				printOutput("answerDayName","Saturday");
				break;
			default:
				printOutput("error","Please enter a valid number");
				printOutput("answerDayName","");
		}
	}
	else
	{
		printOutput("error","Please enter the number");
	}	
}