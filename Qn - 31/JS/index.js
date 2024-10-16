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
// Qn 31
function digitsProduct()
{
	let numberOne=document.getElementById("numberOne").value;
	let product=1;
	let rem;
	if(checkIsEmpty(numberOne))
		{
		while(parseInt(numberOne)!=0)
		{
			rem=parseInt(numberOne)%10;
			product=product*rem;
			numberOne=parseInt(numberOne)/10;	
		}
		printOutput("answerDigitsProduct",product);	
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}