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