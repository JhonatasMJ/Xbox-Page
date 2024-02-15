const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event) {
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(controls)
    const ativa = resposta.classList.contains ('ativa')
    resposta.classList.toggle('ativa')
    pergunta.setAttribute('aria-expanded', ativa)
}


function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)


//Animação

window.addEventListener('load', function () {
    setTimeout(function () {
      document.body.classList.add('loaded');
    }, 2200);
  });