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

// Qn 55
function byteToString()
{
    var array1=[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];
    for(i=0;i<array1.length;i++)
	{
		document.write(String.fromCharCode(array1[i]));
	}
    printOutput("answerByteToString",addedString);
}