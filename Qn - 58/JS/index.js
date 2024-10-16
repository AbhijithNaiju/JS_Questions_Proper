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
// Qn 58
function stringMiddleChar()
{
    let string1=document.getElementById("string1").value;
    if(checkIsEmpty(string1))
        {
            string1Length=string1.length;
            if(string1Length%2 != 0)
            {
                Middle=(string1Length-1)/2;
                printOutput("answerStringMiddleChar",string1[Middle]);
                printOutput("error","");
            }
            else
            {
                printOutput("answerStringMiddleChar","");
                printOutput("error","The string has no perfect middle element.");
            }
        }
        else
        {
            printOutput("error","Please enter the string");
        }	
}