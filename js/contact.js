var abrir_caixaDeagradecimento = window.document.querySelector("#enviarMenssagem");
var fechar_caixaDeagradecimento = window.document.querySelector("#fechar_caixaDeagradecimento");

abrir_caixaDeagradecimento.addEventListener("click", () => {

    //console.log("abrir")
    document.getElementById("thanks").style.visibility = "visible";
});

fechar_caixaDeagradecimento.addEventListener("click", fecharcaixa);


function fecharcaixa() {
    document.getElementById("thanks").style.visibility = "hidden";
    //console.log("fechar")
}
