
const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao , indice) => {
    botao.addEventListener("click", () => {

        desselecionatBotao();
        
        botao.classList.add("selecionado")
       
        desselecionaPersonagem();

        personagens[indice].classList.add("selecionado")

    });
})  

function desselecionaPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionatBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

