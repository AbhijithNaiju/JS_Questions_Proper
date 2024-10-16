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
// Qn 57
function stringLastChar()
{
    let string1=document.getElementById("string1").value;
    if(checkIsEmpty(string1))
        {
            string1Length=string1.length;
            printOutput("answerStringLastChar",string1[string1Length-1]);
            printOutput("error","");
        }
        else
        {
            printOutput("error","Please enter the string");
        }	
}