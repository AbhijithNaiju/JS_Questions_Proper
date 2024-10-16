var printLocation;
var printValue;

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


// Qn16
function smallAndLarge()
{
	let num1=document.getElementById("numberOne").value;
	let num2=document.getElementById("numberTwo").value;
	let num3=document.getElementById("numberThree").value;
	if(checkIsEmpty(num1) && checkIsEmpty(num2) && checkIsEmpty(num3))
	{
		num1=Number(num1);
		num2=Number(num2);
		num3=Number(num3);
		if(num1>num2 && num1>num3)
		{
			large=num1;
			if(num2<num3)
			{
				small=num2;
			}
			else
			{
				small=num3;
			}
		}
		else if(num2>num3)
		{
			large=num2;
			if(num1<num3)
			{
				small=num1;
			}
			else
			{
				small=num3;
			}
		}
		else
		{
			large=num3;
			if(num1<num2)
			{
				small=num1;
			}
			else
			{
				small=num2;
			}
		}
		printOutput("answerLargeOf3",large);
		printOutput("answerSmallOf3",small);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter 3 numbers");
	}	
}
