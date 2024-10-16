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

// Qn 26
function  multiplicationTable()
{
	let number=document.getElementById("numberOne").value;
	if(checkIsEmpty(number))
		{
			for(i=1;i<=10;i++)
			{
				document.write(i+"x"+number+"="+i*number+"<br>");
			}
		}
	else
	{
		printOutput("error","Please enter the number");
	}	
}