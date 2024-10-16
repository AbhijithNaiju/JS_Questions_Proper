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
// Qn 47
function calculateSphere()
{
    const pi=3.14;
    radius=document.getElementById("radius").value;
    if(checkIsEmpty(radius))
        {
            radius=Number(radius);
            sphereSurfaceArea=4*pi*(radius**2);
            volume=(4/3)*pi*(radius**3);
            printOutput("answerCalculateSurfaceSphere",sphereSurfaceArea);
            printOutput("answerCalculateVolumeSphere",volume);
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter the Radius");
        }
}
