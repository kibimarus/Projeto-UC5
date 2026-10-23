const Slides = document.getElementsByClassName("slide")

const slides = document.querySelectorAll(".slide");

let slideAtual = 0;

function mostrarSlide(posicao) {
    slides.forEach(function(slide) {
        slide.classList.remove("ativo");
    });

    slides[posicao].classList.add("ativo");
}


mostrarSlide(slideAtual);

setInterval(function() {
    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);
}, 4000);


// ======================================================
// contato
const form = document.getElementById("formContato");
const aviso = document.getElementById("mensagemSucesso");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    aviso.textContent =
        `Obrigado, ${nome}! Sua mensagem foi preenchida com sucesso.`;

    form.reset();
});

