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

// Qn 71
function changeLetter()
{
	let string1=document.getElementById("string1").value;
	string1=string1.toLowerCase();
	stringLength=string1.length;
	string2="";
	if(checkIsEmpty(string1))
	{
		for(i=0;i<stringLength;i++)
		{
			charAscii=string1[i].charCodeAt(0);
			if(charAscii==122)
			{
				string2+=String.fromCharCode(97);
			}
			else
			{
			string2+=String.fromCharCode(charAscii+1);
			}
		}
		printOutput("answerChangeLetter",string2);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the string to change");
	}
}