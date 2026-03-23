document.addEventListener('DOMContentLoaded', () => {
    // Estado da App
    let currentSlide = 0;
    let selectedAvatar = 'gatinho';

    // Elementos do DOM
    const screenHome = document.getElementById('screen-home');
    const screenLevels = document.getElementById('screen-levels');
    const btnPlay = document.getElementById('btn-play');
    const btnBack = document.getElementById('btn-back');

    // Elementos do Carrossel
    const track = document.getElementById('carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const dotsContainer = document.getElementById('carousel-indicators');

    // O avatar inicial (Gatinho) já vem selecionado no arranque
    btnPlay.disabled = false;

    // Criar indicadores (pontos) consoante o número de slides
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.dataset.index = index;
        
        // Clicar nos pontos vai diretamente para esse avatar
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
        
        dotsContainer.appendChild(dot);
    });
    const dots = Array.from(document.querySelectorAll('.dot'));

    // Atualizar posição do carrossel e seleção do avatar
    function updateCarousel() {
        // Mover o track de deslize visível (100% de largura por slide)
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Atualizar avatar selecionado automaticamente em background
        selectedAvatar = slides[currentSlide].dataset.avatar;

        // Atualizar dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
        
        // Micro-animação do botão Jogar para feedback de seleção dinâmica
        btnPlay.style.transform = 'scale(1.05)';
        setTimeout(() => {
            btnPlay.style.transform = 'scale(1)';
        }, 150);
    }

    // Navegação via setas em loop
    btnNext.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    });

    btnPrev.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    // Navegar para o Ecrã de Níveis
    btnPlay.addEventListener('click', () => {
        if (!selectedAvatar) return;
        
        setTimeout(() => {
            screenHome.classList.remove('active');
            screenLevels.classList.add('active');
        }, 200);
    });

    // Voltar para o Ecrã Inicial
    btnBack.addEventListener('click', () => {
        screenLevels.classList.remove('active');
        screenHome.classList.add('active');
    });
});
