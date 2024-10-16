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
// Qn 65
function reverseCase()
{
	let string1=document.getElementById("string1").value;
	stringOutput="";
	lowerCaseList=/[a-z]/;
	upperCaseList=/[A-Z]/;
	if(checkIsEmpty(string1))
        {
		for(i=0;i<(string1.length);i++)
		{
			if(lowerCaseList.test(string1[i]))
			{
				stringOutput+=string1[i].toUpperCase();
			}
			else if(upperCaseList.test(string1[i]))
			{
				stringOutput+=string1[i].toLowerCase();
			}
		}
		printOutput("answerReverseCase",stringOutput);
		printOutput("error","");
	}
	else
        {
		printOutput("error","Please enter the string");
        }	
}