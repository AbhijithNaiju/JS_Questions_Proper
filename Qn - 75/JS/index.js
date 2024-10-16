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

// Qn 75
function hidePalindrome()
{
	let string1=document.getElementById("string1").value;
	string1+=" ";
	outputString="";
	string1Length=string1.length;
	checkForSpace=/\s/
	var check="";
	if(checkIsEmpty(string1))
	{
		for(i=0;i<string1Length;i++)
		{
			if(checkForSpace.test(string1[i])!=true)
			{
				check+=string1[i];
			}
			else
			{
				const checkRev =  check.split('').reverse().join('');
				if(checkRev==check)
				{
					checkLength=check.length;
					for(j=0;j<checkLength;j++)
					{
						outputString+='*';
					}
				}
				else
				{
					outputString+=check;
				}
				outputString+=" ";
				check="";
			}
		}
		printOutput("answerHidePalindrome",outputString);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the string");
	}
}