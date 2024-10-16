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
// Qn 70
function printLargeSmallString()
{
	let string1=document.getElementById("string1").value;
	string1+=" ";
	string1Length=string1.length;
	checkForSpace=/\s/
	var large;
	var small;
	var check="";
	if(checkIsEmpty(string1))
	{
		for(i=0;i<string1Length;i++)
		{
			if(checkForSpace.test(string1[i])!=true)
			{
				check+=string1[i];
				continue;
			}
			if(typeof large==='undefined' || check.length>large.length)
			{
				large=check;
			}
			if(typeof small==='undefined' || small.length>check.length)
			{
				small=check;
			}
			check="";
		}
		printOutput("answerPrintLargeSmallString","Large = "+large+" small= "+small);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the string");
	}
}