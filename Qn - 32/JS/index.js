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

// Qn 32
function stringPalindrome()
{
	let str1=document.getElementById("strOne").value;
	let rev="";
	if(checkIsEmpty(str1))
	{
		strLength=str1.length;
		for(i=strLength-1;i>=0;i--)
		{
			rev=rev+str1[i];
		}
		if(rev==str1)
		{
			printOutput("answerStringPalindrome","String is Palindrome");	
		}
		else
		{
			printOutput("answerStringPalindrome","String is Not a Palindrome");
		}
	}
	else
	{
	printOutput("error","Please enter the string");
	}
}