// =====================================
// MENSAGEM INICIAL
// =====================================

console.log("Bem-vindo ao IA Digital! ♡");


// =====================================
// ANIMAÇÃO DAS SEÇÕES
// =====================================

const secoes = document.querySelectorAll(".secao");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visivel");

            observador.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.12
});


secoes.forEach((secao) => {
    observador.observe(secao);
});


// =====================================
// ANIMAÇÃO DOS CARDS
// =====================================

const cards = document.querySelectorAll(".card");

cards.forEach((card, indice) => {

    card.style.transitionDelay = `${indice * 0.1}s`;

});


// =====================================
// EFEITO NO MENU
// =====================================

const links = document.querySelectorAll("nav a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        links.forEach((item) => {
            item.classList.remove("ativo");
        });

        link.classList.add("ativo");

    });

});


// =====================================
// MENSAGEM NO CONSOLE
// =====================================

console.log("Site carregado com sucesso!");
console.log("Desenvolvido pelas alunas do 1º A ♡");