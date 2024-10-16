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
// Qn 67
function countSymbolDigits()
{
	let string1=document.getElementById("string1").value;
	alphabetCheck=/[A-Za-z]/;
	digitsCheck=/[0-9]/;
	alphabetCount=0;
	digitsCount=0;
	specialCount=0;
	string1=string1.trim();
	string1Length=string1.length;
	if(checkIsEmpty(string1))
	{
		for(i=0;i<string1Length;i++)
		{
			if(alphabetCheck.test(string1[i]))
			{
				alphabetCount+=1;
			}
			else if(digitsCheck.test(string1[i]))
			{
				digitsCount+=1;
			}
			else
			{
				specialCount+=1;
			}
		}
		printOutput("answerCountAlphabets",alphabetCount);
		printOutput("answerCountDigits",digitsCount);
		printOutput("answerCountSymbols",specialCount);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the string and character to search");
	}	
}