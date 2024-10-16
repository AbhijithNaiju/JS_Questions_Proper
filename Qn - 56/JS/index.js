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

// Qn 56
function stringFirstChar()
{
    let string1=document.getElementById("string1").value;
    if(checkIsEmpty(string1))
        {
            printOutput("answerStringFirstChar",string1[0]);
            printOutput("error","");
        }
        else
        {
            printOutput("error","Please enter the string");
        }	
}