

var abrir_Menu = window.document.querySelector("#open_menu");
var fechar_Menu = window.document.querySelector("#close_menu");

abrir_Menu.addEventListener("click", () => {
    console.log("ola")
    document.getElementById("menu").style.width = "100%";
});

fechar_Menu.addEventListener("click", fecharmenu);


function fecharmenu() {
    document.getElementById("menu").style.width = "0";
}
