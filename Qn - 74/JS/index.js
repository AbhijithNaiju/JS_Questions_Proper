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

// Qn 74
function alphabetCount()
{
	let string1=document.getElementById("string1").value;
	string1=string1.toLowerCase();
	stringLength=string1.length;
	arrayAlphabets=[];
	arrayAlphabetCount=[];
	arrayCountOfAlphabets=[];
	if(checkIsEmpty(string1))
	{
		for(i=0;i<stringLength;i++)
		{
			if(string1[i]==" ")
			{
				continue;
			}
			else if(arrayAlphabets.includes(string1[i]))
			{
				elementPosition=arrayAlphabets.indexOf(string1[i]);
				arrayAlphabetCount[elementPosition]+=1;
		
			}
			else
			{
				arrayAlphabetCount.push(1);
				arrayAlphabets.push(string1[i]);
			}
		}
		max=0;
		for(j=0;j<arrayAlphabetCount.length;j++)
		{
			if(arrayAlphabetCount[j]>arrayAlphabetCount[max])
			{
				max=j;
			}
			arrayCountOfAlphabets.push(arrayAlphabets[j] +" "+ arrayAlphabetCount[j]);
		}
		printOutput("answerAlphabetCount","Alphabet occurance : "+ arrayCountOfAlphabets);
		printOutput("answerMostOccurance","Alphabet with most occurance : "+arrayAlphabets[max] +" : "+ arrayAlphabetCount[max]);
	}
	else
	{
		printOutput("error","Please enter the string");
	}
}
