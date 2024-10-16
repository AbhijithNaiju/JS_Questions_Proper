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
// Qn 45
function calculateCuboid()
{
    cuboidLength=document.getElementById("cuboidLength").value;
    cuboidwidth=document.getElementById("cuboidwidth").value;
    cuboidheight=document.getElementById("cuboidheight").value;
    if(checkIsEmpty(cuboidLength) && checkIsEmpty(cuboidwidth) && checkIsEmpty(cuboidheight))
        {
            cuboidLength=Number(cuboidLength);
            cuboidwidth=Number(cuboidwidth);
            cuboidheight=Number(cuboidheight);
            surfaceArea=(2*cuboidLength*cuboidwidth)+(2*cuboidLength*cuboidheight)+(2*cuboidwidth*cuboidheight);
            volume=cuboidLength*cuboidwidth*cuboidheight
            lateralSurface=2*cuboidheight*(cuboidLength+cuboidwidth)
            printOutput("answerCalculateSurfaceCuboid",surfaceArea);
            printOutput("answerCalculateVolumeCuboid",volume);
            printOutput("answerCalculateLateralCuboid",lateralSurface);
            printOutput("answerCalculateTopBottomCuboid",lateralSurface);
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter the length");
        }
}