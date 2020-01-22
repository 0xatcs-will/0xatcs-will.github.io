function ConversionPart1() {

    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);

    outputValue = fromAbstract(toAbstract(UnsignedInt, UnsignedIntBaseFrom), UnsignedIntBaseTo);

  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}

function fromAbstract(value, base) //do we assume user has a brain and not send wrong values?
{
	var decimal = "";
	while (value > 0)
	{
		decimal = String(value % base) + decimal;
		value = (value / base) >> 0; 
	}
	return parseInt(decimal);
}

function toAbstract(value, base)
{
	var number = 0;
	value = String(value);
	for (var i = 0; i < value.length; i++)
	{
		number = number*base + parseInt(value.charAt(i));
	}
	return number;
}
