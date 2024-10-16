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

// Qn 44
function calculateCube()
{
    cubeLength=document.getElementById("cubeLength").value;
    if(checkIsEmpty(cubeLength))
        {
            cubeLength=Number(cubeLength);
            surfaceArea=6*(cubeLength**2);
            volume=(cubeLength**3)
            lateralSurface=4*(cubeLength**2);
            printOutput("answerCalculateSurfaceCube",surfaceArea);
            printOutput("answerCalculateVolumeCube",volume);
            printOutput("answerCalculateLateralCube",lateralSurface);
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter the length");
        }
}
