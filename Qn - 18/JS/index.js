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

// Qn18
function findEligibility()
{
	let physics=document.getElementById("physics").value;
	let chemistry=document.getElementById("chemistry").value;
	let maths=document.getElementById("maths").value;
	if(checkIsEmpty(physics) && checkIsEmpty(chemistry) && checkIsEmpty(maths))
	{
		printOutput("error","");
		physics=Number(physics);
		chemistry=Number(chemistry);
		maths=Number(maths);
		if(maths>=65 && physics>=55 && chemistry>=50 && ((physics+chemistry+maths)>=190 || (maths+physics)>=140))
		{
			printOutput("answerEligibility","Eligible");
		}
		else
		{
			printOutput("answerEligibility","Not Eligible");
		}
	}
	else
	{
		printOutput("error","Please enter all the marks");	
	}
}