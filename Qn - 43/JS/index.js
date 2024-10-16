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
// Qn 43
function calculateCone()
{
    const pi=3.14;
    radius=document.getElementById("radius").value;
    coneLength=document.getElementById("coneLength").value;
    height=document.getElementById("height").value;
    if(checkIsEmpty(radius) && checkIsEmpty(coneLength) && checkIsEmpty(height))
        {
            radius=Number(radius);
            coneLength=Number(coneLength);
            height=Number(height);
            surfaceArea=pi*radius*coneLength+pi*(radius**2);
            volume=(1/3)*pi*(radius**2)*height;
            lateralSurface=pi*radius*coneLength;
            printOutput("answerCalculateSurfaceCone",surfaceArea);
            printOutput("answerCalculateVolumeCone",volume);
            printOutput("answerCalculateLateralCone",lateralSurface);
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter the dimentions");
        }
}