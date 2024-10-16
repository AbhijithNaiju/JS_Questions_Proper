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

// Qn 21
function hundredNoLoop(number)
{	
	document.write(number+"<br>")
	if(number==100)
	{
		return;
	}
	hundredNoLoop(number+1)
}