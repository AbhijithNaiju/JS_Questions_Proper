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

// Qn 63
function checkStringPrefix()
{
	let string1=document.getElementById("string1").value;
	let subString=document.getElementById("subString").value;
	if(checkIsEmpty(string1) && checkIsEmpty(subString))
	{
		substringLength=subString.length;
		if(subString==string1.substring(0,substringLength))
		{
			printOutput("answerStringPrefix","Specified substring is the prefix of the given string");
		}
		else
		{
			printOutput("answerStringPrefix","Specified substring is not the prefix of the given string");
		}
	}
	else
	{
		printOutput("error","Please enter the string and substring to search");
	}	
}