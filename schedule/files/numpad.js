function press(name) {
	var original = document.getElementById("valuefor").value;
	var nameconverted = name.toString();
	document.getElementById("valuefor").value = original + nameconverted;
}

function clearvalue() {
	document.getElementById("valuefor").value = "";
}