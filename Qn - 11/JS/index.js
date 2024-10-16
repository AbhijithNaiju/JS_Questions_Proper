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



// Qn11
function leapYearOrNot()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	if(numberOne%100==0 && numberOne%400==0)
	{
		printOutput("answerLeapYear","Leap Year");
	}
	else if(numberOne%100!=0 &&numberOne%4==0)
	{
		printOutput("answerLeapYear","Leap Year");
	}
	else
	{
		printOutput("answerLeapYear","Not a Leap Year");
	}
}
