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
// Qn 60
function printStringLength()
{
    let string1=document.getElementById("string1").value;
    if(checkIsEmpty(string1))
        {
            stringLengthMethod=string1.length;
            stringLength=0;
            while(string1[stringLength]!=undefined)
            {
                stringLength+=1;
            }
            printOutput("answerPrintStringLength","Using method length = "+stringLengthMethod+", Without Using method = "+stringLength);
            printOutput("error","");
        }
        else
        {
            printOutput("error","Please enter the string");
        }	
}