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

// Qn 64
function replaceString()
{	
	let string1=document.getElementById("string1").value;
	let replacewith=document.getElementById("replacewith").value;
	let stringToReplace=document.getElementById("stringToReplace").value;
	if(checkIsEmpty(string1) && checkIsEmpty(replacewith) && checkIsEmpty(stringToReplace))
        {
		string2=string1.replace(stringToReplace,replacewith);
		printOutput("answerReplaceString",string2);
		printOutput("error","");
	}
        else
        {
		printOutput("error","Please enter the string and charector to search");
        }	
}