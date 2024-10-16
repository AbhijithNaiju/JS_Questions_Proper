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

// Qn 46
function calculateCylinder()
{
    const pi=3.14;
    radius=document.getElementById("radius").value;
    height=document.getElementById("height").value;
    if(checkIsEmpty(height) && checkIsEmpty(radius))
        {
            height=Number(height);
            radius=Number(radius);
            surfaceArea=2*pi*(radius**2)+pi*radius*height;
            volume=pi*height*radius**2;
            lateralSurface=2*pi*radius*height
            topBottomSurface=pi*radius**2;
            printOutput("answerCalculateSurfaceCylinder",surfaceArea);
            printOutput("answerCalculateVolumeCylinder",volume);
            printOutput("answerCalculateLateralCylinder",lateralSurface);
            printOutput("answerCalculateTopBottomCylinder",topBottomSurface);
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter the length");
        }
}
