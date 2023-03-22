//1. ascending order//
// ascending and descending order//
var a=parseInt(prompt("enter the first number:"));
var b=parseInt(prompt("enter the second number:"));
var c=parseInt(prompt("enter the third number:"));
console.log("Descending order");
if((a>b)&&(a>c))
{
	 console.log(a);
		if((b>c))
		{
			 console.log(b);
			 console.log(c);
		}
		else 
		{
			 console.log(c);
			 console.log(b);
		}
}
else if((b>a)&&(b>c))
	{
	console.log(b);
		if((a>c))
			{
				 console.log(a);
				 console.log(c);
			}
			else 
			{
				 console.log(c);
				 console.log(a);
			}
	}
else if((c>a)&&(c>b))
	{
	console.log(c);
		if((a>b))
			{
				 console.log(a);
				 console.log(b);
			}
			else 
			{
				 console.log(b);
				 console.log(a);
			}
	}
	console.log("Ascending order");
if((a<b)&&(a<c))
{
	 console.log(a);
		if((b<c))
		{
			 console.log(b);
			 console.log(c);
		}
		else 
		{
			 console.log(c);
			 console.log(b);
		}
}
else if((b<a)&&(b<c))
	{
	console.log(b);
		if((a<c))
			{
				 console.log(a);
				 console.log(c);
			}
			else 
			{
				 console.log(c);
				 console.log(a);
			}
	}
else if((c<a)&&(c<b))
	{
	console.log(c);
		if((a<b))
			{
				 console.log(a);
				 console.log(b);
			}
			else 
			{
				 console.log(b);
				 console.log(a);
			}
	}
	// second program-check the alphabet is vowel or constant//
	var value=prompt("please enter the data:");
	if((value=="A")||(value=="E")||(value=="I")||(value=="O")||(value=="U"))
	{
		console.log("It's vowel");
	}
	else if((value=="a")||(value=="e")||(value=="i")||(value=="0")||(value=="u"))
	{
		 console.log("It's vowel");
	}
	else
	{
		 console.log("It's Constant");
	}
	//2.month & days//
	var month=parseInt(prompt("enter the month:"));
		 var year=parseInt(prompt("enter the year:"));
		 
		  if(month==1)
		  {
			  console.log("It's Janary");
			  console.log("31 Days");
		  } 
		   else if(month==2)
		   {
			    if((year%4==0)&&(year%100==0)&&(year%400==0))
				{
					 console.log("It's Feb");
					  console.log("28 days");
				} 
				
				else 
				{
				 console.log("It's Feb");
				 console.log("29 days");
		        }
		   }
		    else if(month==3)
		  {
			  console.log("It's March");
			  console.log("31 Days");
		  } 
		   else if(month==4)
		  {
			  console.log("It's April");
			  console.log("30 Days");
		  } 
		  else if(month==5)
		  {
			  console.log("It's May");
			  console.log("31 Days");
		  } 
		   else if(month==6)
		  {
			  console.log("It's June");
			  console.log("30 Days");
		  } 
		  else if(month==7)
		  {
			  console.log("It's Jully");
			  console.log("31 Days");
		  } 
		  else if(month==8)
		  {
			  console.log("It's Augest");
			  console.log("31 Days");
		  } 
		 else if(month==9)
		  {
			  console.log("It's September");
			  console.log("30 Days");
		  } 
		   else if(month==10)
		  {
			  console.log("It's Octber");
			  console.log("31 Days");
		  } 
		   else if(month==11)
		  {
			  console.log("It's November");
			  console.log("30 Days");
		  } 
		   else if(month==12)
		  {
			  console.log("It's Dece,ber");
			  console.log("31 Days");
		  } 
		 else 
		 {
			  console.log("none");
		 }
	