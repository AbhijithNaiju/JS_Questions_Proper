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

// Qn 29
function  multipleOf5And11()
{
	let number=document.getElementById("numberOne").value;
	if(checkIsEmpty(number))
	{
		array1=[];
		for(i=1;i<=number;i++)
		{
			if(i%5==0 && i%11==0)
			{
				array1.push(i);
			}
		}
		if(!array1[0])
		{
			printOutput("error","No multiple of 5 and 11 found");
		}
		else
		{
			printOutput("answermultipleOf5And11",array1);
			printOutput("error","");
		}	
	}
	else
	{
		printOutput("error","Please enter the limit");
	}	
}