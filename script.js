function Clickformore() {
  let name = prompt("What's your name?");
  let email = prompt("What's your email?");
  alert("Thank You, " + name);
}

let morebutton = document.querySelector(".morebutton");
morebutton.addEventListener("click", Clickformore);

function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let themebutton = document.querySelector(".themebutton");
themebutton.addEventListener("click", changeTheme);
