const LEVELS_DATA = {
    1: [
        { title: "Lavar as mãos", steps: ["Abrir a torneira", "Lavar as mãos", "Secar"] },
        { title: "Calçar os sapatos", steps: ["Pegar nos sapatos", "Calçar os sapatos", "Apertar os atacadores"] },
        { title: "Beber água", steps: ["Pegar no copo", "Encher com água", "Beber"] },
        { title: "Deitar o lixo fora", steps: ["Pegar no lixo", "Ir ao caixote", "Deitar dentro"] },
        { title: "Pôr o casaco", steps: ["Pegar no casaco", "Enfiar os braços", "Fechar o fecho"] }
    ],
    2: [
        { title: "Escovar os dentes", steps: ["Pegar na escova", "Colocar pasta de dentes", "Escovar os dentes", "Limpar a boca"] },
        { title: "Preparar a mochila", steps: ["Abrir a mochila", "Meter os cadernos e manuais", "Meter o estojo", "Fechar a mochila"] },
        { title: "Lavar a cara", steps: ["Abrir a torneira", "Molhar a cara", "Ensaboar a cara", "Lavar e secar"] },
        { title: "Ir para a cama", steps: ["Vestir o pijama", "Escovar os dentes", "Deitar", "Apagar a luz"] },
        { title: "Pôr a mesa", steps: ["Pegar nos pratos", "Colocar os pratos", "Pôr os talheres", "Pôr os copos"] }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // ESTADO DA APP
    let currentSlide = 0;
    let selectedAvatar = 'gatinho';
    let unlockedLevels = [1];
    let currentLevel = 1;
    let currentRoutineIndex = 0;
    let currentLevelData = [];

    // ELEMENTOS CRAWL
    const screenHome = document.getElementById('screen-home');
    const screenLevels = document.getElementById('screen-levels');
    const screenGame = document.getElementById('screen-game');
    
    const btnPlay = document.getElementById('btn-play');
    const btnBackLevels = document.getElementById('btn-back-levels');
    const btnBackGame = document.getElementById('btn-back-game');

    const overlay = document.getElementById('game-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalButtons = document.getElementById('modal-buttons');
    const starsContainer = document.getElementById('stars-container');

    // MÁQUINA DO CARROSSEL DE AVATARES
    const track = document.getElementById('carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const dotsContainer = document.getElementById('carousel-indicators');

    btnPlay.disabled = false;

    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.dataset.index = index;
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    });
    const dots = Array.from(document.querySelectorAll('.dot'));

    function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        selectedAvatar = slides[currentSlide].dataset.avatar;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
        
        btnPlay.style.transform = 'scale(1.05)';
        setTimeout(() => {
            btnPlay.style.transform = 'scale(1)';
        }, 150);
    }

    btnNext.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    });

    btnPrev.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    // NAVEGAÇÃO PRINCIPAL E NÍVEIS
    btnPlay.addEventListener('click', () => {
        if (!selectedAvatar) return;
        setTimeout(() => {
            screenHome.classList.remove('active');
            screenLevels.classList.add('active');
        }, 150);
    });

    btnBackLevels.addEventListener('click', () => {
        screenLevels.classList.remove('active');
        screenHome.classList.add('active');
    });

    btnBackGame.addEventListener('click', () => {
        screenGame.classList.remove('active');
        screenLevels.classList.add('active');
        updateLevelLocksStatus();
    });

    // LÓGICA DOS NÍVEIS
    function updateLevelLocksStatus() {
        const cards = document.querySelectorAll('.level-card');
        cards.forEach(card => {
            const lvl = parseInt(card.dataset.level);
            if (unlockedLevels.includes(lvl)) {
                card.classList.remove('locked');
                card.classList.add('unlocked');
                const status = card.querySelector('.level-status');
                status.innerHTML = `
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="#fbbf24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`;
            }
        });
    }

    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('locked')) return;
            const lvl = parseInt(card.dataset.level);
            startGame(lvl);
        });
    });

    // INÍCIO DO JOGO EM SI
    function startGame(levelNumber) {
        currentLevel = levelNumber;
        currentLevelData = LEVELS_DATA[currentLevel];
        currentRoutineIndex = 0;
        
        screenLevels.classList.remove('active');
        screenGame.classList.add('active');
        
        loadRoutine();
    }

    function loadRoutine() {
        const routine = currentLevelData[currentRoutineIndex];
        document.getElementById('routine-title').textContent = routine.title;
        
        const slotsContainer = document.getElementById('slots-container');
        const cardsContainer = document.getElementById('cards-container');
        
        slotsContainer.innerHTML = '';
        cardsContainer.innerHTML = '';
        
        // Renderizar os Slots (caixas pontilhadas vazias)
        for (let i = 0; i < routine.steps.length; i++) {
            const slot = document.createElement('div');
            slot.classList.add('drag-slot');
            slot.dataset.stepIndex = i; 
            slot.dataset.slottedId = "";
            slotsContainer.appendChild(slot);
        }
        
        // Renderizar Cartões
        let cardsArr = [];
        routine.steps.forEach((stepText, index) => {
            const card = document.createElement('div');
            card.classList.add('drag-card');
            card.textContent = stepText;
            card.dataset.id = index; 
            cardsArr.push(card);
        });
        
        // Randomizar passos
        cardsArr.sort(() => Math.random() - 0.5);
        cardsArr.forEach((card, idx) => {
            card.dataset.homeIndex = idx; // Keeps original bottom position
            cardsContainer.appendChild(card);
            setupDrag(card);
        });
    }

    // Helper: Devolve o cartão de volta à sua exata posição inferior
    function returnCardToHome(card) {
        const cardsContainer = document.getElementById('cards-container');
        const homeIndex = parseInt(card.dataset.homeIndex);
        
        const children = Array.from(cardsContainer.children);
        let inserted = false;
        for (let child of children) {
            if (parseInt(child.dataset.homeIndex) > homeIndex) {
                cardsContainer.insertBefore(card, child);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            cardsContainer.appendChild(card);
        }
    }

    // MECÂNICA DRAG AND DROP (Pointer Events para Mobile e PC)
    let draggingElement = null;
    let currentSlotHover = null;

    function setupDrag(card) {
        let isDragging = false;
        let startX = 0;
        let startY = 0;

        card.addEventListener('pointerdown', (e) => {
            if (!e.isPrimary) return;
            
            isDragging = false;
            startX = e.clientX;
            startY = e.clientY;
            
            card.setPointerCapture(e.pointerId);
            draggingElement = card;
        });

        card.addEventListener('pointermove', (e) => {
            if (draggingElement !== card) return;
            
            if (!isDragging) {
                const dist = Math.sqrt(Math.pow(e.clientX - startX, 2) + Math.pow(e.clientY - startY, 2));
                if (dist > 5) { // Threshold for drag
                    isDragging = true;
                    
                    // 1. Guardar posição inicial onde está visualmente sob o dedo ANTES de o atirar para a root no DOM!
                    const rect = card.getBoundingClientRect();
                    card.dataset.offsetX = e.clientX - rect.left;
                    card.dataset.offsetY = e.clientY - rect.top;

                    card.style.width = `${rect.width}px`;
                    card.style.height = `${rect.height}px`;
                    card.style.left = `${rect.left}px`;
                    card.style.top = `${rect.top}px`;
                    card.classList.add('dragging');

                    // 2. Agora sim, mover hierarquia interna do card
                    if (card.parentElement.classList.contains('drag-slot')) {
                        card.parentElement.dataset.slottedId = "";
                        returnCardToHome(card);
                        card.classList.remove('slotted');
                    }
                } else {
                    return;
                }
            }
            
            const x = e.clientX - parseFloat(card.dataset.offsetX);
            const y = e.clientY - parseFloat(card.dataset.offsetY);
            card.style.left = `${x}px`;
            card.style.top = `${y}px`;

            card.style.visibility = 'hidden'; 
            const elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            card.style.visibility = 'visible';

            const slots = Array.from(document.querySelectorAll('.drag-slot'));
            slots.forEach(s => s.classList.remove('highlight'));
            
            currentSlotHover = null;
            if (elemBelow) {
                const slot = elemBelow.closest('.drag-slot');
                if (slot && !slot.dataset.slottedId) {
                    slot.classList.add('highlight');
                    currentSlotHover = slot;
                }
            }
        });

        card.addEventListener('pointerup', (e) => {
            if (draggingElement !== card) return;
            draggingElement = null;
            card.releasePointerCapture(e.pointerId);
            
            if (!isDragging) {
                // Clique simples
                if (card.parentElement.classList.contains('drag-slot')) {
                    card.parentElement.dataset.slottedId = "";
                    returnCardToHome(card);
                    card.classList.remove('slotted');
                }
                return;
            }
            
            card.classList.remove('dragging');
            card.style.left = '';
            card.style.top = '';
            card.style.width = '';
            card.style.height = '';
            
            if (currentSlotHover) {
                // Largado no quadrado certo
                currentSlotHover.classList.remove('highlight');
                currentSlotHover.appendChild(card);
                currentSlotHover.dataset.slottedId = card.dataset.id;
                card.classList.add('slotted');
                currentSlotHover = null;
                
                checkWinCondition();
            } else {
                // Largado forado -> Regressa à base original
                returnCardToHome(card);
            }
            isDragging = false;
        });
    }

    function checkWinCondition() {
        const slots = Array.from(document.querySelectorAll('.drag-slot'));
        const isFull = slots.every(s => s.children.length > 0);
        
        if (isFull) {
            const isCorrect = slots.every(s => s.dataset.slottedId === s.dataset.stepIndex);
            
            if (isCorrect) {
                playSuccessSound();
                createStarsAnimation();
                
                setTimeout(() => {
                    showModal("Muito bem!", "Completaste a rotina de forma perfeita.", [
                        {text: "Continuar", class: "primary-btn", action: nextRoutine }
                    ]);
                }, 800);
            } else {
                // ERRADO - Reseta e baralha depois de um pequeno tempo de graça
                setTimeout(() => {
                    const cardsContainer = document.getElementById('cards-container');
                    let allCards = Array.from(cardsContainer.children); // Get unslotted (if any)
                    
                    slots.forEach(s => {
                        const card = s.firstElementChild;
                        if (card) {
                            card.classList.remove('slotted');
                            allCards.push(card);
                            s.dataset.slottedId = "";
                        }
                    });
                    
                    // Shuffle e re-atribuir homeIndex
                    allCards.sort(() => Math.random() - 0.5);
                    cardsContainer.innerHTML = '';
                    allCards.forEach((c, idx) => {
                        c.dataset.homeIndex = idx;
                        cardsContainer.appendChild(c);
                    });
                    
                }, 600); // 600ms grace pause, zero feedback negativo
            }
        }
    }

    // GESTÃO OVERLAYS
    function showModal(title, text, buttons) {
        modalTitle.textContent = title;
        modalText.textContent = text;
        modalButtons.innerHTML = '';
        
        buttons.forEach(b => {
            const btn = document.createElement('button');
            btn.className = b.class;
            btn.textContent = b.text;
            btn.addEventListener('click', b.action);
            modalButtons.appendChild(btn);
        });
        
        overlay.classList.remove('hidden');
    }

    function hideModal() {
        overlay.classList.add('hidden');
    }

    function nextRoutine() {
        hideModal();
        currentRoutineIndex++;
        
        if (currentRoutineIndex < currentLevelData.length) {
            loadRoutine();
        } else {
            // NÍVEL COMPLETADO!
            if (!unlockedLevels.includes(currentLevel + 1)) {
                unlockedLevels.push(currentLevel + 1);
            }
            
            const hasNextLevel = !!LEVELS_DATA[currentLevel + 1];
            
            if (hasNextLevel) {
                showModal("Nível Completo!", "Queres tentar o próximo nível?", [
                    {text: "Repetir Nível", class: "secondary-btn", action: () => { hideModal(); currentRoutineIndex = 0; loadRoutine(); }},
                    {text: "Avançar", class: "primary-btn", action: () => { hideModal(); startGame(currentLevel + 1); }}
                ]);
            } else {
                showModal("Fantástico!", "Completaste todas as tarefas disponíveis!", [
                    {text: "Voltar aos Níveis", class: "secondary-btn", action: () => {
                        hideModal();
                        screenGame.classList.remove('active');
                        screenLevels.classList.add('active');
                        updateLevelLocksStatus();
                    }},
                    {text: "Repetir Nível", class: "primary-btn", action: () => { hideModal(); currentRoutineIndex = 0; loadRoutine(); }}
                ]);
            }
        }
    }

    // AUDIO WEB API
    function playSuccessSound() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = 'sine'; // Suave
            
            osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
            osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); 
            osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); 
            osc.frequency.setValueAtTime(1046.50, ctx.currentTime + 0.3); // C6
            
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.05); 
            gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
            
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.7);
        } catch (e) { console.log("WebAudio não suportado"); }
    }

    function createStarsAnimation() {
        starsContainer.innerHTML = '';
        starsContainer.classList.remove('hidden');
        
        for (let i = 0; i < 15; i++) {
            const star = document.createElement('div');
            star.className = 'floating-star';
            star.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>`;
            
            const rx = (Math.random() - 0.5) * 300;
            const ry = (Math.random() - 0.5) * 300;
            star.style.setProperty('--rx', `${rx}px`);
            star.style.setProperty('--ry', `${ry}px`);
            star.style.animationDelay = `${Math.random() * 0.2}s`;
            
            starsContainer.appendChild(star);
        }
        
        setTimeout(() => {
            starsContainer.classList.add('hidden');
            starsContainer.innerHTML = '';
        }, 1500);
    }
});
