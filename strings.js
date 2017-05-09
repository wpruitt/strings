console.log("Strings")

var outputDiv = document.getElementById("outputDiv")

function reversal(string) {
	var reversed = ""
	for (var i = string.length; i > 0; i--){
		reversed += string.slice((i-1), i)
	}
return reversed
}

function alphabits(string) {
	var alphatize = string.split("")
	alphatize.sort()
	alphatize = alphatize.toString()
	for (var i = 0; i < alphatize.length; i++){
		alphatize = alphatize.replace(",", "")
	}
	return alphatize
}

function palindrome(string) {
	if (string === reversal(string)){
		return "Your string is a palindrome."
	}
	else {
		return "Your string is not a palindrome."
	}
}

var testString = "";

var userInput = document.getElementById("userInput")
userInput.addEventListener("keypress", function(){
	if (event.key === "Enter"){
		if (userInput.value.match(/[^a-zA-Z]/g)){
			outputDiv.innerHTML = "User Input must be alphacharaters."
		}
	else {
			console.log(event)
			testString = userInput.value	
			outputDiv.innerHTML =`<p>
							Reversed: ${reversal(testString)}<br>
							Alphabetized: ${alphabits(testString)}<br>
							${palindrome(testString)}
							</p>`
			userInput.value = ""
		}
	}
})
