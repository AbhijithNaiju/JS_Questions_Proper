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
// Qn6
function compountInterest()
{
	let amount=parseFloat(document.getElementById("amount").value);
	let rate=parseFloat(document.getElementById("rate").value);
	let years=parseFloat(document.getElementById("years").value);
	answer=(amount*(1+(rate/100))**years)-amount
	printOutput("answerCompountInterest",answer);
}