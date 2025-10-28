document.addEventListener("DOMContentLoaded", () => {
    const scrollAmount = 300; 
    const container = document.getElementById("imagens");

    document.getElementById("botao-esquerdo").addEventListener('click', () => {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    document.getElementById("botao-direito").addEventListener('click', () => {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});
