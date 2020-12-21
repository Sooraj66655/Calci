/***************************************Calculator On/Off Funtion**********************************/
function toggle() {

	var x = document.getElementById("display");
	if (x.style.display === "none") {
		document.getElementById('powerBtn').style.color = '#999999';
		
		x.style.display = "block";
		calculator.display.value = '';
		
	} else {
        document.getElementById('powerBtn').style.color = 'red';
		x.style.display = "none";
		calculator.display.value = '';
	}

}
/*************************************Calculator Clear Screen Function*******************************/

function clearData() {
	document.getElementById("display").value = '';
}
/**************************************Calculator Delete Function****************************************/

function deleteData() {
	document.getElementById("display").value = calculator.display.value.substring(0, calculator.display.value.length - 1);
}

/*************************************Display value in Calculator Display***********************************/
function dis(val) {
	document.getElementById("display").value += val;
}

/***************************************Calculator Equal to function**************************************/
function Equal() {
	var value = document.getElementById("display").value;

	if (value == '') {
		document.getElementById("eqlBtn").button.disabled = true;
	} else {
		document.getElementById("display").value = eval(calculator.display.value);
	}
}
/********************************************Calculator Operation Perform*************************************************/
function optr(operator) {
	if (operator == '+') {
		var value = document.getElementById("display").value;
		if (value == '') {
			document.getElementById("display").value += operator;
		} else {
			document.getElementById("display").value = eval(calculator.display.value) + '+';
		}
	} else if (operator == '-') {
		var value = document.getElementById("display").value;
		if (value == '') {
			document.getElementById("display").value += operator;
		} else {
			document.getElementById("display").value = eval(calculator.display.value) + '-';
		}
	} else if (operator == '*') {
		var value = document.getElementById("display").value;
		if (value == '') {
			document.getElementById("multiBtn").button.disabled = true;
		} else {
			document.getElementById("display").value = eval(calculator.display.value) + '*';
		}
	} else if (operator == '/') {
		var value = document.getElementById("display").value;
		if (value == '') {
			document.getElementById("divideBtn").button.disabled = true;
		} else {
			document.getElementById("display").value = eval(calculator.display.value) + '/';
		}

	}
}