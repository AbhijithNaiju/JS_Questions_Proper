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

// Qn 42
function calculateSalary()
{
    basicSalary=document.getElementById("basicSalary").value;
    if(checkIsEmpty(basicSalary) && Number(basicSalary>0))
        {
            basicSalary=Number(basicSalary);
            grossSalary=0;
            if(basicSalary<=10000)
            {
                grossSalary=basicSalary+(basicSalary*(8/100))+(basicSalary*(10/100));
            }
            else if(basicSalary<=20000)
            {
                grossSalary=basicSalary+(basicSalary*(18/100))+(basicSalary*(20/100));
            }
            else if(basicSalary>20000)
            {
                grossSalary=basicSalary+(basicSalary*(24/100))+(basicSalary*(30/100));
            }
            printOutput("answerCalculateSalary",grossSalary    );
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter your salary");
        }
}