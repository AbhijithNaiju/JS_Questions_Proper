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
// Qn 69
function checkBrackets()
{
	let string1=document.getElementById("string1").value;
	string1Length=string1.length;
	parenthesis=0;
	squareBrackets=0;
	curleyBraces=0;
	if(checkIsEmpty(string1))
        {
		for(i=0;i<string1Length;i++)
		{
			if( string1[i]=='(' )
			{
				parenthesis+=1;
			}
			else if( string1[i]==')' )
			{
				if(parenthesis==0)
				{
					printOutput("answerCheckBrackets","");
					printOutput("error","invalid ) in string");
					return;
				}
				else
				{
					parenthesis--;
				}
			}
			else if( string1[i]=='[' )
			{
				squareBrackets+=1;
			}
			else if( string1[i]==']' )
			{
				if(squareBrackets==0)
				{
					printOutput("answerCheckBrackets","");
					printOutput("error","invalid ] in string");
					return;
				}
				else
				{
					squareBrackets--;
				}
			}
			else if( string1[i]=='{' )
			{
				curleyBraces+=1;
			}
			else if( string1[i]=='}' )
			{
				if(curleyBraces==0)
				{
					printOutput("answerCheckBrackets","");
					printOutput("error","invalid } in string");
					return;
				}
				else
				{
					curleyBraces--;
				}
			}
		}
		if(parenthesis!=0 || squareBrackets!=0 || curleyBraces!=0)
		{
			printOutput("error","Unclosed Brackets in the string");	
			printOutput("answerCheckBrackets","");	
		}
		else
		{
			printOutput("answerCheckBrackets","String is ok");
			printOutput("error","");
		}

	}
	else
        {
		printOutput("error","Please enter the string and character to search");
        }	
}