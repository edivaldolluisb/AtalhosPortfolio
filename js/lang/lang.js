
function portugues(params) {

    //Página inicial
    const menus = document.querySelectorAll("header > a");

    menus[0].innerText = "Inicio"
    menus[1].innerHTML = "Trabalhos"
    menus[2].innerHTML = "Sobre"
    menus[3].innerHTML = "Contato"

    const citacoes = document.querySelectorAll('.citacoes_principais > p')

    citacoes[0].innerHTML = `Vamos pensar fora da <span class="lastword">caixa</span>`

    citacoes[1].innerHTML = `Vamos causar um impacto juntos. <br> Disponivel para novas oportunidades, podemos agendar uma conversa.`

    const verprojetos = document.querySelectorAll('#seeprojects > p')

    verprojetos[0].innerText = `Gostaria de ver alguns bons projectos?`

    verprojetos[1].innerHTML = `Dê uma olhada em alguns projetos!`

    const verprojetos_link = document.querySelector('#seeprojects > a').innerText = `Ver projetos`
    
    const contact = document.querySelectorAll('#contactus div > p')
    contact[0].innerHTML = `Podemos ajuadar-te<br> a trazer vida a tua <span class="lastword"> ideia</span>`
    contact[1].innerText = `Leva apenas alguns cliques e podemos estar juntos`

    const contact_link = document.querySelector('#contactus div > a').innerText = `Entrar em contato`


    //Página de contato

    /*const inimessage = document.querySelector('.texto p').innerHTML = `Podes deixar a tua menssagem aqui &#x1F609;!`*/




}

var lingua = document.querySelector('.disabled')

lingua.addEventListener('click', ()=>{

    console.log('ola')

})

//portugues()