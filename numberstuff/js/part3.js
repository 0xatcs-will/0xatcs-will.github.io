
function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);

 //unsigned 32 bit float, first 23 bits for mantissa minus first 1, next 8 bits for exponent in excess 128 notation, final bit is for sign

  var output32BitScientificNotation = convertFloat(floatToConvert);


  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
}

function convertFloat(value)
{
	if (value == 0)
	{
		return "00000000000000000000000000000000"; //double check
	}
	var negative;
	if (value < 0)
	{
		value = value * -1;
		negative = true;
	}
	else
	{
		negative = false;
	}
	//now break into integer and decimal components
	int = String(value).split(".")[0]; //String
	dec = "0." + String(value).split(".")[1];//String
	float = "";
	intBin = toBin(parseInt(int));
	//first 1 is implied
	intBin = intBin.substring(1);
	//calculate remaining length 
	lenRem = 23 - intBin.length;
	dec = parseFloat(dec);
	while (lenRem > 0)
	{
		//console.log(dec);
		dec = dec * 2;
		if (dec == 0)
		{
			break;
		}
		if (dec >= 1)
		{
			float += "1";
			dec = dec - 1;
		}
		else
		{
			float += "0";
		}
		lenRem--;
	}
	float = intBin + float;
	var exponent;
	if (float.length < 23)
	{
		exponent = float.length - 1;
		float = float + "00000000000000000000000".substring(float.length);
	}
	else
	{
		exponent = 22;
	}
	exponent = exponent + 128;
	exponent = toBin(exponent);
	float = float + exponent + (negative ? '1':'0');
	return float
}