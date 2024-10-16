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

// Qn 54
function stringConcatMethod()
{
    let string1=document.getElementById("string1").value;
    let string2=document.getElementById("string2").value;
    addedString=string1.concat(string2);
    printOutput("answerStringConcatMethod",addedString);
}