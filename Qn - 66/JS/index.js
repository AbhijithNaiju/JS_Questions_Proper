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
// Qn 66
function reverseVowels()
{
	let string1=document.getElementById("string1").value;
	vowelsCheckList=['a','e','i','o','u','A','E','I','O','U'];
	string1Vowels=[];
	string2="";
	string1Length=string1.length;
	if(checkIsEmpty(string1))
        {
		for(i=0;i<string1Length;i++)
		{
			if(vowelsCheckList.includes(string1[i]))
			{
				string1Vowels.unshift(string1[i]);
			}
		}
		for(i=0;i<string1Length;i++)
		{
			if(vowelsCheckList.includes(string1[i]))
			{
				string2+=string1Vowels.shift(string1[i]);
			}
			else
			{
				string2+=string1[i];
			}
		}
		printOutput("answerReverseVowels",string2);
		printOutput("error","");
	}
	else
        {
		printOutput("error","Please enter the string and character to search");
        }	
}