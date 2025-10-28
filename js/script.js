function downloadGame(game) {
    // Lógica para download do jogo
    alert('Iniciando o download de ' + game + '...');
}

function showGameInfo(game) {
    var title = '';
    var content = '';

    if (game === 'ducktionary') {
        title = 'Ducktionary';
        content = '<p>Uma aventura educativa onde as crianças assumem o papel de um pato corajoso, lançado por um canhão para atingir nuvens no céu. Cada nuvem contém uma palavra diferente, e o desafio é completar frases em inglês escolhendo a palavra correta. Conforme o jogo avança, as frases se tornam mais complexas, ajudando a expandir o vocabulário de forma lúdica.</p>';
    } else if (game === 'mathduck') {
        title = 'Math Duck';
        content = '<p>Aventura matemática onde nosso pato protagonista resolve problemas de matemática básica. As crianças ajudam o pato a coletar números e símbolos matemáticos corretos para resolver equações simples. Com níveis progressivos, o jogo ensina adição, subtração e conceitos básicos de matemática de forma divertida e interativa.</p>';
    } else if (game === 'geoduck') {
        title = 'Geo Duck';
        content = '<p>Explore o mundo com nosso pato aventureiro! Este jogo educativo ensina geografia de forma interativa, onde as crianças ajudam o pato a viajar pelo mundo, aprendendo sobre países, capitais, continentes e culturas diferentes. Cada missão é uma nova descoberta geográfica cheia de diversão e aprendizado.</p>';
    } else if (game === 'scienceduck') {
        title = 'Science Duck';
        content = '<p>Desperte a curiosidade científica com experimentos virtuais! O pato cientista guia as crianças através de experimentos básicos de ciências, ensinando sobre física, química e biologia de forma segura e divertida. Cada experimento é uma nova descoberta sobre como o mundo funciona ao nosso redor.</p>';
    }

    document.getElementById('gameInfoTitle').innerHTML = title;
    document.getElementById('gameInfoContent').innerHTML = content;
    document.getElementById('gameInfoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('gameInfoModal').style.display = 'none';
}

// FAQ toggle
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(function (el) {
        el.addEventListener('click', function () {
            const answer = el.nextElementSibling;
            if (answer.style.display === 'none' || !answer.style.display) {
                answer.style.display = 'block';
                el.querySelector('span').textContent = '-';
            } else {
                answer.style.display = 'none';
                el.querySelector('span').textContent = '+';
            }
        });
    });
});
