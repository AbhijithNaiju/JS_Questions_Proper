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
// Qn 68
function countVovelsAndCons()
{
	let string1=document.getElementById("string1").value;
	vowelsList=['a','e','i','o','u','A','E','I','O','U'];
	vowelCount=0;
	ConsCount=0;
	string1=string1.trim();
	string1Length=string1.length;
	if(checkIsEmpty(string1))
        {
		for(i=0;i<string1Length;i++)
		{
			if(vowelsList.includes(string1[i]))
			{
				vowelCount+=1;
			}
			else
			{
				ConsCount+=1;
			}
		}
		printOutput("answerCountVovelsAndCons","Number of vowels = "+vowelCount+", Number of consonents = "+ ConsCount);
		printOutput("error","");
	}
	else
        {
		printOutput("error","Please enter the string and character to search");
        }	
}