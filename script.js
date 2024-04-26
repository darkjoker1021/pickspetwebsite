function darkMode() {
  let body = document.body;
  let darkbtn = document.getElementById("darkbtn");

  body.classList.toggle("dark-mode");

  if (darkbtn.innerHTML === "Chiaro") {
	  darkbtn.style.backgroundColor = "midnightblue";
  	darkbtn.innerHTML = "Scuro";
  } else {
    darkbtn.style.backgroundColor = "";
    darkbtn.innerHTML = "Chiaro";
  }
}

function showLogin() {
    var loginDiv = document.getElementById("login");
    var signinDiv = document.getElementById("signin");

    loginDiv.classList.toggle("fadeindiv");
    loginDiv.classList.remove("fadeoutdiv");

    signinDiv.classList.toggle("fadeoutdiv");
    signinDiv.classList.remove("fadeindiv");

    signinDiv.style.display = "none";
    loginDiv.style.display = "";
}

function showSignin() {
    var loginDiv = document.getElementById("login");
    var signinDiv = document.getElementById("signin");

    signinDiv.classList.toggle("fadeindiv");
    signinDiv.classList.remove("fadeoutdiv");

    loginDiv.classList.toggle("fadeoutdiv");
    loginDiv.classList.remove("fadeindiv");

    loginDiv.style.display = "none";
    signinDiv.style.display = "";
}


//Ritorna sopra
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let top = document.getElementById("top-btn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}