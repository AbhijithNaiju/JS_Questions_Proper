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



// Qn17
function primeOrNot()
{
	let num1=document.getElementById("numberOne").value;
	if(checkIsEmpty(num1))
	{
		num1=parseInt(num1);
		flag=0;
		if(num1==1)
		{
			printOutput("answerPrimeOrNot","The number is neither prime nor composite");
		}
		else
		{
			for(i=2;i<=(num1/2);i++)
			{
				if(num1%i==0)
				{
					flag=1;
				}
			}
			if(flag==1)
			{
				printOutput("answerPrimeOrNot","Not Prime");
			}
			else
			{
				printOutput("answerPrimeOrNot","Prime");
			}
			printOutput("error","");
		}
	}
	else
	{
		printOutput("error","Please enter the number");
	}	
}
