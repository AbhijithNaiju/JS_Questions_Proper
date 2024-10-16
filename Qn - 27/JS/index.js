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

// Qn 27
function  nNatural()
{
	let number=document.getElementById("numberOne").value;
	if(checkIsEmpty(number))
		{
			for(i=1;i<=number;i++)
			{
				document.write(i+"<br>");
			}
		}
	else
	{
		printOutput("error","Please enter the number");
	}	
}