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

// Qn 49
function fibonacci()
{
	let limit=document.getElementById("limit").value;
	var array1=[];
    var b=0;
    var c=1;
	if(checkIsEmpty(limit))
	{
        for(i=1;i<=Number(limit);i++)
        {
            a=b;
            b=c;
            c=a+b;
            array1.push(a);
        }
        printOutput("answerFibonacci",array1);
		printOutput("error","");
	}
	else
	{
        printOutput("answerFibonacci","");
		printOutput("error","Please enter the limit");
	}	
}
