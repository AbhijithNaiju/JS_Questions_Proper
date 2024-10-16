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

// Qn 73
function deleteConsonent()
{
	let string1="Hello, have a good day";
	var outputString="";
	vowelsList=['a','e','i','o','u','A','E','I','O','U'];
	checkForSpace=/\s/;
	string1Length=string1.length;
	if(checkIsEmpty(string1))
	{
		for(i=0;i<string1Length;i++)
		{
			if(vowelsList.includes(string1[i]) || checkForSpace.test(string1[i]))
			{
				outputString+=(string1[i]);
			}
		}
		printOutput("answerDelConsBefore",string1);
		printOutput("answerDelConsAfter",outputString);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the string and character to search");
	}	
}
