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

// Qn 72
function missingLetter()
{
let string1=document.getElementById("string1").value;
	string1=string1.toLowerCase();
	stringLength=string1.length;
	array1=[];
	if(checkIsEmpty(string1))
	{
		for(i=0;i<stringLength-1;i++)
		{

			expectedNext=(string1[i].charCodeAt(0)+1);
			limit=1;
			if((string1[i].charCodeAt(0)+1)!=(string1[i+1].charCodeAt(0)))
			{
				while((string1[i+1].charCodeAt(0))!=expectedNext)
					{
						array1.push(String.fromCharCode(expectedNext));
						expectedNext++;
						limit++;
						if(limit>=26)
						{
							printOutput("answerMissingLetter","");
							printOutput("error","Please enter the letters in ascending order");
							return;
						}
					}
			}
		}
		if(array1.length==0)
		{
			printOutput("answerMissingLetter","There is no missing letter!");	
		}
		else
		{
			printOutput("answerMissingLetter","Missing letters - "+array1);
		}
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the letters");
	}
}
	