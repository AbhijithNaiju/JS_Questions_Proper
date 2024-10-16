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
// Qn 59
function printStringChar()
{
    let array1=[];
    let string1=document.getElementById("string1").value;
    if(checkIsEmpty(string1))
        {
            string1Length=string1.length;
            for(i=0;i<string1Length;i++)
            {
                // document.write(string1[i]);
                array1.push(string1[i]);
            }
            printOutput("answerPrintStringChar",array1);
            printOutput("error","");
        }
        else
        {
            printOutput("error","Please enter the string");
        }	
}