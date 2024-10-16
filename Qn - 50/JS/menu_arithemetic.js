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

function findArithemetic()
{
	let operator=prompt(" 1 - Add \n 2 - Substract \n 3 - Multiply \n 4 - Division \n 5 - Exit \n Select the menu item");
	while(operator!="5")
	{
		let num1=prompt("Enter number 1");
		let num2=prompt("Enter number 2");
		if(checkIsEmpty(num1) && checkIsEmpty(num2))
		{
			printOutput("error","");
			num1=Number(num1);
			num2=Number(num2);
			switch(operator)
			{
				case "1":
					alert("Sum = "+ (num1+num2));
					break;
				case "2":
					alert("Difference = "+ (num1-num2));
					break;
				case "3":
					alert("Product = "+(num1*num2));
					break;
				case "4":
					if(num2==0)
					{
						alert("Math Error");
					}
					else
					{
						alert("Quotient = "+(num1/num2));
					}
					break;
				case "5":
					printOutput("error","");
					break;
				default:
					alert("Please enter a valid operator");
			}
		}
		else
		{
			alert("Please Enter the numbers");
			continue;
		}
		operator=prompt(" 1 - Add \n 2 - Substract \n 3 - Multiply \n 4 - Division \n 5 - Exit \n Select the menu item");
	}
	printOutput("error","Program Ended");
}