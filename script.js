const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se te perguntassem qual seu tipo de música favorito dentre as opções, qual seria? Não pense muito para responder!",
        alternativas: [
            {
                texto: "Definitivamente Pop!",
                afirmacao: "Infância ou Pandemia?. "
            },
            {
                texto: "Com certeza Rock!",
                afirmacao: "Alguém da sua família tem um ótimo gosto musical."
            }
        ]
    },
    {
        enunciado: "Sobre Pop e Rock, qual desses cantores você mais gosta/escuta?",
        alternativas: [
            {
                texto: " Axl Rose.",
                afirmacao: "Você tem um gosto músical impecavel."
            },
            {
                texto: "The Weeknd.",
                afirmacao: "Otima escolha, gosto do seu gosto músical."
            }
        ]
    },
    {
        enunciado: "Vamos fazer uma votação rapida para ver se eu entendi",
        alternativas: [
            {
                texto: "Rock, cultura boa, música boa me lembra infancia.",
                afirmacao: "Nada melhor do que o bom e velho rock."
            },
            {
                texto: "Pop, nada se compara ao sentimento que eles transmiten.",
                afirmacao: "Nada melhor do que se lembrar da epoca em que era criança."
            }
        ]
    },
    {
        enunciado: "Vamos colocar em pratica uma situação, duas pessoas estão brigando verbalmente sobre gostos músicais, vamos te dar duas opções o que você faria?",
        alternativas: [
            {
                texto: "Não conheço eles, não vou me meter vai que sobra pra mim .",
                afirmacao: "Discussões são normais, eles podem se conhecer não vou me envolver"
            },
            {
                texto: "Tento intervir de forma pacifica para não virar uma briga fisica.",
                afirmacao: "Convence-los de relevar uma discussão futil."
            }
        ]
    },
    {
        enunciado: "Vamos tentar trabalhar juntos, você precisa fazer um trabalho em grupo onde as pessoas estão divididas entre Rock e Pop para a trilha sonora de um teatro que precisam fazer na escola, mas a duvida gerou uma discusão, sobrou para você decidir, o que vai fazer?",
        alternativas: [
            {
                texto: "Escolho o que acredito se encaixar melhor.",
                afirmacao: "Escolhi o que acredito se encaixar melhor, mesmo se isso não agradar a todos"
            },
            {
                texto: "Converso com todos até entrar em um consenso mesmo que demore.",
                afirmacao: "Conversar e chegar em um consenso é a melhor opção, assim todos participam e gostam do trabalho evitando brigas futuras. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();