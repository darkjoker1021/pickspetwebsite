function hideShowIndice() {
	var indice = document.getElementById("indice");
	var button = document.getElementById("btnindice");

	if (indice.style.display === "none") {
		indice.style.display = "block";
		button.style.backgroundColor = "midnightblue"
	} else {
		indice.style.display = "none";
		button.style.backgroundColor = "dodgerblue"
	}
}