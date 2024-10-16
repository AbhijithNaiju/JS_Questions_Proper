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

// Qn 61
function printStringCharIndex()
{
    let string1=document.getElementById("string1").value;
    let charector=document.getElementById("charector").value;
    if(checkIsEmpty(string1) && checkIsEmpty(charector))
        {
            stringLength=string1.length;
           for(i=0;i<stringLength;i++)
            {
                if(string1[i]==charector)
                {
                    printOutput("answerStringCharIndex",i);
                    printOutput("error","");
                    return;
                }
            }
            printOutput("error","Charector not found");
        }
        else
        {
            printOutput("error","Please enter the string and charector to search");
        }	
}