function addListenersToAllButtons(){
	const allButtons = document.getElementsByClassName("button");
	const allButtonsAsArray = Array.from(allButtons);
	console.log(allButtonsAsArray);
	for(let index=0;index<allButtonsAsArray.length;index++){
		const divButton = allButtonsAsArray[index];
		divButton.addEventListener("click",handleButtonEvent);
	}
}
function handleButtonEvent(event){
	console.log("button click event");
	const divButtonText = event.target.innerText;
	if(divButtonText == "CLEAR"){
		handleClear(event);
	} else if(divButtonText == "BACKSPACE"){
		handleBackspace(event);
	} else if(divButtonText == "="){
		handleEquals(event);
	} else{
		updateIOPanel(event);
	}
}
function handleClear(event){
	const ioPanel = document.getElementById("ioPanel");
	ioPanel.innerText = "";
	console.log("handle clear called");
}
function handleBackspace(event){
	const ioPanel = document.getElementById("ioPanel");
	const ioPanelText = ioPanel.innerText;
	if(ioPanelText.length > 0){
		const trimmedText = ioPanelText.substring(0,(ioPanelText.length-1));
		ioPanel.innerText = trimmedText;
		console.log(trimmedText);
	}
	console.log("handle backspace called");
}
function handleEquals(event){
	const ioPanel = document.getElementById("ioPanel");
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
function updateIOPanel(event){
	const ioPanel = document.getElementById("ioPanel");
	const ioPanelText = ioPanel.innerText;
	const divButtonText = event.target.innerText;
	const finalTextToUpdate = ioPanelText + divButtonText;
	ioPanel.innerText = finalTextToUpdate;
	console.log("update iopanel called");
} 
addListenersToAllButtons();