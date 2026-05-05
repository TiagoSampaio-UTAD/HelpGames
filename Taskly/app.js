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
            { text: "Pegar na escova" }, { text: "Colocar pasta de dentes" },
            { text: "Escovar os dentes" }, { text: "Limpar a boca" }
        ]},
        { title: "Preparar a mochila", steps: [
            { text: "Abrir a mochila" }, { text: "Meter os cadernos e manuais" },
            { text: "Meter o estojo" }, { text: "Fechar a mochila" }
        ]},
        { title: "Lavar a cara", steps: [
            { text: "Abrir a torneira" }, { text: "Molhar a cara" },
            { text: "Ensaboar a cara" }, { text: "Lavar e secar" }
        ]},
        { title: "Ir para a cama", steps: [
            { text: "Vestir o pijama" }, { text: "Escovar os dentes" },
            { text: "Deitar" }, { text: "Apagar a luz" }
        ]},
        { title: "Pôr a mesa", steps: [
            { text: "Pegar nos pratos" }, { text: "Colocar os pratos" },
            { text: "Pôr os talheres" }, { text: "Pôr os copos" }
        ]}
    ],
    3: [
        { title: "Lavar o cabelo", steps: [
            { text: "Molhar o cabelo" }, { text: "Deitar champô na mão" },
            { text: "Esfregar o cabelo" }, { text: "Tirar o champô do cabelo" }, { text: "Secar com a toalha" }
        ]},
        { title: "Tomar duche", steps: [
            { text: "Abrir o chuveiro" }, { text: "Molhar o corpo" },
            { text: "Ensaboar o corpo" }, { text: "Tirar o sabão do corpo" }, { text: "Fechar o chuveiro" }
        ]},
        { title: "Lavar uma maçã", steps: [
            { text: "Pegar na maçã" }, { text: "Abrir a torneira" },
            { text: "Lavar a maçã na água" }, { text: "Fechar a torneira" }, { text: "Secar a maçã e comer" }
        ]},
        { title: "Aquecer o leite no micro-ondas", steps: [
            { text: "Abrir o micro-ondas" }, { text: "Pôr a caneca dentro" },
            { text: "Fechar o micro-ondas" }, { text: "Carregar no botão para ligar" }, { text: "Tirar a caneca quando apitar" }
        ]},
        { title: "Afiar um lápis", steps: [
            { text: "Pegar no lápis e no afia" }, { text: "Meter o lápis no buraco do afia" },
            { text: "Rodar o lápis com a mão" }, { text: "Tirar o lápis do afia" }, { text: "Deitar o lixo do afia no caixote" }
        ]}
    ],
    4: [
        { title: "Preparar o lanche", steps: [
            { text: "Pegar no pão" }, { text: "Barrar com manteiga" }, { text: "Meter o fiambre" },
            { text: "Fechar o pão" }, { text: "Colocar no saco" }, { text: "Meter na mochila" }
        ]},
        { title: "Rotina da manhã", steps: [
            { text: "Acordar" }, { text: "Ir à casa de banho" }, { text: "Lavar a cara" },
            { text: "Escovar os dentes" }, { text: "Vestir-se" }, { text: "Tomar o pequeno-almoço" }
        ]},
        { title: "Ir à casa de banho", steps: [
            { text: "Baixar as calças e cuecas" }, { text: "Sentar na sanita" }, { text: "Fazer chichi ou cocó" },
            { text: "Limpar com o papel higiénico" }, { text: "Puxar o autoclismo" }, { text: "Vestir as cuecas e as calças" }
        ]},
        { title: "Beber sumo de pacote", steps: [
            { text: "Pegar no pacote" }, { text: "Tirar a palhinha" }, { text: "Tirar o plástico da palhinha" },
            { text: "Espetar a palhinha no buraco" }, { text: "Pôr na boca" }, { text: "Beber" }
        ]},
        { title: "Comer um iogurte", steps: [
            { text: "Pegar no iogurte" }, { text: "Tirar a tampa" }, { text: "Pegar na colher" },
            { text: "Meter a colher no iogurte" }, { text: "Pôr na boca" }, { text: "Comer" }
        ]}
    ],
    5: [
        { title: "Jogar no tablet", steps: [
            { text: "Pegar no tablet" }, { text: "Ligar o ecrã" }, { text: "Carregar no jogo" },
            { text: "Jogar o jogo" }, { text: "Fechar o jogo" }, { text: "Desligar o ecrã" }, { text: "Pousar o tablet na mesa" }
        ]},
        { title: "Rotina do almoço escolar", steps: [
            { text: "Lavar as mãos" }, { text: "Pegar no tabuleiro" }, { text: "Escolher a refeição" },
            { text: "Sentar à mesa" }, { text: "Comer a sopa" }, { text: "Comer o prato principal" }, { text: "Beber água" }
        ]},
        { title: "Dia de escola completo", steps: [
            { text: "Acordar" }, { text: "Tomar banho" }, { text: "Tomar o pequeno-almoço" },
            { text: "Preparar a mochila" }, { text: "Ir para a escola" }, { text: "Chegar a casa" }, { text: "Fazer os trabalhos de casa" }
        ]},
        { title: "Preparar para sair à rua no frio", steps: [
            { text: "Pegar no casaco" }, { text: "Vestir o casaco" }, { text: "Fechar o fecho" },
            { text: "Pôr o gorro na cabeça" }, { text: "Abrir a porta da rua" }, { text: "Sair de casa" }, { text: "Fechar a porta" }
        ]},
        { title: "Rotina completa da noite", steps: [
            { text: "Jantar" }, { text: "Lavar as mãos" }, { text: "Tomar banho" },
            { text: "Vestir o pijama" }, { text: "Escovar os dentes" }, { text: "Preparar a roupa para amanhã" }, { text: "Deitar" }
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

    let tasklyStars      = parseInt(localStorage.getItem('taskly_stars')) || 0;
    let unlockedAvatares = 1;
    let soundEnabled     = localStorage.getItem('taskly_sound') !== 'false';
    let soundVolume      = parseFloat(localStorage.getItem('taskly_volume') ?? '0.8');
    let lowStimMode      = localStorage.getItem('taskly_lowstim') === 'true';
    let userName         = localStorage.getItem('taskly_name') || '';

    const AVATAR_THRESHOLDS = [0, 15, 30, 50, 75, 100, 125, 150];

    // Teclado
    let keyboardMode     = false;
    let focusedCardIndex = 0;
    let focusedSlotIndex = 0;
    let flyInProgress    = false;

    // Erros consecutivos
    let consecutiveErrors = 0;

    // Rotinas concluídas por nível: { "1": [0, 2], "2": [0], ... }
    let completedRoutines = JSON.parse(localStorage.getItem('taskly_completed') || '{}');

    // Timer de sessão
    let sessionTime     = 900; // 15 minutos em segundos
    let sessionInterval = null;
    let sessionExtended = false;

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

    const sizePillBtns = document.querySelectorAll('.size-pill-btn');

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

    const screenRoutines     = document.getElementById('screen-routines');
    const routinesLevelTitle = document.getElementById('routines-level-title');
    const routinesList       = document.getElementById('routines-list');
    const btnBackRoutines    = document.getElementById('btn-back-routines');
    const routinesTimerPill  = document.getElementById('routines-timer-pill');
    const routinesTimerText  = document.getElementById('routines-timer-text');
    const routinesStars      = document.getElementById('routines-stars-total');

    const homeTimerPill   = document.getElementById('home-timer-pill');
    const levelsTimerPill = document.getElementById('levels-timer-pill');
    const gameTimerPill   = document.getElementById('game-timer-pill');
    const homeTimerText   = document.getElementById('home-timer-text');
    const levelsTimerText = document.getElementById('levels-timer-text');
    const gameTimerText   = document.getElementById('game-timer-text');

    const timerWarningToast = document.getElementById('timer-warning-toast');
    const timerWarningText  = document.getElementById('timer-warning-text');
    const timeUpOverlay     = document.getElementById('time-up-overlay');
    const btnTimeContinue   = document.getElementById('btn-time-continue');
    const btnTimeStop       = document.getElementById('btn-time-stop');

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
       TIMER DE SESSÃO
    ══════════════════════════════ */
    function startSessionTimer() {
        if (sessionInterval) return;
        updateTimerDisplay();
        sessionInterval = setInterval(() => {
            sessionTime--;
            updateTimerDisplay();
            if (sessionTime === 300 && !sessionExtended) showTimerWarning('⏱ Faltam 5 minutos!', false);
            if (sessionTime === 60)                       showTimerWarning('⏱ Falta 1 minuto!', true);
            if (sessionTime <= 0)                         showTimeUp();
        }, 1000);
    }

    function updateTimerDisplay() {
        const m    = Math.floor(Math.max(sessionTime, 0) / 60).toString().padStart(2, '0');
        const s    = (Math.max(sessionTime, 0) % 60).toString().padStart(2, '0');
        const text = `${m}:${s}`;
        if (homeTimerText)     homeTimerText.textContent     = text;
        if (levelsTimerText)   levelsTimerText.textContent   = text;
        if (routinesTimerText) routinesTimerText.textContent = text;
        if (gameTimerText)     gameTimerText.textContent     = text;

        const pills = [homeTimerPill, levelsTimerPill, routinesTimerPill, gameTimerPill].filter(Boolean);
        pills.forEach(p => {
            p.classList.remove('warning', 'urgent');
            if (sessionTime <= 60)       p.classList.add('urgent');
            else if (sessionTime <= 300) p.classList.add('warning');
        });
    }

    let _warningTimer = null;
    function showTimerWarning(msg, isUrgent) {
        if (!timerWarningToast) return;
        timerWarningText.textContent = msg;
        timerWarningToast.classList.remove('hidden', 'urgent');
        if (isUrgent) timerWarningToast.classList.add('urgent');
        clearTimeout(_warningTimer);
        _warningTimer = setTimeout(() => timerWarningToast.classList.add('hidden'), 4000);
    }

    function showTimeUp() {
        clearInterval(sessionInterval);
        sessionInterval = null;
        if (timeUpOverlay) timeUpOverlay.classList.remove('hidden');
    }

    if (btnTimeContinue) {
        btnTimeContinue.addEventListener('click', () => {
            sessionTime     = 300; // +5 minutos
            sessionExtended = true;
            timeUpOverlay.classList.add('hidden');
            updateTimerDisplay();
            sessionInterval = setInterval(() => {
                sessionTime--;
                updateTimerDisplay();
                if (sessionTime === 60) showTimerWarning('⏱ Falta 1 minuto!', true);
                if (sessionTime <= 0)   showTimeUp();
            }, 1000);
        });
    }

    if (btnTimeStop) {
        btnTimeStop.addEventListener('click', () => {
            timeUpOverlay.classList.add('hidden');
            // Volta ao ecrã inicial
            screenGame.classList.remove('active');
            screenLevels.classList.remove('active');
            screenHome.classList.add('active');
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
        if (headerStars)   headerStars.textContent   = `⭐ ${tasklyStars}`;
        if (routinesStars) routinesStars.textContent = `⭐ ${tasklyStars}`;

        let nextThreshold = null;
        unlockedAvatares  = 0;

        for (let i = 0; i < AVATAR_THRESHOLDS.length; i++) {
            if (tasklyStars >= AVATAR_THRESHOLDS[i]) {
                unlockedAvatares = i + 1;
            } else if (nextThreshold === null) {
                nextThreshold = AVATAR_THRESHOLDS[i];
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

        if (progressContainer) {
            progressContainer.style.display = 'flex';
            if (nextThreshold !== null) {
                const prevThreshold       = AVATAR_THRESHOLDS[unlockedAvatares - 1];
                const gainedInCurrentLevel = tasklyStars - prevThreshold;
                const neededForNext        = nextThreshold - prevThreshold;
                const percentage = Math.min(100, (gainedInCurrentLevel / neededForNext) * 100) || 0;
                progressFill.style.width = `${percentage}%`;
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
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');

        const isLocked = slides[currentSlide].classList.contains('locked');
        btnPlay.disabled     = isLocked;
        btnPlay.style.opacity = isLocked ? '0.5' : '1';
        btnPlay.textContent   = isLocked ? `Precisa de ${AVATAR_THRESHOLDS[currentSlide]} ⭐` : 'Jogar ▶';

        if (!isLocked) {
            btnPlay.style.transform = 'scale(1.05)';
            setTimeout(() => { btnPlay.style.transform = 'scale(1)'; }, 150);
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

    /* ══════════════════════════════
       NAVEGAÇÃO PRINCIPAL
    ══════════════════════════════ */
    btnPlay.addEventListener('click', () => {
        if (!selectedAvatar) return;
        startSessionTimer();
        setTimeout(() => {
            screenHome.classList.remove('active');
            screenLevels.classList.add('active');
        }, 150);
    });

    btnBackLevels.addEventListener('click', () => {
        screenLevels.classList.remove('active');
        screenHome.classList.add('active');
    });

    btnBackRoutines.addEventListener('click', () => {
        screenRoutines.classList.remove('active');
        screenLevels.classList.add('active');
        updateLevelLocksStatus();
    });

    btnBackGame.addEventListener('click', () => {
        screenGame.classList.remove('active');
        clearKeyboardFocus();
        keyboardMode = false;
        showRoutinesScreen(currentLevel);
    });

    /* ══════════════════════════════
       NÍVEIS
    ══════════════════════════════ */
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
            showRoutinesScreen(lvl);
        });
    });

    /* ══════════════════════════════
       INÍCIO DO JOGO
    ══════════════════════════════ */
    function startGame(levelNumber, routineIndex = 0) {
        currentLevel        = levelNumber;
        currentLevelData    = LEVELS_DATA[currentLevel];
        currentRoutineIndex = routineIndex;
        screenRoutines.classList.remove('active');
        screenLevels.classList.remove('active');
        screenGame.classList.add('active');
        loadRoutine();
    }

    function showRoutinesScreen(levelNumber) {
        currentLevel     = levelNumber;
        currentLevelData = LEVELS_DATA[currentLevel];

        routinesLevelTitle.textContent = `Nível ${currentLevel}`;
        routinesList.innerHTML = '';

        const completed = completedRoutines[currentLevel] || [];

        currentLevelData.forEach((routine, idx) => {
            const isCompleted = completed.includes(idx);
            const isAvailable = idx === 0 || completed.includes(idx - 1);

            const card = document.createElement('div');
            card.classList.add('level-card');
            card.classList.add(isCompleted || isAvailable ? 'unlocked' : 'locked');
            if (isCompleted) card.classList.add('routine-completed');

            const icon = document.createElement('div');
            icon.classList.add('level-icon');
            icon.textContent = idx + 1;

            const info = document.createElement('div');
            info.classList.add('level-info');
            const title = document.createElement('h3');
            title.textContent = routine.title;
            const detail = document.createElement('p');
            detail.textContent = `${routine.steps.length} passos`;
            info.appendChild(title);
            info.appendChild(detail);

            const statusEl = document.createElement('div');
            statusEl.classList.add('level-status');
            if (isCompleted) {
                statusEl.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 12L10 17L20 7" stroke="#5aaa65" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
            } else if (isAvailable) {
                statusEl.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
            } else {
                statusEl.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="#a1a1aa" stroke-width="2.5"/><path d="M17 11V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V11" stroke="#a1a1aa" stroke-width="2.5" stroke-linecap="round"/></svg>`;
            }

            card.appendChild(icon);
            card.appendChild(info);
            card.appendChild(statusEl);

            if (isCompleted || isAvailable) {
                card.addEventListener('click', () => startGame(currentLevel, idx));
            }

            routinesList.appendChild(card);
        });

        screenLevels.classList.remove('active');
        screenGame.classList.remove('active');
        screenRoutines.classList.add('active');
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
        keyboardMode      = false;
        focusedCardIndex  = 0;
        focusedSlotIndex  = 0;
        flyInProgress     = false;
        consecutiveErrors = 0;

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
                label.className   = 'drag-card-label';
                label.textContent = step.text;
                card.appendChild(img); card.appendChild(label);
            } else {
                const label = document.createElement('span');
                label.className   = 'drag-card-label--text';
                label.textContent = typeof step === 'object' ? step.text : step;
                card.appendChild(label);
            }
            cardsArr.push(card);
        });

        // Randomizar
        cardsArr.sort(() => Math.random() - 0.5);
        cardsArr.forEach((card, idx) => {
            card.dataset.homeIndex = idx;
            cardsContainer.appendChild(card);
            setupDrag(card);
        });

        setTimeout(() => showEncouragement(`Vamos lá${userName ? ', ' + userName : ''}! 🚀`), 600);
    }

    /* ══════════════════════════════
       COMPANHEIRO
    ══════════════════════════════ */
    function updateCompanionAvatar() {
        const slide = slides.find(s => s.dataset.avatar === selectedAvatar);
        if (!slide) return;
        const svgEl = slide.querySelector('svg');
        if (svgEl && companionAvatar) companionAvatar.innerHTML = svgEl.outerHTML;
        if (svgEl && modalCompanion)  modalCompanion.innerHTML  = svgEl.outerHTML;
    }

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

        const hintCard  = cards[0];
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
                keyboardMode     = true;
                focusedSlotIndex = (focusedSlotIndex + (e.key === 'ArrowDown' ? 1 : -1) + allSlots.length) % allSlots.length;
                updateKeyboardFocus(playableCards, allSlots);
                break;
            }
            case 'Enter': {
                e.preventDefault();
                if (!keyboardMode) {
                    keyboardMode     = true;
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
       ANIMAÇÃO "VÔO" DO CARTÃO (teclado → slot)
    ══════════════════════════════ */
    function flyCardToSlot(card, slot) {
        if (flyInProgress) return;
        flyInProgress = true;
        clearKeyboardFocus();
        clearHints();

        const cardRect = card.getBoundingClientRect();
        const slotRect = slot.getBoundingClientRect();

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

            setTimeout(() => {
                const cc  = document.getElementById('cards-container');
                const rem = Array.from(cc?.querySelectorAll('.drag-card') || []);
                const slt = Array.from(document.querySelectorAll('.drag-slot'));
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
       DRAG & DROP (Pointer Events para Mobile e PC)
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
                const x = e.clientX - parseFloat(card.dataset.offsetX);
                const y = e.clientY - parseFloat(card.dataset.offsetY);
                card.style.position = 'fixed';
                card.style.left     = `${x}px`;
                card.style.top      = `${y}px`;
                card.style.zIndex   = '10000';

                const elemBelow = document.elementFromPoint(e.clientX, e.clientY);
                document.querySelectorAll('.drag-slot').forEach(s => s.classList.remove('highlight'));
                currentSlotHover = null;

                if (elemBelow) {
                    const slot = elemBelow.closest('.drag-slot');
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
            card.style.zIndex    = '';
            card.style.position  = '';
            card.style.width     = '';
            card.style.height    = '';
            card.style.left      = '';
            card.style.top       = '';

            if (isDragging) {
                if (currentSlotHover) {
                    currentSlotHover.classList.remove('highlight');
                    currentSlotHover.appendChild(card);
                    currentSlotHover.dataset.slottedId = card.dataset.id;
                    card.classList.add('slotted');
                    checkWinCondition();
                    giveEncouragement();
                } else {
                    returnCardToHome(card);
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
            consecutiveErrors = 0;
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
            starsToast.classList.remove('hidden');
            starsToast.classList.add('show');

            setTimeout(() => {
                starsToast.classList.remove('show');
                starsToast.classList.add('hidden');

                if (currentUnlocked > previousUnlocked) {
                    showModal('Novo companheiro!', 'Desbloqueaste um novo avatar especial no ecrã inicial!', [
                        { text: 'Fantástico!', class: 'primary-btn', action: nextRoutine }
                    ]);
                } else {
                    showModal('Muito bem! 🌟', 'Completaste a rotina de forma perfeita.', [
                        { text: 'Continuar', class: 'primary-btn', action: nextRoutine }
                    ]);
                }
            }, 1800);

        } else {
            btnConfirmContainer.classList.add('hidden');
            playErrorSound();

            consecutiveErrors++;
            slots.forEach(s => { if (s.firstElementChild) s.firstElementChild.classList.add('wobble'); });
            if (consecutiveErrors >= 3) {
                showEncouragement('Experimenta o botão da lâmpada 💡 para te ajudar!');
                consecutiveErrors = 0;
            } else {
                showEncouragement(`Quase! Tenta novamente${userName ? ', ' + userName : ''}! 💪`);
            }

            setTimeout(() => {
                const cardsContainer = document.getElementById('cards-container');
                let allCards = Array.from(cardsContainer.children);
                slots.forEach(s => {
                    const card = s.firstElementChild;
                    if (card) {
                        card.classList.remove('wobble', 'slotted');
                        allCards.push(card);
                        s.dataset.slottedId = '';
                    }
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

        // Guardar rotina como concluída
        if (!completedRoutines[currentLevel]) completedRoutines[currentLevel] = [];
        if (!completedRoutines[currentLevel].includes(currentRoutineIndex)) {
            completedRoutines[currentLevel].push(currentRoutineIndex);
            localStorage.setItem('taskly_completed', JSON.stringify(completedRoutines));
        }

        const isLastRoutine  = currentRoutineIndex >= currentLevelData.length - 1;
        const completedLvl   = currentLevel;

        if (!isLastRoutine) {
            startGame(completedLvl, currentRoutineIndex + 1);
        } else {
            if (!unlockedLevels.includes(currentLevel + 1)) {
                unlockedLevels.push(currentLevel + 1);
            }
            updateLevelLocksStatus();
            const hasNextLevel = !!LEVELS_DATA[currentLevel + 1];

            if (hasNextLevel) {
                showModal('Nível Completo! 🏅', 'Concluíste todas as rotinas deste nível!', [
                    { text: 'Ficar neste Nível', class: 'secondary-btn', action: () => {
                        hideModal();
                        screenGame.classList.remove('active');
                        showRoutinesScreen(completedLvl);
                    }},
                    { text: 'Próximo Nível', class: 'primary-btn', action: () => {
                        hideModal();
                        screenGame.classList.remove('active');
                        showRoutinesScreen(completedLvl + 1);
                    }}
                ]);
            } else {
                showModal('Fantástico! 🌈', 'Completaste todas as tarefas disponíveis!', [
                    { text: 'Ver Rotinas', class: 'primary-btn', action: () => {
                        hideModal();
                        screenGame.classList.remove('active');
                        showRoutinesScreen(completedLvl);
                    }}
                ]);
            }
        }
    }

    /* ══════════════════════════════
       ÁUDIO
       Sons carregados da pasta sounds/ — Web Audio API apenas como fallback do sucesso
    ══════════════════════════════ */
    function playSuccessSound() {
        if (!soundEnabled || lowStimMode) return;
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
        if (!soundEnabled || lowStimMode) return;
        try {
            const a = new Audio('sounds/Rotine_Incomplete.wav');
            a.volume = soundVolume;
            a.currentTime = 0;
            a.play().catch(() => {});
        } catch (_) {}
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
            star.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>`;
            star.style.setProperty('--rx', `${(Math.random() - 0.5) * 300}px`);
            star.style.setProperty('--ry', `${(Math.random() - 0.5) * 300}px`);
            star.style.animationDelay = `${Math.random() * 0.2}s`;
            starsContainer.appendChild(star);
        }
        setTimeout(() => {
            starsContainer.classList.add('hidden');
            starsContainer.innerHTML = '';
        }, 1500);
    }

});
