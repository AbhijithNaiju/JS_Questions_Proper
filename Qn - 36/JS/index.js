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

//36
function countNotes()
{
	let num1=document.getElementById("numberOne").value;
	var countNotes500;
	var countNotes200;
	var countNotes100;
	var countNotes50;
	var countNotes20;
	var countNotes10;
	var countNotes5;
	if(checkIsEmpty(num1))
	{
		num1=Number(num1);
		countNotes500=parseInt(num1/500);
		num1=num1-(countNotes500*500);

		countNotes200=parseInt(num1/200);
		num1=num1-(countNotes200*200);

		countNotes100=parseInt(num1/100);
		num1=num1-(countNotes100*100);

		countNotes50=parseInt(num1/50);
		num1=num1-(countNotes50*50);

		countNotes20=parseInt(num1/20);
		num1=num1-(countNotes20*20);

		countNotes10=parseInt(num1/10);
		num1=num1-(countNotes10*10);

		countNotes5=parseInt(num1/5);
		num1=num1-(countNotes5*5);

		printOutput("answerCountNotes500",countNotes500);
		printOutput("answerCountNotes200",countNotes200);
		printOutput("answerCountNotes100",countNotes100);
		printOutput("answerCountNotes50",countNotes50);
		printOutput("answerCountNotes20",countNotes20);
		printOutput("answerCountNotes10",countNotes10);
		printOutput("answerCountNotes5",countNotes5);
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}
