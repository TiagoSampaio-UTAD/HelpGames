/* ══════════════════════════════════════════
   TASKLY – app.js  (versão híbrida + acessibilidade ASD)
   ══════════════════════════════════════════ */

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
        { title: "Escovar os dentes", steps: [
            { text: "Pegar na escova",         img: },  
            { text: "Colocar pasta de dentes", img: },
            { text: "Escovar os dentes",       img: },
            { text: "Limpar a boca",           img: }
        ] },
        { title: "Preparar a mochila", steps: [
            { text: "Abrir a mochila",             img: },
            { text: "Meter os cadernos e manuais", img: },
            { text: "Meter o estojo",              img: }, 
            { text: "Fechar a mochila",            img: }
        ]},
        { title: "Lavar a cara", steps: [
            { text: "Abrir a torneira", img: },
            { text: "Molhar a cara",    img: },
            { text: "Ensaboar a cara",  img: },
            { text: "Lavar e secar",    img: }
        ]},
        { title: "Ir para a cama", steps: [
            { text: "Vestir o pijama",   img: },
            { text: "Escovar os dentes", img: },
            { text: "Deitar",            img: },
            { text: "Apagar a luz",      img: }
        ]},
        { title: "Pôr a mesa", steps: [
            { text: "Pegar nos pratos",  img: },
            { text: "Colocar os pratos", img: },
            { text: "Pôr os talheres",   img: },
            { text: "Pôr os copos",      img: }
        ]}
    ],
    3: [
        { title: "Lavar o cabelo", steps: [
            { text: "Molhar o cabelo",          img: },
            { text: "Deitar champô na mão",     img: },
            { text: "Esfregar o cabelo",        img: },
            { text: "Tirar o champô do cabelo", img: },
            { text: "Secar com a toalha",       img: }
        ]},
        { title: "Tomar duche", steps: [
            { text: "Abrir o chuveiro",       img: },
            { text: "Molhar o corpo",         img: },
            { text: "Ensaboar o corpo",       img: },
            { text: "Tirar o sabão do corpo", img: },
            { text: "Fechar o chuveiro",      img: }
        ]},
        { title: "Lavar uma maçã", steps: [
            { text: "Pegar na maçã",        img: },
            { text: "Abrir a torneira",     img: },
            { text: "Lavar a maçã na água", img: },
            { text: "Fechar a torneira",    img: },
            { text: "Secar a maçã e comer", img: }
        ]},
        { title: "Aquecer o leite no micro-ondas", steps: [
            { text: "Abrir o micro-ondas",          img: },
            { text: "Pôr a caneca dentro",          img: },
            { text: "Fechar o micro-ondas",         img: },
            { text: "Carregar no botão para ligar", img: },
            { text: "Tirar a caneca quando apitar", img: }
        ]},
        { title: "Afiar um lápis", steps: [
            { text: "Pegar no lápis e no afia",         img: },
            { text: "Meter o lápis no buraco do afia",  img: },
            { text: "Rodar o lápis com a mão",          img: },
            { text: "Tirar o lápis do afia",            img: },
            { text: "Deitar o lixo do afia no caixote", img: }
        ]}
    ],
    4: [
        { title: "Preparar o lanche", steps: [
            { text: "Pegar no pão",        img: },
            { text: "Barrar com manteiga", img: },
            { text: "Meter o fiambre",     img: },
            { text: "Fechar o pão",        img: },
            { text: "Colocar no saco",     img: },
            { text: "Meter na mochila",    img: }
        ]},
        { title: "Rotina da manhã", steps: [
            { text: "Acordar",                img: },
            { text: "Ir à casa de banho",     img: },
            { text: "Lavar a cara",           img: },
            { text: "Escovar os dentes",      img: },
            { text: "Vestir-se",              img: },
            { text: "Tomar o pequeno-almoço", img: }
        ]},
        { title: "Ir à casa de banho", steps: [
            { text: "Baixar as calças e cuecas",    img: },
            { text: "Sentar na sanita",             img: },
            { text: "Fazer chichi ou cocó",         img: },
            { text: "Limpar com o papel higiénico", img: },
            { text: "Puxar o autoclismo",           img: },
            { text: "Vestir as cuecas e as calças", img: }
        ]},
        { title: "Beber sumo de pacote", steps: [
            { text: "Pegar no pacote",              img: },
            { text: "Tirar a palhinha",             img: },
            { text: "Tirar o plástico da palhinha", img: },
            { text: "Espetar a palhinha no buraco", img: },
            { text: "Pôr na boca",                  img: },
            { text: "Beber",                        img: }
        ]},
        { title: "Comer um iogurte", steps: [
            { text: "Pegar no iogurte",          img: },      
            { text:"Tirar a tampa",              img: },
            { text: "Pegar na colher",           img: },
            { text: "Meter a colher no iogurte", img: },
            { text: "Pôr na boca",               img: },
            { text: "Comer",                     img: }
        ]}
    ],
    5: [
        { title: "Jogar no tablet", steps: [
            { text: "Pegar no tablet",         img: },
            { text: "Ligar o ecrã",            img: },
            { text: "Carregar no jogo",        img: },
            { text: "Jogar o jogo",            img: },
            { text: "Fechar o jogo",           img: },
            { text: "Desligar o ecrã",         img: },
            { text: "Pousar o tablet na mesa", img: }
        ]},
        { title: "Rotina do almoço escolar", steps: [
            { text: "Lavar as mãos","Pegar no tabuleiro", img: },
            { text: "Escolher a refeição",                img: },
            { text: "Sentar à mesa",                      img: },
            { text: "Comer a sopa",                       img: },
            { text: "Comer o prato principal",            img: },
            { text: "Beber água",                         img: }
        ]},
        { title: "Dia de escola completo", steps: [
            { text: "Acordar",                    img: },          
            { text: "Tomar banho",                img: },
            { text: "Tomar o pequeno-almoço",     img: },
            { text: "Preparar a mochila",         img: },
            { text: "Ir para a escola",           img: },
            { text: "Chegar a casa",              img: },
            { text: "Fazer os trabalhos de casa", img: }
        ]},
        { title: "Preparar para sair à rua no frio", steps: [
            { text: "Pegar no casaco",       img: },
            { text:"Vestir o casaco",        img: },
            { text: "Fechar o fecho",        img: },
            { text: "Pôr o gorro na cabeça", img: },
            { text: "Abrir a porta da rua",  img: },
            { text: "Sair de casa",          img: },
            { text: "Fechar a porta",        img: }
        ]},
        { title: "Rotina completa da noite", steps: [
            { text: "Jantar",                       img: },
            { text: "Lavar as mãos",                img: },
            { text: "Tomar banho",                  img: },
            { text: "Vestir o pijama",              img: },
            { text: "Escovar os dentes",            img: },
            { text: "Preparar a roupa para amanhã", img: },
            { text: "Deitar",                       img: }
        ]}
    ]
};

document.addEventListener('DOMContentLoaded', () => {

    /* ══════════════════════════════
       ESTADO GLOBAL
    ══════════════════════════════ */
    let currentSlide        = 0;
    let selectedAvatar      = 'gatinho';
    let unlockedLevels      = [1];
    let currentLevel        = 1;
    let currentRoutineIndex = 0;
    let currentLevelData    = [];
    let tasklyStars         = parseInt(localStorage.getItem('taskly_stars')) || 0;
    let unlockedAvatares    = 1;
    let soundEnabled        = localStorage.getItem('taskly_sound') !== 'false';
    let soundVolume         = parseFloat(localStorage.getItem('taskly_volume') ?? '0.8');
    let lowStimMode         = localStorage.getItem('taskly_lowstim') === 'true';
    let userName            = localStorage.getItem('taskly_name') || '';
    const AVATAR_THRESHOLDS = [0, 15, 30, 50, 75, 100, 125, 150];

    // Teclado
    let keyboardMode     = false;
    let focusedCardIndex = 0;
    let focusedSlotIndex = 0;
    let flyInProgress    = false;

    /* ══════════════════════════════
       REFERÊNCIAS DOM
    ══════════════════════════════ */
    const screenWelcome = document.getElementById('screen-welcome');
    const screenHome    = document.getElementById('screen-home');
    const screenLevels  = document.getElementById('screen-levels');
    const screenGame    = document.getElementById('screen-game');

    const nameInputEl  = document.getElementById('name-input');
    const btnStart     = document.getElementById('btn-start');
    const nameHintText = document.getElementById('name-hint-text');
    const homeGreeting = document.getElementById('home-greeting');

    const btnPlay       = document.getElementById('btn-play');
    const btnBackLevels = document.getElementById('btn-back-levels');
    const btnBackGame   = document.getElementById('btn-back-game');

    const overlay        = document.getElementById('game-overlay');
    const modalTitle     = document.getElementById('modal-title');
    const modalText      = document.getElementById('modal-text');
    const modalButtons   = document.getElementById('modal-buttons');
    const modalCompanion = document.getElementById('modal-companion');
    const starsContainer = document.getElementById('stars-container');

    const btnConfirmContainer = document.getElementById('confirm-container');
    const btnConfirm          = document.getElementById('btn-confirm');

    const progressContainer = document.getElementById('stars-progress-container');
    const progressFill      = document.getElementById('stars-progress-fill');
    const progressText      = document.getElementById('stars-progress-text');
    const headerStars       = document.getElementById('levels-stars-total');
    const starsToast        = document.getElementById('stars-reward-toast');
    const toastText         = document.getElementById('toast-stars-text');

    const track         = document.getElementById('carousel-track');
    const slides        = Array.from(document.querySelectorAll('.carousel-slide'));
    const btnPrev       = document.getElementById('btn-prev');
    const btnNext       = document.getElementById('btn-next');
    const dotsContainer = document.getElementById('carousel-indicators');

    const settingsBtns        = document.querySelectorAll('.btn-open-settings');
    const settingsOverlay     = document.getElementById('settings-overlay');
    const btnCloseSettings    = document.getElementById('btn-close-settings');
    const btnCloseSettingsBot = document.getElementById('btn-close-settings-bottom');

    // Corrigido: classe correta é .size-pill-btn (não .size-btn)
    const sizePillBtns  = document.querySelectorAll('.size-pill-btn');

    // Corrigido: IDs corretos do HTML
    const soundToggleBtn = document.getElementById('sound-toggle');
    const volumeSlider   = document.getElementById('volume-slider');
    const volumeLabel    = document.getElementById('volume-label');
    const volumeRow      = document.getElementById('volume-row');
    const lowStimToggle  = document.getElementById('low-stim-toggle');

    const profileCard        = document.getElementById('profile-card');
    const profileNameDisplay = document.getElementById('profile-name-display');
    const profileNameInput   = document.getElementById('profile-name-input');

    const swatches = document.querySelectorAll('.swatch');

    const companionAvatar = document.getElementById('companion-mini-avatar');
    const speechBubble    = document.getElementById('companion-speech-bubble');
    const speechText      = document.getElementById('companion-speech-text');

    const btnHint = document.getElementById('btn-hint');

    /* ══════════════════════════════
       ECRÃ DE BOAS-VINDAS
    ══════════════════════════════ */
    if (userName) {
        screenWelcome.classList.remove('active');
        screenHome.classList.add('active');
        updateGreeting();
    }

    nameInputEl.addEventListener('input', () => {
        const val = nameInputEl.value.trim();
        btnStart.disabled = val.length === 0;
        nameHintText.textContent = val.length > 0
            ? `Olá, ${val}! 👋`
            : 'Escreve o teu nome para começar';
    });

    btnStart.addEventListener('click', () => {
        const name = nameInputEl.value.trim();
        if (!name) return;
        userName = name;
        localStorage.setItem('taskly_name', userName);
        updateGreeting();
        if (profileNameDisplay) profileNameDisplay.textContent = userName;
        screenWelcome.classList.remove('active');
        screenHome.classList.add('active');
    });

    function updateGreeting() {
        if (!homeGreeting) return;
        homeGreeting.textContent = userName
            ? `Olá, ${userName}! Escolhe o teu companheiro!`
            : 'Escolhe o teu companheiro!';
    }
    updateGreeting();

    /* ══════════════════════════════
       PERFIL NAS DEFINIÇÕES
    ══════════════════════════════ */
    if (profileNameDisplay) profileNameDisplay.textContent = userName || '—';

    if (profileCard && profileNameInput) {
        profileCard.addEventListener('click', () => {
            const hidden = profileNameInput.classList.contains('hidden');
            profileNameInput.classList.toggle('hidden', !hidden);
            if (hidden) { profileNameInput.value = userName; profileNameInput.focus(); }
        });
        profileNameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') profileNameInput.blur();
        });
        profileNameInput.addEventListener('blur', () => {
            const val = profileNameInput.value.trim();
            if (val) {
                userName = val;
                localStorage.setItem('taskly_name', userName);
                if (profileNameDisplay) profileNameDisplay.textContent = userName;
                updateGreeting();
            }
            profileNameInput.classList.add('hidden');
        });
    }

    /* ══════════════════════════════
       TAMANHO DOS ELEMENTOS
    ══════════════════════════════ */
    const savedSize = localStorage.getItem('taskly_size') || 'large';
    applySizeConfig(savedSize);

    sizePillBtns.forEach(btn => {
        if (btn.dataset.size === savedSize) {
            sizePillBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
        btn.addEventListener('click', () => {
            sizePillBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applySizeConfig(btn.dataset.size);
        });
    });

    function applySizeConfig(sizeLevel) {
        document.body.classList.remove('size-small', 'size-normal');
        if (sizeLevel !== 'large') document.body.classList.add(`size-${sizeLevel}`);
        localStorage.setItem('taskly_size', sizeLevel);
    }

    /* ══════════════════════════════
       PALETA DE CORES
    ══════════════════════════════ */
    const savedTheme = localStorage.getItem('taskly_theme') || 'default';
    applyTheme(savedTheme, false);

    swatches.forEach(sw => sw.addEventListener('click', () => applyTheme(sw.dataset.theme)));

    function applyTheme(theme, save = true) {
        const keep = [...document.body.classList].filter(c => c.startsWith('size-') || c === 'low-stim');
        document.body.className = keep.join(' ');
        if (theme !== 'default') document.body.classList.add(`theme-${theme}`);
        if (save) localStorage.setItem('taskly_theme', theme);
        swatches.forEach(s => s.classList.toggle('active', s.dataset.theme === theme));
    }

    /* ══════════════════════════════
       SOM
    ══════════════════════════════ */
    if (soundEnabled) soundToggleBtn.classList.add('active');
    soundToggleBtn.setAttribute('aria-checked', String(soundEnabled));
    volumeSlider.value = Math.round(soundVolume * 100);
    volumeLabel.textContent = `${Math.round(soundVolume * 100)}%`;
    if (!soundEnabled) volumeRow.classList.add('disabled');

    soundToggleBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        soundToggleBtn.classList.toggle('active', soundEnabled);
        soundToggleBtn.setAttribute('aria-checked', String(soundEnabled));
        localStorage.setItem('taskly_sound', soundEnabled);
        volumeRow.classList.toggle('disabled', !soundEnabled);
    });

    volumeSlider.addEventListener('input', () => {
        soundVolume = volumeSlider.value / 100;
        localStorage.setItem('taskly_volume', soundVolume);
        volumeLabel.textContent = `${volumeSlider.value}%`;
    });

    /* ══════════════════════════════
       MODO DE BAIXA ESTIMULAÇÃO
    ══════════════════════════════ */
    applyLowStim(lowStimMode, false);

    if (lowStimToggle) {
        lowStimToggle.addEventListener('click', () => {
            lowStimMode = !lowStimMode;
            applyLowStim(lowStimMode);
        });
    }

    function applyLowStim(enabled, save = true) {
        document.body.classList.toggle('low-stim', enabled);
        if (lowStimToggle) {
            lowStimToggle.classList.toggle('active', enabled);
            lowStimToggle.setAttribute('aria-checked', String(enabled));
        }
        if (save) localStorage.setItem('taskly_lowstim', enabled);
    }

    /* ══════════════════════════════
       DEFINIÇÕES – ABRIR / FECHAR
    ══════════════════════════════ */
    settingsBtns.forEach(btn => btn.addEventListener('click', () => settingsOverlay.classList.remove('hidden')));
    btnCloseSettings.addEventListener('click', () => settingsOverlay.classList.add('hidden'));
    if (btnCloseSettingsBot) btnCloseSettingsBot.addEventListener('click', () => settingsOverlay.classList.add('hidden'));

    /* ══════════════════════════════
       CARROSSEL DE AVATARES
    ══════════════════════════════ */
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.dataset.index = index;
        dot.addEventListener('click', () => { currentSlide = index; updateCarousel(); });
        dotsContainer.appendChild(dot);
    });
    const dots = Array.from(document.querySelectorAll('.dot'));

    function updateStarsUI() {
        if (headerStars) headerStars.textContent = `⭐ ${tasklyStars}`;
        let nextThreshold = null;
        unlockedAvatares = 0;
        for (let i = 0; i < AVATAR_THRESHOLDS.length; i++) {
            if (tasklyStars >= AVATAR_THRESHOLDS[i]) { unlockedAvatares = i + 1; }
            else if (nextThreshold === null)           { nextThreshold = AVATAR_THRESHOLDS[i]; }
        }
        if (unlockedAvatares > 8) unlockedAvatares = 8;
        slides.forEach((s, i) => s.classList.toggle('locked', i >= unlockedAvatares));
        if (progressContainer) {
            progressContainer.style.display = 'flex';
            if (nextThreshold !== null) {
                const prev = AVATAR_THRESHOLDS[unlockedAvatares - 1];
                const pct  = Math.min(100, ((tasklyStars - prev) / (nextThreshold - prev)) * 100) || 0;
                progressFill.style.width = `${pct}%`;
                progressText.textContent = `${tasklyStars}/${nextThreshold} ⭐ para novo companheiro`;
            } else {
                progressFill.style.width = '100%';
                progressText.textContent = 'Todos os companheiros desbloqueados! ⭐';
            }
        }
    }
    updateStarsUI();

    function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        selectedAvatar = slides[currentSlide].dataset.avatar;
        dots.forEach(d => d.classList.remove('active'));
        dots[currentSlide].classList.add('active');
        const locked = slides[currentSlide].classList.contains('locked');
        btnPlay.disabled = locked;
        btnPlay.style.opacity = locked ? '0.5' : '1';
        btnPlay.textContent   = locked ? `Precisa de ${AVATAR_THRESHOLDS[currentSlide]} ⭐` : 'Jogar ▶';
        if (!locked) {
            btnPlay.style.transform = 'scale(1.05)';
            setTimeout(() => { btnPlay.style.transform = 'scale(1)'; }, 150);
        }
    }

    btnNext.addEventListener('click', () => { currentSlide = (currentSlide + 1) % slides.length; updateCarousel(); });
    btnPrev.addEventListener('click', () => { currentSlide = (currentSlide - 1 + slides.length) % slides.length; updateCarousel(); });

    /* ══════════════════════════════
       NAVEGAÇÃO PRINCIPAL
    ══════════════════════════════ */
    btnPlay.disabled = false;

    btnPlay.addEventListener('click', () => {
        if (!selectedAvatar) return;
        setTimeout(() => { screenHome.classList.remove('active'); screenLevels.classList.add('active'); }, 150);
    });
    btnBackLevels.addEventListener('click', () => { screenLevels.classList.remove('active'); screenHome.classList.add('active'); });
    btnBackGame.addEventListener('click', () => {
        screenGame.classList.remove('active');
        screenLevels.classList.add('active');
        clearKeyboardFocus();
        keyboardMode = false;
        updateLevelLocksStatus();
    });

    /* ══════════════════════════════
       NÍVEIS
    ══════════════════════════════ */
    function updateLevelLocksStatus() {
        document.querySelectorAll('.level-card').forEach(card => {
            const lvl = parseInt(card.dataset.level);
            if (unlockedLevels.includes(lvl)) {
                card.classList.remove('locked'); card.classList.add('unlocked');
                card.querySelector('.level-status').innerHTML =
                    `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 12L10 17L20 7" stroke="#fbbf24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
            }
        });
    }

    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('locked')) return;
            startGame(parseInt(card.dataset.level));
        });
    });

    /* ══════════════════════════════
       INÍCIO DO JOGO
    ══════════════════════════════ */
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

        clearKeyboardFocus();
        keyboardMode     = false;
        focusedCardIndex = 0;
        focusedSlotIndex = 0;
        flyInProgress    = false;

        updateCompanionAvatar();

        // Slots
        for (let i = 0; i < routine.steps.length; i++) {
            const slot = document.createElement('div');
            slot.classList.add('drag-slot');
            slot.dataset.stepIndex   = i;
            slot.dataset.stepDisplay = i + 1;
            slot.dataset.slottedId   = '';
            slotsContainer.appendChild(slot);
        }

        // Cartões
        let cardsArr = [];
        routine.steps.forEach((step, index) => {
            const card = document.createElement('div');
            card.classList.add('drag-card');
            card.dataset.id = index;

            if (typeof step === 'object' && step.img) {
                card.classList.add('drag-card--image');
                const img   = document.createElement('img');
                img.src = step.img; img.alt = step.text; img.draggable = false;
                const label = document.createElement('span');
                label.className = 'drag-card-label'; label.textContent = step.text;
                card.appendChild(img); card.appendChild(label);
            } else {
                const label = document.createElement('span');
                label.className   = 'drag-card-label--text';
                label.textContent = typeof step === 'object' ? step.text : step;
                card.appendChild(label);
            }
            cardsArr.push(card);
        });

        cardsArr.sort(() => Math.random() - 0.5);
        cardsArr.forEach((card, idx) => {
            card.dataset.homeIndex = idx;
            cardsContainer.appendChild(card);
            setupDrag(card);
        });

        setTimeout(() => showEncouragement(`Vamos lá${userName ? ', ' + userName : ''}! 🚀`), 600);
    }

    function updateCompanionAvatar() {
        const slide = slides.find(s => s.dataset.avatar === selectedAvatar);
        if (!slide) return;
        const svgEl = slide.querySelector('svg');
        if (svgEl && companionAvatar) companionAvatar.innerHTML = svgEl.outerHTML;
        if (svgEl && modalCompanion)  modalCompanion.innerHTML  = svgEl.outerHTML;
    }

    /* ══════════════════════════════
       COMPANHEIRO: ENCORAJAMENTO
    ══════════════════════════════ */
    const ENCOURAGEMENTS = [
        (n) => `Estás quase lá${n ? ', ' + n : ''}! 💪`,
        ()  => 'Excelente escolha! ⭐',
        ()  => 'Que campeão! 🏆',
        (n) => `Muito bem${n ? ', ' + n : ''}! 🎉`,
        ()  => 'Continua assim! ✨',
        (n) => `Boa${n ? ', ' + n : ''}! 👏`,
        ()  => 'Isso mesmo! 🌟',
        ()  => 'Perfeito! Segue em frente! 🚀',
    ];

    function giveEncouragement() {
        const fn = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
        showEncouragement(fn(userName));
    }

    let _encourageTimer = null;
    function showEncouragement(msg) {
        if (!speechBubble || !speechText) return;
        speechText.textContent = msg;
        speechBubble.classList.remove('hidden');

        companionAvatar.classList.remove('bounce');
        void companionAvatar.offsetWidth;
        companionAvatar.classList.add('bounce');
        companionAvatar.addEventListener('animationend', () => companionAvatar.classList.remove('bounce'), { once: true });

        clearTimeout(_encourageTimer);
        _encourageTimer = setTimeout(() => speechBubble.classList.add('hidden'), 2800);
    }

    /* ══════════════════════════════
       BOTÃO DE DICA (💡)
    ══════════════════════════════ */
    if (btnHint) btnHint.addEventListener('click', showHint);

    let _hintTimer = null;
    function showHint() {
        clearHints();
        const cardsContainer = document.getElementById('cards-container');
        if (!cardsContainer) return;
        const cards = Array.from(cardsContainer.querySelectorAll('.drag-card'));
        if (cards.length === 0) return;

        const hintCard = cards[0];
        const targetIdx = parseInt(hintCard.dataset.id);
        const allSlots  = Array.from(document.querySelectorAll('.drag-slot'));
        const hintSlot  = allSlots.find(s => parseInt(s.dataset.stepIndex) === targetIdx && !s.firstElementChild);

        if (hintCard) hintCard.classList.add('hint-target');
        if (hintSlot) hintSlot.classList.add('hint-target');

        showEncouragement('Tenta este passo a seguir! 💡');
        clearTimeout(_hintTimer);
        _hintTimer = setTimeout(clearHints, 3200);
    }

    function clearHints() {
        document.querySelectorAll('.hint-target').forEach(el => el.classList.remove('hint-target'));
    }

    /* ══════════════════════════════
       NAVEGAÇÃO POR TECLADO
       ← → cartões  |  ↑ ↓ slots  |  Enter colocar
    ══════════════════════════════ */
    document.addEventListener('keydown', (e) => {
        if (!screenGame.classList.contains('active')) return;
        if (!overlay.classList.contains('hidden'))   return;
        if (flyInProgress) return;

        const cardsContainer = document.getElementById('cards-container');
        if (!cardsContainer) return;
        const playableCards = Array.from(cardsContainer.querySelectorAll('.drag-card'));
        const allSlots      = Array.from(document.querySelectorAll('.drag-slot'));

        switch (e.key) {
            case 'ArrowLeft':
            case 'ArrowRight': {
                e.preventDefault();
                if (!playableCards.length) return;
                keyboardMode = true;
                focusedCardIndex = (focusedCardIndex + (e.key === 'ArrowRight' ? 1 : -1) + playableCards.length) % playableCards.length;
                updateKeyboardFocus(playableCards, allSlots);
                break;
            }
            case 'ArrowUp':
            case 'ArrowDown': {
                e.preventDefault();
                if (!allSlots.length) return;
                keyboardMode = true;
                focusedSlotIndex = (focusedSlotIndex + (e.key === 'ArrowDown' ? 1 : -1) + allSlots.length) % allSlots.length;
                updateKeyboardFocus(playableCards, allSlots);
                break;
            }
            case 'Enter': {
                e.preventDefault();
                if (!keyboardMode) {
                    // Primeira vez: activa modo teclado
                    keyboardMode = true;
                    focusedCardIndex = 0;
                    focusedSlotIndex = 0;
                    updateKeyboardFocus(playableCards, allSlots);
                    showEncouragement('Usa ← → para cartões, ↑ ↓ para slots! ⌨️');
                    return;
                }
                if (!playableCards.length) return;
                const card = playableCards[focusedCardIndex];
                const slot = allSlots[focusedSlotIndex];
                if (!card || !slot) return;
                if (slot.firstElementChild) {
                    showEncouragement('Este slot já está preenchido! Escolhe outro. 👆');
                    return;
                }
                flyCardToSlot(card, slot);
                break;
            }
            case 'Escape':
                clearKeyboardFocus();
                keyboardMode = false;
                break;
        }
    });

    function updateKeyboardFocus(playableCards, allSlots) {
        clearKeyboardFocus();
        if (playableCards[focusedCardIndex]) playableCards[focusedCardIndex].classList.add('element-focused');
        if (allSlots[focusedSlotIndex])      allSlots[focusedSlotIndex].classList.add('element-focused');
    }

    function clearKeyboardFocus() {
        document.querySelectorAll('.element-focused').forEach(el => el.classList.remove('element-focused'));
    }

    /* ══════════════════════════════
       ANIMAÇÃO "VÔO" DO CARTÃO
    ══════════════════════════════ */
    function flyCardToSlot(card, slot) {
        if (flyInProgress) return;
        flyInProgress = true;
        clearKeyboardFocus();
        clearHints();

        const cardRect = card.getBoundingClientRect();
        const slotRect = slot.getBoundingClientRect();

        // Ghost posicionado como fixed, por cima de tudo
        const ghost = card.cloneNode(true);
        ghost.classList.remove('element-focused', 'hint-target', 'slotted');
        ghost.style.cssText = [
            `position:fixed`,
            `left:${cardRect.left}px`,
            `top:${cardRect.top}px`,
            `width:${cardRect.width}px`,
            `height:${cardRect.height}px`,
            `margin:0`,
            `pointer-events:none`,
            `z-index:10000`,
            `transition:none`,
            `border-radius:18px`,
            `box-shadow:0 10px 28px rgba(0,0,0,.18)`,
        ].join(';');
        document.body.appendChild(ghost);
        card.style.visibility = 'hidden';

        requestAnimationFrame(() => requestAnimationFrame(() => {
            ghost.style.transition =
                'left .42s cubic-bezier(.4,0,.2,1),top .42s cubic-bezier(.4,0,.2,1),' +
                'width .42s cubic-bezier(.4,0,.2,1),height .42s cubic-bezier(.4,0,.2,1),' +
                'opacity .35s ease,transform .42s ease';
            ghost.style.left      = `${slotRect.left}px`;
            ghost.style.top       = `${slotRect.top}px`;
            ghost.style.width     = `${slotRect.width}px`;
            ghost.style.height    = `${slotRect.height}px`;
            ghost.style.transform = 'scale(0.93)';
            ghost.style.opacity   = '0.7';
        }));

        setTimeout(() => {
            ghost.remove();
            card.style.visibility = '';

            if (card.parentElement) card.parentElement.removeChild(card);

            slot.appendChild(card);
            slot.dataset.slottedId = card.dataset.id;
            card.classList.add('slotted');

            flyInProgress = false;
            checkWinCondition();
            giveEncouragement();

            // Actualiza foco para o próximo cartão/slot
            setTimeout(() => {
                const cc   = document.getElementById('cards-container');
                const rem  = Array.from(cc?.querySelectorAll('.drag-card') || []);
                const slt  = Array.from(document.querySelectorAll('.drag-slot'));
                if (rem.length > 0) {
                    focusedCardIndex = Math.min(focusedCardIndex, rem.length - 1);
                    const ne = slt.findIndex((s, i) => i !== focusedSlotIndex && !s.firstElementChild);
                    if (ne !== -1) focusedSlotIndex = ne;
                    if (keyboardMode) updateKeyboardFocus(rem, slt);
                } else {
                    clearKeyboardFocus();
                }
            }, 50);
        }, 460);
    }

    /* ══════════════════════════════
       DRAG & DROP (Pointer Events)
    ══════════════════════════════ */
    let draggingElement  = null;
    let currentSlotHover = null;

    function setupDrag(card) {
        let isDragging = false;
        let startX = 0, startY = 0;

        card.addEventListener('pointerdown', (e) => {
            if (!e.isPrimary) return;
            if (keyboardMode) { clearKeyboardFocus(); keyboardMode = false; }
            startX = e.clientX; startY = e.clientY;
            card.setPointerCapture(e.pointerId);
            draggingElement = card;
        });

        card.addEventListener('pointermove', (e) => {
            if (draggingElement !== card) return;
            const dist = Math.hypot(e.clientX - startX, e.clientY - startY);

            if (dist > 5 && !isDragging) {
                isDragging = true;
                const rect = card.getBoundingClientRect();
                card.style.width  = `${rect.width}px`;
                card.style.height = `${rect.height}px`;
                card.dataset.offsetX = e.clientX - rect.left;
                card.dataset.offsetY = e.clientY - rect.top;
                card.classList.add('dragging');

                if (card.parentElement?.classList.contains('drag-slot')) {
                    card.parentElement.dataset.slottedId = '';
                    card.classList.remove('slotted');
                    checkWinCondition();
                }
            }

            if (isDragging) {
                card.style.position = 'fixed';
                card.style.left     = `${e.clientX - parseFloat(card.dataset.offsetX)}px`;
                card.style.top      = `${e.clientY - parseFloat(card.dataset.offsetY)}px`;
                card.style.zIndex   = '10000';

                const elemBelow = document.elementFromPoint(e.clientX, e.clientY);
                document.querySelectorAll('.drag-slot').forEach(s => s.classList.remove('highlight'));
                currentSlotHover = null;

                if (elemBelow) {
                    const slot = elemBelow.closest('.drag-slot');
                    // Brilho suave apenas em slots VAZIOS
                    if (slot && !slot.firstElementChild) {
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
            card.style.zIndex = ''; card.style.position = '';
            card.style.width  = ''; card.style.height   = '';

            if (isDragging) {
                if (currentSlotHover) {
                    currentSlotHover.classList.remove('highlight');
                    currentSlotHover.appendChild(card);
                    currentSlotHover.dataset.slottedId = card.dataset.id;
                    card.classList.add('slotted');
                    card.style.left = '';
                    checkWinCondition();
                    giveEncouragement();
                } else {
                    returnCardToHome(card);
                    card.style.left = ''; card.style.top = '';
                    checkWinCondition();
                }
            } else {
                if (card.parentElement?.classList.contains('drag-slot')) {
                    card.parentElement.dataset.slottedId = '';
                    card.classList.remove('slotted');
                    returnCardToHome(card);
                    checkWinCondition();
                }
            }
            isDragging = false; currentSlotHover = null;
        });
    }

    function returnCardToHome(card) {
        const cardsContainer = document.getElementById('cards-container');
        const homeIndex = parseInt(card.dataset.homeIndex);
        const children  = Array.from(cardsContainer.children);
        let inserted = false;
        for (const child of children) {
            if (parseInt(child.dataset.homeIndex) > homeIndex) {
                cardsContainer.insertBefore(card, child);
                inserted = true; break;
            }
        }
        if (!inserted) cardsContainer.appendChild(card);
    }

    /* ══════════════════════════════
       VERIFICAÇÃO DE VITÓRIA
    ══════════════════════════════ */
    function checkWinCondition() {
        const slots  = Array.from(document.querySelectorAll('.drag-slot'));
        const isFull = slots.every(s => s.children.length > 0);
        btnConfirmContainer.classList.toggle('hidden', !isFull);
    }

    /* ══════════════════════════════
       BOTÃO VERIFICAR
    ══════════════════════════════ */
    btnConfirm.addEventListener('click', () => {
        const slots     = Array.from(document.querySelectorAll('.drag-slot'));
        const isCorrect = slots.every(s => String(s.dataset.slottedId) === String(s.dataset.stepIndex));

        if (isCorrect) {
            btnConfirmContainer.classList.add('hidden');
            clearKeyboardFocus(); keyboardMode = false;
            playSuccessSound();
            createStarsAnimation();

            const starsAwarded     = currentLevel + 2;
            const previousUnlocked = unlockedAvatares;
            tasklyStars += starsAwarded;
            localStorage.setItem('taskly_stars', tasklyStars);
            updateStarsUI();
            const currentUnlocked = unlockedAvatares;

            toastText.textContent = `+${starsAwarded} ⭐`;
            starsToast.classList.remove('hidden'); starsToast.classList.add('show');

            setTimeout(() => {
                starsToast.classList.remove('show'); starsToast.classList.add('hidden');
                if (currentUnlocked > previousUnlocked) {
                    showModal('Novo companheiro!', 'Desbloqueaste um novo avatar especial no ecrã inicial!',
                        [{ text: 'Fantástico!', class: 'primary-btn', action: nextRoutine }]);
                } else {
                    showModal('Muito bem! 🌟', 'Completaste a rotina de forma perfeita.',
                        [{ text: 'Continuar', class: 'primary-btn', action: nextRoutine }]);
                }
            }, 1800);

        } else {
            btnConfirmContainer.classList.add('hidden');
            playErrorSound();

            slots.forEach(s => { if (s.firstElementChild) s.firstElementChild.classList.add('wobble'); });
            showEncouragement(`Quase! Tenta novamente${userName ? ', ' + userName : ''}! 💪`);

            setTimeout(() => {
                const cardsContainer = document.getElementById('cards-container');
                let allCards = Array.from(cardsContainer.children);
                slots.forEach(s => {
                    const card = s.firstElementChild;
                    if (card) { card.classList.remove('wobble', 'slotted'); allCards.push(card); s.dataset.slottedId = ''; }
                });
                allCards.sort(() => Math.random() - 0.5);
                cardsContainer.innerHTML = '';
                allCards.forEach((c, idx) => { c.dataset.homeIndex = idx; cardsContainer.appendChild(c); });

                focusedCardIndex = 0; focusedSlotIndex = 0;
                if (keyboardMode) {
                    updateKeyboardFocus(
                        Array.from(cardsContainer.querySelectorAll('.drag-card')),
                        Array.from(document.querySelectorAll('.drag-slot'))
                    );
                }
            }, 650);
        }
    });

    /* ══════════════════════════════
       MODAL
    ══════════════════════════════ */
    function showModal(title, text, buttons) {
        modalTitle.textContent = title;
        modalText.textContent  = text;
        modalButtons.innerHTML = '';
        updateCompanionAvatar();
        buttons.forEach(b => {
            const btn = document.createElement('button');
            btn.className = b.class; btn.textContent = b.text;
            btn.addEventListener('click', b.action);
            modalButtons.appendChild(btn);
        });
        overlay.classList.remove('hidden');
    }

    function hideModal() { overlay.classList.add('hidden'); }

    function nextRoutine() {
        hideModal();
        currentRoutineIndex++;
        if (currentRoutineIndex < currentLevelData.length) {
            loadRoutine();
        } else {
            if (!unlockedLevels.includes(currentLevel + 1)) unlockedLevels.push(currentLevel + 1);
            const hasNext = !!LEVELS_DATA[currentLevel + 1];
            if (hasNext) {
                showModal('Nível Completo! 🏅', 'Queres tentar o próximo nível?', [
                    { text: 'Repetir Nível', class: 'secondary-btn', action: () => { hideModal(); currentRoutineIndex = 0; loadRoutine(); } },
                    { text: 'Avançar',       class: 'primary-btn',   action: () => { hideModal(); startGame(currentLevel + 1); } }
                ]);
            } else {
                showModal('Fantástico! 🌈', 'Completaste todas as tarefas disponíveis!', [
                    { text: 'Voltar aos Níveis', class: 'secondary-btn', action: () => { hideModal(); screenGame.classList.remove('active'); screenLevels.classList.add('active'); updateLevelLocksStatus(); } },
                    { text: 'Repetir Nível',     class: 'primary-btn',   action: () => { hideModal(); currentRoutineIndex = 0; loadRoutine(); } }
                ]);
            }
        }
    }

    /* ══════════════════════════════
       ÁUDIO
       Sons suaves e graves — nunca agudos/estridentes
    ══════════════════════════════ */
    function playSuccessSound() {
        if (!soundEnabled) return;
        try {
            const a = new Audio('sounds/Rotine__Completed.wav');
            a.volume = soundVolume;
            a.play().catch(() => playSuccessBeep());
        } catch (_) { playSuccessBeep(); }
    }

    function playSuccessBeep() {
        try {
            const ctx  = new (window.AudioContext || window.webkitAudioContext)();
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523, ctx.currentTime);
            osc.frequency.setValueAtTime(659, ctx.currentTime + 0.15);
            osc.frequency.setValueAtTime(784, ctx.currentTime + 0.30);
            gain.gain.setValueAtTime(soundVolume * 0.4, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);
            osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.55);
        } catch (_) {}
    }

    function playErrorSound() {
        if (!soundEnabled) return;
        // Som grave suave: 200 Hz → 80 Hz, volume baixo
        try {
            const ctx  = new (window.AudioContext || window.webkitAudioContext)();
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(200, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.35);
            gain.gain.setValueAtTime(soundVolume * 0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
            osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.45);
        } catch (_) {
            try { const a = new Audio('sounds/Rotine_Incomplete.wav'); a.volume = soundVolume * 0.35; a.play().catch(() => {}); } catch (__) {}
        }
    }

    /* ══════════════════════════════
       ANIMAÇÃO DE ESTRELAS
    ══════════════════════════════ */
    function createStarsAnimation() {
        if (lowStimMode) return;
        starsContainer.innerHTML = '';
        starsContainer.classList.remove('hidden');
        for (let i = 0; i < 15; i++) {
            const star = document.createElement('div');
            star.className = 'floating-star';
            star.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="#fbbf24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>`;
            star.style.setProperty('--rx', `${(Math.random() - 0.5) * 300}px`);
            star.style.setProperty('--ry', `${(Math.random() - 0.5) * 300}px`);
            star.style.animationDelay = `${Math.random() * 0.2}s`;
            starsContainer.appendChild(star);
        }
        setTimeout(() => { starsContainer.classList.add('hidden'); starsContainer.innerHTML = ''; }, 1500);
    }

}); // fim DOMContentLoaded
