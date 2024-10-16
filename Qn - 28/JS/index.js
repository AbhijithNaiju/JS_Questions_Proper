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

// Qn 28
function  nNaturalReverse()
{
	let number=document.getElementById("numberOne").value;
	if(checkIsEmpty(number))
		{
			for(i=number;i>=1;i--)
			{
				document.write(i+"<br>");
			}
		}
	else
	{
		printOutput("error","Please enter the limit");
	}	
}