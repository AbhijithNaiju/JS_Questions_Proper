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

// Qn 53
function printAscii()
{
	let string1=document.getElementById("string1").value;
	if(checkIsEmpty(string1) && string1.length==1)
	{
		let asciiValue=string1.charCodeAt(0);
		printOutput("answerPrintAscii",asciiValue);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter one Character");
	}	
}