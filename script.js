function hideShowIndice() {
	var indice = document.getElementById("indice");
	var button = document.getElementById("btnindice");

	if (indice.style.display === "none") {
		indice.style.display = "block";
		button.style.backgroundColor = "midnightblue";
		
	} else {
		indice.style.display = "none";
		button.style.backgroundColor = "";		//Reset del colore di sfondo
	}
}

function darkMode() {
  var body = document.body;
  var darkbtn = document.getElementById("darkbtn");

  body.classList.toggle("dark-mode");

  if (darkbtn.innerHTML === "Chiaro") {
	darkbtn.style.backgroundColor = "midnightblue";
  	darkbtn.innerHTML = "Scuro";
  } else {
	darkbtn.style.backgroundColor = "";		//Reset del colore di sfondo
	darkbtn.innerHTML = "Chiaro";
  }
}