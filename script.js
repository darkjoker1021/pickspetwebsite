//Al cambio del documento, chiama la funzione initDarkMode()
window.addEventListener("DOMContentLoaded", function() {
  initThemeMode();
});

function initThemeMode() {
  let darkMode = localStorage.getItem("darkMode") === "true";

  let body = document.body;
  let darkbtn = document.getElementById("darkbtn");

  if (darkMode) {
    body.classList.add("dark-mode");

    darkbtn.innerHTML = "Chiaro";
    darkbtn.style.backgroundColor = "midnightblue";
  } else {
    body.classList.remove("dark-mode");

    darkbtn.innerHTML = "Scuro";
    darkbtn.style.backgroundColor = "";
  }
}

//Pulsante dark mode
function darkMode() {
  let body = document.body;
  let darkbtn = document.getElementById("darkbtn");

  let isDarkMode = body.classList.contains("dark-mode");
  
  if (!isDarkMode) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "true");

    darkbtn.innerHTML = "Chiaro";
    darkbtn.style.backgroundColor = "midnightblue";
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "false");

    darkbtn.innerHTML = "Scuro";
    darkbtn.style.backgroundColor = "";
  }
}

//Link show div login
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

//Link show div signin
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

//Rileva scroll e show pulsante verso sopra
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let top = document.getElementById("top-btn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
}

//Ritorna pagina sopra
function topFunction() {
  document.documentElement.scrollTop = 0;
}