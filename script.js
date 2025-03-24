function desativarBotoes() {
    document.getElementById("btnPoema").disabled = true;
    document.getElementById("btnFrase").disabled = true;
    
    setTimeout(() => {
        document.getElementById("btnPoema").disabled = false;
        document.getElementById("btnFrase").disabled = false;
    }, 5000); // Reativa os botões após 5 segundos
}

function gerarPoema() {
    const poemas = [
        "Mesmo que esteja triste, quero que saiba: não importa em qual lugar eu esteja, estarei torcendo para que conquiste seus sonhos e seja muito feliz, pois você merece.",
        "Você é o sonho mais bonito que a realidade me permitiu viver até hoje.",
        "Eu escolhi te amar em silêncio... Pois no silêncio não encontro rejeição. Eu escolho te amar na solidão... Pois na solidão ninguém te tem além de mim. Eu escolho te amar à distância... Pois a distância me protegerá da dor. Eu escolho beijar você no vento... Pois o vento levará o meu beijo até você. Eu escolho te abraçar em meus sonhos... Pois em meus sonhos, você não tem fim. Eu escolho te amar sem esperar nada em troca... Pois o amor é a única coisa que eu posso te dar.",
        "Seu sorriso é a luz que ilumina os meus dias mais escuros.",
        "Para muitas pessoas o amor traz dor, tristeza e sofrimento, e para outras é como um doce perfume que encanta e deixa hipnotizado. Para mim, o amor é um enigma que ainda não consegui desvendar, mas que me faz ficar curioso com as coisas que podem acontecer e mudar a vida do dia para a noite."
    ];

    const poemaAleatorio = poemas[Math.floor(Math.random() * poemas.length)];
    document.getElementById("poema").innerText = poemaAleatorio;
    document.getElementById("frase").innerText = ""; // Limpa a frase
    desativarBotoes();
}

function gerarFrase() {
    const frases = [
        "O amor é a poesia da alma.",
        "Sorrisos sinceros iluminam até os dias mais nublados.",
        "Às vezes, a felicidade está nas pequenas coisas.",
        "A distância pode separar corpos, mas nunca corações.",
        "O tempo não apaga sentimentos verdadeiros."
    ];

    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("frase").innerText = fraseAleatoria;
    document.getElementById("poema").innerText = ""; // Limpa o poema
    desativarBotoes();
}