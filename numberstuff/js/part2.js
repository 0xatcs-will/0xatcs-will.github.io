function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);



    outputValue = toBin(SignedDecimalInt);
    zero = "0000000000000000000000000"

    if (outputValue.length < 24)
    {
    	outputValue = zero.substring(24-outputValue.length) + outputValue;
    }
    if (outputValue.length > 24)
    {
    	outputValue = outputValue.substring(24-outputValue.length);
    }
    var temp = "";
    for (var i = 0; i < outputValue.length; i++)
    {
    	//console.log(outputValue.charAt(i));
    	if (parseInt(outputValue.charAt(i)) == 0)
    	{
    		temp = temp + "1";
    	}
    	else 
    	{
    		temp = temp + "0";
    	}
    }
    if (parseInt(temp.charAt(23))==0)
    {
    	temp = temp.substring(0, 23) + "1";
    }
    else
    {
    	//for carry bot
    	for (var i = outputValue.length - 1;i > 0; i--)
    	{
    		if (parseInt(temp.charAt(i))==0)
    		{
    			temp = temp.substring(0, i) + "1" + temp.substring(i+1)
    			i = -1000;
    		}
    		else if (i == outputValue.length-1)
    		{
    			temp = temp.substring(0, i) + "0";
    		}
    		else
    		{
    			//console.log("broke")
    			temp = temp.substring(0, i) + "0" + temp.substring(i+1);
    		}
    	}
    }
    outputValueTwosComplement = temp; 

    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}

function toBin(value)
{
	var bin = "";
	var base = 2;
	while (value > 0)
	{
		bin = String(value % base) + bin;
		value = (value / base) >> 0; 
	}
	return bin;
}