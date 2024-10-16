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
// Qn 41
function calculateElectricity()
{
    consumption=document.getElementById("consumption").value;
    if(checkIsEmpty(consumption) && Number(consumption>0))
        {
            if(consumption<=50)
            {
                billAmount=consumption*2.60;
            }
            else if(consumption<=100)
            {
                billAmount=(50*2.60)+(consumption-50)*3.25;
            }
            else if(consumption<=200)
            {
                billAmount=(50*2.60)+(50*3.25)+(consumption-100)*5.65;
            }
            else if(consumption>200)
            {
                billAmount=(50*2.60)+(50*3.25)+(100*5.65)+(consumption-200)*7.25;
            }
            if(consumption>700)
            {
                billAmount=billAmount+(billAmount*(0.5/100));
            }
            printOutput("answerCalculateElectricity",billAmount);
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter your electricity consumption");
        }
}