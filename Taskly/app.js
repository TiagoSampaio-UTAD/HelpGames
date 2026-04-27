const LEVELS_DATA = {
    1: [
        { title: "Lavar as mãos", steps: [
            { text: "Abrir a torneira", img: "https://static.arasaac.org/pictograms/21341/21341_2500.png" },
            { text: "Lavar as mãos",   img: "https://static.arasaac.org/pictograms/8975/8975_2500.png" },
            { text: "Secar",           img: "https://static.arasaac.org/pictograms/37049/37049_2500.png" }
        ]},
        { title: "Calçar os sapatos", steps: [
            { text: "Pegar nos sapatos",      img: "https://static.arasaac.org/pictograms/39546/39546_2500.png" },
            { text: "Calçar os sapatos",      img: "https://static.arasaac.org/pictograms/14534/14534_2500.png" },
            { text: "Apertar os atacadores",  img: "https://static.arasaac.org/pictograms/17026/17026_2500.png" }
        ]},
        { title: "Beber água", steps: [
            { text: "Pegar no copo",   img: "https://static.arasaac.org/pictograms/2610/2610_2500.png" },
            { text: "Encher com água", img: "https://static.arasaac.org/pictograms/4768/4768_2500.png" },
            { text: "Beber",           img: "https://static.arasaac.org/pictograms/2276/2276_2500.png" }
        ]},
        { title: "Deitar o lixo fora", steps: [
            { text: "Pegar no lixo",  img: "https://static.arasaac.org/pictograms/6065/6065_2500.png" },
            { text: "Ir ao caixote",  img: "https://static.arasaac.org/pictograms/27208/27208_2500.png" },
            { text: "Deitar dentro",  img: "https://static.arasaac.org/pictograms/15479/15479_2500.png" }
        ]},
        { title: "Pôr o casaco", steps: [
            { text: "Pegar no casaco",  img: "https://static.arasaac.org/pictograms/3229/3229_2500.png" },
            { text: "Enfiar os braços", img: "https://static.arasaac.org/pictograms/39853/39853_2500.png" },
            { text: "Fechar o fecho",   img: "https://static.arasaac.org/pictograms/5357/5357_2500.png" }
        ]}
    ],
    2: [
        { title: "Escovar os dentes", steps: ["Pegar na escova", "Colocar pasta de dentes", "Escovar os dentes", "Limpar a boca"] },
        { title: "Preparar a mochila", steps: ["Abrir a mochila", "Meter os cadernos e manuais", "Meter o estojo", "Fechar a mochila"] },
        { title: "Lavar a cara", steps: ["Abrir a torneira", "Molhar a cara", "Ensaboar a cara", "Lavar e secar"] },
        { title: "Ir para a cama", steps: ["Vestir o pijama", "Escovar os dentes", "Deitar", "Apagar a luz"] },
        { title: "Pôr a mesa", steps: ["Pegar nos pratos", "Colocar os pratos", "Pôr os talheres", "Pôr os copos"] }
    ],
    3: [
        { title: "Lavar o cabelo", steps: ["Molhar o cabelo", "Deitar champô na mão", "Esfregar o cabelo", "Tirar o champô do cabelo", "Secar com a toalha"] },
        { title: "Tomar duche", steps: ["Abrir o chuveiro", "Molhar o corpo", "Ensaboar o corpo", "Tirar o sabão do corpo", "Fechar o chuveiro"] },
        { title: "Lavar uma maçã", steps: ["Pegar na maçã", "Abrir a torneira", "Lavar a maçã na água", "Fechar a torneira", "Secar a maçã e comer"] },
        { title: "Aquecer o leite no micro-ondas", steps: ["Abrir o micro-ondas", "Pôr a caneca dentro", "Fechar o micro-ondas", "Carregar no botão para ligar", "Tirar a caneca quando apitar"] },
        { title: "Afiar um lápis", steps: ["Pegar no lápis e no afia", "Meter o lápis no buraco do afia", "Rodar o lápis com a mão", "Tirar o lápis do afia", "Deitar o lixo do afia no caixote"] }
    ],
    4: [
        { title: "Preparar o lanche", steps: ["Pegar no pão", "Barrar com manteiga", "Meter o fiambre", "Fechar o pão", "Colocar no saco", "Meter na mochila"] },
        { title: "Rotina da manhã", steps: ["Acordar", "Ir à casa de banho", "Lavar a cara", "Escovar os dentes", "Vestir-se", "Tomar o pequeno-almoço"] },
        { title: "Ir à casa de banho", steps: ["Baixar as calças e cuecas", "Sentar na sanita", "Fazer chichi ou cocó", "Limpar com o papel higiénico", "Puxar o autoclismo", "Vestir as cuecas e as calças"] },
        { title: "Beber sumo de pacote", steps: ["Pegar no pacote", "Tirar a palhinha", "Tirar o plástico da palhinha", "Espetar a palhinha no buraco", "Pôr na boca", "Beber"] },
        { title: "Comer um iogurte", steps: ["Pegar no iogurte", "Tirar a tampa", "Pegar na colher", "Meter a colher no iogurte", "Pôr na boca", "Comer"] }
    ],
    5: [
        { title: "Jogar no tablet", steps: ["Pegar no tablet", "Ligar o ecrã", "Carregar no jogo", "Jogar o jogo", "Fechar o jogo", "Desligar o ecrã", "Pousar o tablet na mesa"] },
        { title: "Rotina do almoço escolar", steps: ["Lavar as mãos", "Pegar no tabuleiro", "Escolher a refeição", "Sentar à mesa", "Comer a sopa", "Comer o prato principal", "Beber água"] },
        { title: "Dia de escola completo", steps: ["Acordar", "Tomar banho", "Tomar o pequeno-almoço", "Preparar a mochila", "Ir para a escola", "Chegar a casa", "Fazer os trabalhos de casa"] },
        { title: "Preparar para sair à rua no frio", steps: ["Pegar no casaco", "Vestir o casaco", "Fechar o fecho", "Pôr o gorro na cabeça", "Abrir a porta da rua", "Sair de casa", "Fechar a porta"] },
        { title: "Rotina completa da noite", steps: ["Jantar", "Lavar as mãos", "Tomar banho", "Vestir o pijama", "Escovar os dentes", "Preparar a roupa para amanhã", "Deitar"] }
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
    
    let tasklyStars = parseInt(localStorage.getItem('taskly_stars')) || 0;
    let unlockedAvatares = 1;
    let soundEnabled = localStorage.getItem('taskly_sound') !== 'false';
    let soundVolume = parseFloat(localStorage.getItem('taskly_volume') ?? '1');
    const AVATAR_THRESHOLDS = [0, 15, 30, 50, 75, 100, 125, 150];
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

    const btnConfirmContainer = document.getElementById('confirm-container');
    const btnConfirm = document.getElementById('btn-confirm');

    const progressContainer = document.getElementById('stars-progress-container');
    const progressFill = document.getElementById('stars-progress-fill');
    const progressText = document.getElementById('stars-progress-text');
    const headerStars = document.getElementById('levels-stars-total');
    const starsToast = document.getElementById('stars-reward-toast');
    const toastText = document.getElementById('toast-stars-text');

    // MÁQUINA DO CARROSSEL DE AVATARES
    const track = document.getElementById('carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const dotsContainer = document.getElementById('carousel-indicators');
    // DEFINIÇÕES E TAMANHO
    const settingsBtns = document.querySelectorAll('.btn-open-settings');
    const settingsOverlay = document.getElementById('settings-overlay');
    const btnCloseSettings = document.getElementById('btn-close-settings');
    const sizeBtns = document.querySelectorAll('.size-btn');
    
    const savedSize = localStorage.getItem('taskly_size') || 'large';
    applySizeConfig(savedSize);

    const toggleSound = document.getElementById('toggle-sound');
    const sliderVolume = document.getElementById('slider-volume');
    const volumeValueEl = document.getElementById('volume-value');
    const volumeRow = document.getElementById('volume-row');

    toggleSound.checked = soundEnabled;
    sliderVolume.value = Math.round(soundVolume * 100);
    volumeValueEl.textContent = `${Math.round(soundVolume * 100)}%`;
    if (!soundEnabled) volumeRow.classList.add('disabled');

    toggleSound.addEventListener('change', () => {
        soundEnabled = toggleSound.checked;
        localStorage.setItem('taskly_sound', soundEnabled);
        volumeRow.classList.toggle('disabled', !soundEnabled);
    });
    sliderVolume.addEventListener('input', () => {
        soundVolume = sliderVolume.value / 100;
        localStorage.setItem('taskly_volume', soundVolume);
        volumeValueEl.textContent = `${sliderVolume.value}%`;
    });
    settingsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            settingsOverlay.classList.remove('hidden');
        });
    });
    btnCloseSettings.addEventListener('click', () => {
        settingsOverlay.classList.add('hidden');
    });
    sizeBtns.forEach(btn => {
        if(btn.dataset.size === savedSize) {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', () => {
             sizeBtns.forEach(b => b.classList.remove('active'));
             btn.classList.add('active');
             applySizeConfig(btn.dataset.size);
        });
    });
    function applySizeConfig(sizeLevel) {
        document.body.className = sizeLevel === 'large' ? '' : `size-${sizeLevel}`;
        localStorage.setItem('taskly_size', sizeLevel);
    }
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

    function updateStarsUI() {
        headerStars.textContent = `⭐ ${tasklyStars}`;
        
        let nextThreshold = null;
        unlockedAvatares = 0;
        
        for (let i = 0; i < AVATAR_THRESHOLDS.length; i++) {
            if (tasklyStars >= AVATAR_THRESHOLDS[i]) {
                unlockedAvatares = i + 1;
            } else {
                if (nextThreshold === null) nextThreshold = AVATAR_THRESHOLDS[i];
            }
        }
        
        if (unlockedAvatares > 8) unlockedAvatares = 8;
        
        slides.forEach((slide, index) => {
            if (index < unlockedAvatares) {
                slide.classList.remove('locked');
            } else {
                slide.classList.add('locked');
            }
        });
        
        if (nextThreshold !== null) {
            progressContainer.style.display = 'flex';
            const prevThreshold = AVATAR_THRESHOLDS[unlockedAvatares - 1]; 
            const gainedInCurrentLevel = tasklyStars - prevThreshold;
            const neededForNext = nextThreshold - prevThreshold;
            const percentage = Math.min(100, (gainedInCurrentLevel / neededForNext) * 100) || 0;
            
            progressFill.style.width = `${percentage}%`;
            progressText.textContent = `${tasklyStars}/${nextThreshold} ⭐ para novo companheiro`;
        } else {
             progressContainer.style.display = 'flex';
             progressFill.style.width = '100%';
             progressText.textContent = `Todos os companheiros desbloqueados! ⭐`;
        }
    }
    
    updateStarsUI();

    function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        selectedAvatar = slides[currentSlide].dataset.avatar;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
        
        const isLocked = slides[currentSlide].classList.contains('locked');
        btnPlay.disabled = isLocked;
        btnPlay.style.opacity = isLocked ? '0.5' : '1';
        
        if (isLocked) {
             btnPlay.textContent = `Precisa de ${AVATAR_THRESHOLDS[currentSlide]} ⭐`;
        } else {
             btnPlay.textContent = 'Jogar';
        }
        
        if (!isLocked) {
            btnPlay.style.transform = 'scale(1.05)';
            setTimeout(() => {
                btnPlay.style.transform = 'scale(1)';
            }, 150);
        }
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
        btnConfirmContainer.classList.add('hidden');
        
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
        routine.steps.forEach((step, index) => {
            const card = document.createElement('div');
            card.classList.add('drag-card');
            card.dataset.id = index;

            if (typeof step === 'object' && step.img) {
                card.classList.add('drag-card--image');
                const img = document.createElement('img');
                img.src = step.img;
                img.alt = step.text;
                img.draggable = false;
                const label = document.createElement('span');
                label.className = 'drag-card-label';
                label.textContent = step.text;
                card.appendChild(img);
                card.appendChild(label);
            } else {
                card.textContent = typeof step === 'object' ? step.text : step;
            }

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
    
        startX = e.clientX;
        startY = e.clientY;
        card.setPointerCapture(e.pointerId);
        draggingElement = card;
    });
    card.addEventListener('pointermove', (e) => {
        if (draggingElement !== card) return;
    
        const dist = Math.sqrt(Math.pow(e.clientX - startX, 2) + Math.pow(e.clientY - startY, 2));
    
        if (dist > 5 && !isDragging) {
            isDragging = true;
        
            const rect = card.getBoundingClientRect();
            // Guardamos o tamanho exato para não encolher ao sair do container
            card.style.width = `${rect.width}px`;
            card.style.height = `${rect.height}px`;
            
            card.dataset.offsetX = e.clientX - rect.left;
            card.dataset.offsetY = e.clientY - rect.top;
            card.classList.add('dragging');
        
            if (card.parentElement.classList.contains('drag-slot')) {
                card.parentElement.dataset.slottedId = "";
                card.classList.remove('slotted');
                checkWinCondition();
            }
        }
        if (isDragging) {
            const x = e.clientX - parseFloat(card.dataset.offsetX);
            const y = e.clientY - parseFloat(card.dataset.offsetY);
        
            card.style.position = 'fixed';
            card.style.left = `${x}px`;
            card.style.top = `${y}px`;
            card.style.zIndex = "10000"; 
            // REMOVIDO: card.style.visibility = 'hidden' 
            // Graças ao 'pointer-events: none' no CSS, o elementFromPoint já ignora o card.
            const elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            
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
        }
    });
    card.addEventListener('pointerup', (e) => {
        if (draggingElement !== card) return;
        draggingElement = null;
        card.releasePointerCapture(e.pointerId);
    
        card.classList.remove('dragging');
        card.style.zIndex = "";
        card.style.position = ""; 
        card.style.width = ''; // Limpa o tamanho fixo
        card.style.height = '';
    
        if (isDragging) {
            if (currentSlotHover) {
                currentSlotHover.classList.remove('highlight');
                currentSlotHover.appendChild(card);
                currentSlotHover.dataset.slottedId = card.dataset.id;
                card.classList.add('slotted');
                
                card.style.left = '';
                checkWinCondition();
            } else {
                returnCardToHome(card);
                card.style.left = '';
                card.style.top = '';
                checkWinCondition();
            }
        } else {
            if (card.parentElement.classList.contains('drag-slot')) {
                card.parentElement.dataset.slottedId = "";
                card.classList.remove('slotted');
                returnCardToHome(card);
                checkWinCondition();
            }   
        }
        isDragging = false;
        currentSlotHover = null;
    });
}
    function checkWinCondition() {
        const slots = Array.from(document.querySelectorAll('.drag-slot'));
        const isFull = slots.every(s => s.children.length > 0);
        
        if (isFull) {
            btnConfirmContainer.classList.remove('hidden');
        } else {
            btnConfirmContainer.classList.add('hidden');
        }
    }

    btnConfirm.addEventListener('click', () => {
        const slots = Array.from(document.querySelectorAll('.drag-slot'));
        const isCorrect = slots.every(s => s.dataset.slottedId === s.dataset.stepIndex);
        
        if (isCorrect) {
            btnConfirmContainer.classList.add('hidden');
            playSuccessSound();
            createStarsAnimation();
            
            const starsAwarded = currentLevel + 2;
            const previousUnlocked = unlockedAvatares;
            
            tasklyStars += starsAwarded;
            localStorage.setItem('taskly_stars', tasklyStars);
            updateStarsUI();
            
            const currentUnlocked = unlockedAvatares;
            
            toastText.textContent = `+${starsAwarded} ⭐`;
            starsToast.classList.remove('hidden');
            starsToast.classList.add('show');
            
            setTimeout(() => {
                starsToast.classList.remove('show');
                starsToast.classList.add('hidden');
                
                if (currentUnlocked > previousUnlocked) {
                     showModal("Novo companheiro!", "Desbloqueaste um novo avatar especial no ecrã inicial!", [
                         {text: "Fantástico!", class: "primary-btn", action: nextRoutine }
                     ]);
                } else {
                     showModal("Muito bem!", "Completaste a rotina de forma perfeita.", [
                         {text: "Continuar", class: "primary-btn", action: nextRoutine }
                     ]);
                }
            }, 1800); // Wait for toastPop animation completion
        } else {
            btnConfirmContainer.classList.add('hidden');
            playErrorSound();

            slots.forEach(s => {
                if (s.firstElementChild) s.firstElementChild.classList.add('wobble');
            });

            setTimeout(() => {
                const cardsContainer = document.getElementById('cards-container');
                let allCards = Array.from(cardsContainer.children);

                slots.forEach(s => {
                    const card = s.firstElementChild;
                    if (card) {
                        card.classList.remove('wobble', 'slotted');
                        allCards.push(card);
                        s.dataset.slottedId = "";
                    }
                });

                allCards.sort(() => Math.random() - 0.5);
                cardsContainer.innerHTML = '';
                allCards.forEach((c, idx) => {
                    c.dataset.homeIndex = idx;
                    cardsContainer.appendChild(c);
                });
            }, 600);
        }
    });

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
    // AUDIO
    function playSuccessSound() {
        if (!soundEnabled) return;
        const audio = new Audio('sounds/Rotine__Completed.wav');
        audio.volume = soundVolume;
        audio.currentTime = 0;
        audio.play().catch(() => {});
    }
    function playErrorSound() {
        if (!soundEnabled) return;
        const audio = new Audio('sounds/Rotine_Incomplete.wav');
        audio.volume = soundVolume;
        audio.currentTime = 0;
        audio.play().catch(() => {});
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