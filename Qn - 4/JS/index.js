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



// Qn4
function averageOfThree()
{
	let NumberOne=document.getElementById("NumberOne").value;
	let NumberTwo=document.getElementById("NumberTwo").value;
	let NumberThree=document.getElementById("NumberThree").value;
	printOutput("answerFourSum",Number(NumberOne)+Number(NumberTwo)+Number(NumberThree));
	printOutput("answerFourAverage",(Number(NumberOne)+Number(NumberTwo)+Number(NumberThree))/3);
}
