const ioPanel = document.getElementById("ioPanel");
function updateIOPanel(value){
	const ioPanelText = ioPanel.innerText;
	const finalTextToUpdate = ioPanelText + value;
	ioPanel.innerText = finalTextToUpdate;
	console.log("update iopanel called");
}
function clearButtonHandler(){
	ioPanel.innerText = "";
	console.log("handle clear called");
}
function backspaceButtonHandler(){
	const ioPanelText = ioPanel.innerText;
	if(ioPanelText.length > 0){
		const trimmedText = ioPanelText.substring(0,(ioPanelText.length-1));
		ioPanel.innerText = trimmedText;
		console.log(trimmedText);
	}
	console.log("handle backspace called");
}
function negationButtonHandler(){
	const ioPanelText = ioPanel.innerText;
	if(ioPanelText != ""){
		const aNumber = getIOPanelContentAsNumber();
		const negatedNumber = -aNumber;
		ioPanel.innerText = negatedNumber;
	}
}
function enterButtonHandler(){
	const ioPanelText = ioPanel.innerText;
	if(ioPanelText == ""){
		ioPanel.innerText = "<No Value Entered>";
	} else{
		try{
			const outcome = eval(ioPanelText);
			ioPanel.innerText = outcome;
			console.log("outcome is ",outcome);
		} catch(error){
			ioPanel.innerText = `Expression error`;
		}
	}
	console.log("handle equals called");
}
function sqrtButtonHandler(){
	if(validateNumber()){
		const aNumber = getIOPanelContentAsNumber();
		const output = Math.sqrt(aNumber);
		ioPanel.innerText = output;
	} else{
		ioPanel.innerText = "error";
	}
}
function squareButtonHandler(){
	if(validateNumber()){
		const aNumber = getIOPanelContentAsNumber();
		const output = aNumber * aNumber;
		ioPanel.innerText  = output;
	} else{
		ioPanel.innerText = "error";
	}
}
function expButtonHandler(){
	if(validateNumber()){
		const aNumber = getIOPanelContentAsNumber();
		const output = Math.exp(aNumber);
		ioPanel.innerText = output;
	} else{
		ioPanel.innerText = "error";
	}
}
function logButtonHandler(){
	if(validateNumber()){
		const aNumber = getIOPanelContentAsNumber();
		const output = Math.log(aNumber);
		ioPanel.innerText = output;
	} else{
		ioPanel.innerText = "error";
	}
}
function cosButtonHandler(){
	if(validateNumber()){
		const aNumber = getIOPanelContentAsNumber();
		const radianNumber = convertDegreeToRadian(aNumber);
		const output = Math.cos(radianNumber);
		ioPanel.innerText = output;
	} else{
		ioPanel.innerText = "error";
	}
}
function sinButtonHandler(){
	if(validateNumber()){
		const aNumber = getIOPanelContentAsNumber();
		const radianNumber = convertDegreeToRadian(aNumber);
		const output = Math.sin(radianNumber);
		ioPanel.innerText = output;
	} else{
		ioPanel.innerText = "error";
	}
}
function tanButtonHandler(){
	if(validateNumber()){
		const aNumber = getIOPanelContentAsNumber();
		const radianNumber = convertDegreeToRadian(aNumber);
		const output = Math.tan(radianNumber);
		ioPanel.innerText = output;
	} else{
		ioPanel.innerText = "error";
	}
}
function convertDegreeToRadian(degree){
	return degree * (Math.PI / 180);
}
function getIOPanelContentAsNumber(){
  const ioPanelText = ioPanel.innerText
  const aNumber = parseInt(ioPanelText, 10);
  return aNumber;
}
function validateNumber(){
	const ioPanelText = ioPanel.innerText;
	if(isNaN(ioPanelText)){
		console.log("NaN is true");
		return false;
	} else{
		console.log("NaN is false");
		return true;
	}
}