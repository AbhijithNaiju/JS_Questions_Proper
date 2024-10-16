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
// Qn 51
function palindromeNumber()
{
	let numberOne=document.getElementById("numberOne").value;
	let rev=0;
	let rem=0;
    orginalNumber=parseInt(numberOne);
	if(checkIsEmpty(numberOne))
	{
		while(parseInt(numberOne)!=0)
		{
			rem=parseInt(numberOne)%10;
			rev=rev*10+rem;
			numberOne=parseInt(numberOne)/10;	
		}
        if(orginalNumber==rev)
        {
            printOutput("answerPalindromeNumber","Palindrome");
        }
		else
        {
            printOutput("answerPalindromeNumber","Not palindrome");
        }
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the number");
	}	
}