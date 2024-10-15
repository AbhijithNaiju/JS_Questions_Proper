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
// Qn5
function simpleInterest()
{
	let amount=document.getElementById("amount").value;
	let rate=document.getElementById("rate").value;
	let years=document.getElementById("years").value;
	printOutput("answerSimpleInterest",(Number(amount)*Number(rate)*Number(years))/100);
}
