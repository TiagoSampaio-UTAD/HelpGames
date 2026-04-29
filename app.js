/* ────────────────────────────────────────────────────────────
   TASKLY – app.js  (autism-friendly routine sequencing game)
   ──────────────────────────────────────────────────────────── */

/* ── LEVELS DATA (with emoji pictograms) ── */
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
           { text: "Pegar na escova", img: },
           { text: "Colocar pasta de dentes", img: },
           { text: "Escovar os dentes", img: },
           { text: "Limpar a boca", img: }
        ]},
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

/* ── COMPANION MESSAGES ── */
const COMPANION_MESSAGES = [
    "Muito bem! 🎉", "Conseguiste! 🌟", "Estás incrível! 💪",
    "Parabéns! 👏", "Que fixe! ⭐", "Boa! 😄", "A arrasar! 🚀"
];
const COMPANION_IDLE = [
    "Consegues! 💪", "Força! 🌟", "Vai lá! 😊", "Estás bem! 👍"
];

/* ─────────────────── INIT ─────────────────── */
document.addEventListener('DOMContentLoaded', () => {

    /* ── STATE ── */
    let currentSlide      = 0;
    let selectedAvatar    = 'gatinho';
    let unlockedLevels    = [1];
    let currentLevel      = 1;
    let currentRoutineIndex = 0;
    let currentLevelData  = [];
    let userName          = localStorage.getItem('taskly_name') || '';
    let tasklyStars       = parseInt(localStorage.getItem('taskly_stars')) || 0;
    let unlockedAvatares  = 1;
    let soundEnabled      = localStorage.getItem('taskly_sound') !== 'false';
    let soundVolume      = parseFloat(localStorage.getItem('taskly_volume') || '0.8');
    let currentTheme      = localStorage.getItem('taskly_theme') || 'default';

    const AVATAR_THRESHOLDS = [0, 15, 30, 50, 75, 100, 125, 150];
    const SESSION_DURATION  = 15 * 60; // seconds
    let sessionSeconds      = SESSION_DURATION;
    let timerInterval       = null;
    let warned5min          = false;
    let warned2min          = false;
    let sessionStarted      = false;

    /* ── APP CONTAINER (needed for absolute drag) ── */
    const appContainer = document.getElementById('app-container'); //VERIFICAR NECESSIDADE

    /* ── DOM REFS ── */
    const screenWelcome  = document.getElementById('screen-welcome');
    const screenHome     = document.getElementById('screen-home');
    const screenLevels   = document.getElementById('screen-levels');
    const screenGame     = document.getElementById('screen-game');

    /* ── SCREEN WELCOME ── */
    const nameInput      = document.getElementById('name-input');
    const btnStart       = document.getElementById('btn-start');
    const nameHintText   = document.getElementById('name-hint-text');
    const homeGreeting   = document.getElementById('home-greeting');

    const btnPlay        = document.getElementById('btn-play');
    const btnBackLevels  = document.getElementById('btn-back-levels');
    const btnBackGame    = document.getElementById('btn-back-game');
    const overlay        = document.getElementById('game-overlay');
    const modalTitle     = document.getElementById('modal-title');
    const modalText      = document.getElementById('modal-text');
    const modalButtons   = document.getElementById('modal-buttons');
    const modalCompanion = document.getElementById('modal-companion');
    const starsContainer = document.getElementById('stars-container');

    const btnconfirmContainer = document.getElementById('confirm-container');
    const btnConfirm       = document.getElementById('btn-confirm');

    const starsToast     = document.getElementById('stars-reward-toast');
    const toastText      = document.getElementById('toast-stars-text');

    const timerWarningToast = document.getElementById('timer-warning-toast');
    const timerWarningText  = document.getElementById('timer-warning-text');
    const timeUpOverlay     = document.getElementById('time-up-overlay');

    const companionWidget  = document.getElementById('companion-widget');
    const companionMini    = document.getElementById('companion-mini-avatar');
    const speechBubble     = document.getElementById('companion-speech-bubble');
    const speechText       = document.getElementById('companion-speech-text');

    // Settings
    const settingsOverlay        = document.getElementById('settings-overlay');
    const btnCloseSettings       = document.getElementById('btn-close-settings');
    const btnCloseSettingsBottom = document.getElementById('btn-close-settings-bottom');
    const profileCard            = document.getElementById('profile-card');
    const profileNameDisplay     = document.getElementById('profile-name-display');
    const profileNameInput       = document.getElementById('profile-name-input');
    const toggleSound            = document.getElementById('toggle-sound');
    const sliderVolume           = document.getElementById('slider-volume');

    // Carousel
    const track         = document.getElementById('carousel-track');
    const slides        = Array.from(document.querySelectorAll('.carousel-slide'));
    const btnPrev       = document.getElementById('btn-prev');
    const btnNext       = document.getElementById('btn-next');
    const dotsContainer = document.getElementById('carousel-indicators');

    // Timer displays
    const homeTimerText   = document.getElementById('home-timer-text');
    const levelsTimerText = document.getElementById('levels-timer-text');
    const gameTimerText   = document.getElementById('game-timer-text');
    const homeTimerPill   = document.getElementById('home-timer-pill');
    const levelsTimerPill = document.getElementById('levels-timer-pill');
    const gameTimerPill   = document.getElementById('game-timer-pill');

    /* ─────────────────────────────────────────
       AVATAR SVGS (capture from DOM for reuse)
    ───────────────────────────────────────── */
    const AVATAR_SVGS = {};
    slides.forEach(slide => {
        AVATAR_SVGS[slide.dataset.avatar] = slide.querySelector('.avatar-circle').innerHTML;
    });

    /* ─────────────────────────────────────────
       THEME SYSTEM
    ───────────────────────────────────────── */
    function applyTheme(theme) {
        document.body.classList.remove('theme-blue','theme-green','theme-dark','theme-minimal');
        if (theme !== 'default') document.body.classList.add('theme-' + theme);
        currentTheme = theme;
        localStorage.setItem('taskly_theme', theme);
        document.querySelectorAll('.swatch').forEach(s => {
            s.classList.toggle('active', s.dataset.theme === theme);
        });
    }
    applyTheme(currentTheme);

    document.querySelectorAll('.swatch').forEach(s => {
        s.addEventListener('click', () => applyTheme(s.dataset.theme));
    });

    /* ─────────────────────────────────────────
       SIZE SYSTEM
    ───────────────────────────────────────── */
    const savedSize = localStorage.getItem('taskly_size') || 'large';
    applySizeConfig(savedSize);

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

    /* ─────────────────────────────────────────
       SOUND SYSTEM
    ───────────────────────────────────────── */
    let audioCtx = null;
    function getAudioCtx() {
        if (!audioCtx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (AC) audioCtx = new AC();
        }
        return audioCtx;
    }
    function playTone(freqs, duration = 0.6) {
        if (!soundEnabled) return;
        try {
            const ctx  = getAudioCtx();
            if (!ctx) return;
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            freqs.forEach(([freq, time]) => osc.frequency.setValueAtTime(freq, ctx.currentTime + time));
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(masterVolume * 0.22, ctx.currentTime + 0.04);
            gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + duration + 0.05);
        } catch(e) {}
    }
    function playSuccessSound() {
        playTone([[523.25,0],[659.25,0.1],[783.99,0.2],[1046.5,0.3]], 0.7);
    }
    function playErrorSound() {
        playTone([[300,0],[250,0.1],[220,0.2]], 0.4);
    }
    function playDropSound() {
        playTone([[440,0],[550,0.08]], 0.2);
    }

    function applySoundSettings() {
        toggleSound.classList.toggle('active', soundEnabled);
        toggleSound.setAttribute('aria-checked', soundEnabled);
        sliderVolume.value = Math.round(masterVolume * 100);
        volumeLabel.textContent = Math.round(masterVolume * 100) + '%';
    }
    toggleSound.addEventListener('change', () => {
        soundEnabled = toggleSound.checked;
        localStorage.setItem('taskly_sound', soundEnabled);
        volumeRow.classList.toggle('disabled', !soundEnabled);
    });
    sliderVolume.addEventListener('input', () => {
        masterVolume = sliderVolume.value / 100;
        localStorage.setItem('taskly_volume', masterVolume);
        volumeLabel.textContent = sliderVolume.value + '%';
    });
    applySoundSettings();

    /* ─────────────────────────────────────────
       TIMER SYSTEM
    ───────────────────────────────────────── */
    function formatTime(secs) {
        const m = Math.floor(secs / 60).toString().padStart(2,'0');
        const s = (secs % 60).toString().padStart(2,'0');
        return `${m}:${s}`;
    }
    function updateTimerDisplays() {
        const txt  = formatTime(sessionSeconds);
        const pills = [homeTimerPill, levelsTimerPill, gameTimerPill];
        const texts = [homeTimerText, levelsTimerText, gameTimerText];
        texts.forEach(el => { if (el) el.textContent = txt; });
        const warning = sessionSeconds <= 5 * 60;
        const urgent  = sessionSeconds <= 2 * 60;
        pills.forEach(p => {
            if (!p) return;
            p.classList.toggle('warning', warning && !urgent);
            p.classList.toggle('urgent', urgent);
        });
    }
    function showTimerWarning(text, isUrgent = false) {
        timerWarningText.textContent = text;
        timerWarningToast.classList.remove('hidden');
        timerWarningToast.classList.toggle('urgent', isUrgent);
        setTimeout(() => timerWarningToast.classList.add('hidden'), 4500);
    }
    function startSession() {
        if (sessionStarted) return;
        sessionStarted = true;
        updateTimerDisplays();
        timerInterval = setInterval(() => {
            sessionSeconds--;
            updateTimerDisplays();
            const remaining = sessionSeconds;
            if (!warned5min && remaining === 5 * 60) {
                warned5min = true;
                showTimerWarning('⏱ Faltam 5 minutos!');
            }
            if (!warned2min && remaining === 2 * 60) {
                warned2min = true;
                showTimerWarning('⏱ Faltam 2 minutos!', true);
            }
            if (remaining <= 0) {
                clearInterval(timerInterval);
                showTimeUpModal();
            }
        }, 1000);
    }
    function showTimeUpModal() {
        timeUpOverlay.classList.remove('hidden');
    }
    document.getElementById('btn-time-continue').addEventListener('click', () => {
        // Give 5 more minutes
        sessionSeconds = 5 * 60;
        warned5min = true; warned2min = false;
        timeUpOverlay.classList.add('hidden');
        timerInterval = setInterval(() => {
            sessionSeconds--;
            updateTimerDisplays();
            if (!warned2min && sessionSeconds === 2 * 60) {
                warned2min = true;
                showTimerWarning('⏱ Faltam 2 minutos!', true);
            }
            if (sessionSeconds <= 0) {
                clearInterval(timerInterval);
                showTimeUpModal();
            }
        }, 1000);
    });
    document.getElementById('btn-time-stop').addEventListener('click', () => {
        timeUpOverlay.classList.add('hidden');
        clearInterval(timerInterval);
        // Return to welcome screen
        goToScreen(screenGame, screenWelcome);
    });

    /* ─────────────────────────────────────────
       SCREEN TRANSITIONS
    ───────────────────────────────────────── */
    function goToScreen(from, to) {
        from.classList.remove('active');
        to.classList.add('active', 'slide-enter');
        to.addEventListener('animationend', () => to.classList.remove('slide-enter'), { once: true });
    }

    /* ─────────────────────────────────────────
       WELCOME SCREEN
    ───────────────────────────────────────── */
    // Pre-fill if name known
    if (userName) {
        nameInput.value = userName;
        btnStart.disabled = false;
        nameHintText.textContent = `Olá de novo, ${userName}! 👋`;
    }
    nameInput.addEventListener('input', () => {
        const val = nameInput.value.trim();
        btnStart.disabled = val.length === 0;
        nameHintText.textContent = val ? `Olá, ${val}! 👋` : 'Botão ativo após escrever o nome';
    });
    btnStart.addEventListener('click', () => {
        userName = nameInput.value.trim();
        if (!userName) return;
        localStorage.setItem('taskly_name', userName);
        profileNameDisplay.textContent = userName;
        homeGreeting.textContent = `Olá, ${userName}! Escolhe o teu companheiro!`;
        goToScreen(screenWelcome, screenHome);
        startSession();
    });

    /* ─────────────────────────────────────────
       SETTINGS OVERLAY
    ───────────────────────────────────────── */
    profileNameDisplay.textContent = userName || '—';
    profileNameInput.value = userName;

    document.querySelectorAll('.btn-open-settings').forEach(btn => {
        btn.addEventListener('click', () => settingsOverlay.classList.remove('hidden'));
    });
    [btnCloseSettings, btnCloseSettingsBottom].forEach(b => {
        b.addEventListener('click', () => settingsOverlay.classList.add('hidden'));
    });

    // Profile name edit
    profileCard.addEventListener('click', () => {
        profileNameInput.classList.toggle('hidden');
        if (!profileNameInput.classList.contains('hidden')) profileNameInput.focus();
    });
    profileNameInput.addEventListener('change', () => {
        const val = profileNameInput.value.trim();
        if (val) {
            userName = val;
            localStorage.setItem('taskly_name', val);
            profileNameDisplay.textContent = val;
            homeGreeting.textContent = `Olá, ${val}! Escolhe o teu companheiro!`;
            nameInput.value = val;
        }
        profileNameInput.classList.add('hidden');
    });

    /* ─────────────────────────────────────────
       CAROUSEL
    ───────────────────────────────────────── */
    slides.forEach((slide, idx) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (idx === 0) dot.classList.add('active');
        dot.dataset.index = idx;
        dot.addEventListener('click', () => { currentSlide = idx; updateCarousel(); });
        dotsContainer.appendChild(dot);
    });
    const dots = Array.from(document.querySelectorAll('.dot'));

    function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        selectedAvatar = slides[currentSlide].dataset.avatar;
        dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
        const locked = slides[currentSlide].classList.contains('locked');
        btnPlay.disabled = locked;
        btnPlay.style.opacity = locked ? '0.5' : '1';
        btnPlay.textContent = locked ? `Precisa de ${AVATAR_THRESHOLDS[currentSlide]} ⭐` : 'Jogar ▶';
        // Companion follows selection
        updateCompanionAvatar();
    }
    btnNext.addEventListener('click', () => { currentSlide = (currentSlide + 1) % slides.length; updateCarousel(); });
    btnPrev.addEventListener('click', () => { currentSlide = (currentSlide - 1 + slides.length) % slides.length; updateCarousel(); });

    /* ─────────────────────────────────────────
       STARS UI
    ───────────────────────────────────────── */
    const headerStars        = document.getElementById('levels-stars-total');
    const progressContainer  = document.getElementById('stars-progress-container');
    const progressFill       = document.getElementById('stars-progress-fill');
    const progressText       = document.getElementById('stars-progress-text');

    function updateStarsUI() {
        headerStars.textContent = `⭐ ${tasklyStars}`;
        let nextThreshold = null;
        unlockedAvatares = 0;
        for (let i = 0; i < AVATAR_THRESHOLDS.length; i++) {
            if (tasklyStars >= AVATAR_THRESHOLDS[i]) unlockedAvatares = i + 1;
            else if (nextThreshold === null) nextThreshold = AVATAR_THRESHOLDS[i];
        }
        unlockedAvatares = Math.min(unlockedAvatares, 8);
        slides.forEach((s, i) => s.classList.toggle('locked', i >= unlockedAvatares));
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
    updateStarsUI();

    /* ─────────────────────────────────────────
       COMPANION
    ───────────────────────────────────────── */
    function updateCompanionAvatar() {
        const svg = AVATAR_SVGS[selectedAvatar] || AVATAR_SVGS['gatinho'];
        companionMini.innerHTML = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">${svg.replace(/<\/?(div|svg)[^>]*>/gi,'')}</svg>`;
        // Actually, AVATAR_SVGS contain the inner HTML of .avatar-circle which is the SVG element:
        companionMini.innerHTML = svg;
    }
    function showCompanionMessage(msg) {
        speechText.textContent = msg;
        speechBubble.classList.remove('hidden');
        companionMini.classList.add('bounce');
        companionMini.addEventListener('animationend', () => companionMini.classList.remove('bounce'), { once: true });
        clearTimeout(window._speechTimeout);
        window._speechTimeout = setTimeout(() => speechBubble.classList.add('hidden'), 3500);
    }
    function showIdleCompanionMessage() {
        const msg = COMPANION_IDLE[Math.floor(Math.random() * COMPANION_IDLE.length)];
        showCompanionMessage(msg);
    }
    updateCompanionAvatar();

    /* ─────────────────────────────────────────
       NAVIGATION
    ───────────────────────────────────────── */
    btnPlay.addEventListener('click', () => {
        if (!selectedAvatar) return;
        goToScreen(screenHome, screenLevels);
        updateLevelLocksStatus();
    });
    btnBackLevels.addEventListener('click', () => { goToScreen(screenLevels, screenHome); });
    btnBackGame.addEventListener('click', () => {
        goToScreen(screenGame, screenLevels);
        updateLevelLocksStatus();
        speechBubble.classList.add('hidden');
    });

    /* ─────────────────────────────────────────
       LEVELS
    ───────────────────────────────────────── */
    function updateLevelLocksStatus() {
        document.querySelectorAll('.level-card').forEach(card => {
            const lvl = parseInt(card.dataset.level);
            if (unlockedLevels.includes(lvl)) {
                card.classList.remove('locked'); card.classList.add('unlocked');
                card.querySelector('.level-status').innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 12L10 17L20 7" stroke="#fbbf24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
            }
        });
    }
    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('locked')) return;
            startGame(parseInt(card.dataset.level));
        });
    });

    /* ─────────────────────────────────────────
       GAME
    ───────────────────────────────────────── */
    function startGame(levelNumber) {
        currentLevel         = levelNumber;
        currentLevelData     = LEVELS_DATA[currentLevel];
        currentRoutineIndex  = 0;
        goToScreen(screenLevels, screenGame);
        updateCompanionAvatar();
        loadRoutine();
        setTimeout(showIdleCompanionMessage, 800);
    }

    function loadRoutine() {
        const routine = currentLevelData[currentRoutineIndex];
        document.getElementById('routine-title').textContent = routine.title;

        const slotsContainer = document.getElementById('slots-container');
        const cardsContainer = document.getElementById('cards-container');

        slotsContainer.innerHTML = '';
        cardsContainer.innerHTML = '';
        confirmContainer.classList.add('hidden');

        // Create drop slots
        routine.steps.forEach((_, i) => {
            const slot = document.createElement('div');
            slot.classList.add('drag-slot');
            slot.dataset.stepIndex = i;
            slot.dataset.slottedId = '';
            slotsContainer.appendChild(slot);
        });

        // Create draggable cards (shuffled)
        const cardsArr = routine.steps.map((step, index) => {
            const card = document.createElement('div');
            card.classList.add('drag-card');
            card.dataset.id = index;

            const emojiEl = document.createElement('span');
            emojiEl.classList.add('card-emoji');
            emojiEl.textContent = step.emoji;

            const textEl = document.createElement('span');
            textEl.classList.add('card-text');
            textEl.textContent = step.text;

            card.appendChild(emojiEl);
            card.appendChild(textEl);
            return card;
        });

        cardsArr.sort(() => Math.random() - 0.5);
        cardsArr.forEach((card, idx) => {
            card.dataset.homeIndex = idx;
            cardsContainer.appendChild(card);
            setupDrag(card);
        });
    }

    function returnCardToHome(card) {
        const cardsContainer = document.getElementById('cards-container');
        const homeIdx = parseInt(card.dataset.homeIndex);
        let inserted = false;
        for (const child of Array.from(cardsContainer.children)) {
            if (parseInt(child.dataset.homeIndex) > homeIdx) {
                cardsContainer.insertBefore(card, child);
                inserted = true;
                break;
            }
        }
        if (!inserted) cardsContainer.appendChild(card);
    }

    /* ─────────────────────────────────────────
       DRAG AND DROP (fixed: absolute to appContainer)
    ───────────────────────────────────────── */
    let draggingElement   = null;
    let currentSlotHover  = null;

    function setupDrag(card) {
        let isDragging = false;
        let startX = 0, startY = 0;
        let offsetX = 0, offsetY = 0;

        card.addEventListener('pointerdown', (e) => {
            if (!e.isPrimary) return;
            startX = e.clientX;
            startY = e.clientY;
            card.setPointerCapture(e.pointerId);
            draggingElement = card;
            isDragging = false;
        });

        card.addEventListener('pointermove', (e) => {
            if (draggingElement !== card) return;
            const dist = Math.hypot(e.clientX - startX, e.clientY - startY);

            if (dist > 6 && !isDragging) {
                isDragging = true;

                const cardRect  = card.getBoundingClientRect();
                const contRect  = appContainer.getBoundingClientRect();

                offsetX = e.clientX - cardRect.left;
                offsetY = e.clientY - cardRect.top;

                // Detach from current parent, move to appContainer
                const w = cardRect.width;
                const h = cardRect.height;

                if (card.parentElement && card.parentElement.classList.contains('drag-slot')) {
                    card.parentElement.dataset.slottedId = '';
                    card.classList.remove('slotted');
                    checkWinCondition();
                }

                card.classList.add('dragging');
                card.style.width  = `${w}px`;
                card.style.height = `${h}px`;
                appContainer.appendChild(card); // reparent to top-level

                const x = cardRect.left - contRect.left;
                const y = cardRect.top  - contRect.top;
                card.style.left = `${x}px`;
                card.style.top  = `${y}px`;
            }

            if (isDragging) {
                const contRect = appContainer.getBoundingClientRect();
                const x = e.clientX - contRect.left - offsetX;
                const y = e.clientY - contRect.top  - offsetY;
                card.style.left = `${x}px`;
                card.style.top  = `${y}px`;

                // Highlight nearest empty slot
                card.style.pointerEvents = 'none';
                const elemBelow = document.elementFromPoint(e.clientX, e.clientY);
                card.style.pointerEvents = '';

                document.querySelectorAll('.drag-slot').forEach(s => s.classList.remove('highlight'));
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

            document.querySelectorAll('.drag-slot').forEach(s => s.classList.remove('highlight'));

            if (isDragging) {
                card.classList.remove('dragging');
                card.style.width  = '';
                card.style.height = '';
                card.style.left   = '';
                card.style.top    = '';
                card.style.position = '';

                if (currentSlotHover) {
                    currentSlotHover.appendChild(card);
                    currentSlotHover.dataset.slottedId = card.dataset.id;
                    card.classList.add('slotted');
                    playDropSound();
                } else {
                    returnCardToHome(card);
                }
            } else {
                // Tap to remove from slot
                if (card.parentElement && card.parentElement.classList.contains('drag-slot')) {
                    card.parentElement.dataset.slottedId = '';
                    card.classList.remove('slotted');
                    card.style.position = '';
                    returnCardToHome(card);
                }
            }

            isDragging = false;
            currentSlotHover = null;
            checkWinCondition();
        });
    }

    function checkWinCondition() {
        const slots  = Array.from(document.querySelectorAll('.drag-slot'));
        const isFull = slots.every(s => s.children.length > 0);
        confirmContainer.classList.toggle('hidden', !isFull);
    }

    /* ─────────────────────────────────────────
       CONFIRM LOGIC
    ───────────────────────────────────────── */
    btnConfirm.addEventListener('click', () => {
        const slots     = Array.from(document.querySelectorAll('.drag-slot'));
        const isCorrect = slots.every(s => parseInt(s.dataset.slottedId) === parseInt(s.dataset.stepIndex));

        if (isCorrect) {
            confirmContainer.classList.add('hidden');
            playSuccessSound();
            createStarsAnimation();

            const starsAwarded     = currentLevel + 2;
            const previousUnlocked = unlockedAvatares;

            tasklyStars += starsAwarded;
            localStorage.setItem('taskly_stars', tasklyStars);
            updateStarsUI();

            const currentUnlocked = unlockedAvatares;
            const celebMsg = COMPANION_MESSAGES[Math.floor(Math.random() * COMPANION_MESSAGES.length)];
            showCompanionMessage(celebMsg);

            toastText.textContent = `+${starsAwarded} ⭐`;
            starsToast.classList.remove('hidden');
            starsToast.classList.add('show');

            setTimeout(() => {
                starsToast.classList.remove('show');
                starsToast.classList.add('hidden');

                if (currentUnlocked > previousUnlocked) {
                    showModal('Novo companheiro!', 'Desbloqueaste um novo avatar! 🎉', [
                        { text: 'Fantástico!', cls: 'primary-btn', action: nextRoutine }
                    ], true);
                } else {
                    showModal('Muito bem!', 'Completaste a rotina na perfeição! 🌟', [
                        { text: 'Continuar', cls: 'primary-btn', action: nextRoutine }
                    ], true);
                }
            }, 1900);

        } else {
            // Wrong – shuffle and reset
            confirmContainer.classList.add('hidden');
            playErrorSound();
            // Small shake animation on game area
            const gameArea = document.querySelector('.game-area');
            gameArea.style.animation = 'none';
            gameArea.style.outline   = '3px solid #f87171';
            setTimeout(() => { gameArea.style.outline = ''; }, 600);

            setTimeout(() => {
                const cardsContainer = document.getElementById('cards-container');
                const slots = Array.from(document.querySelectorAll('.drag-slot'));
                let allCards = [];

                slots.forEach(s => {
                    const c = s.firstElementChild;
                    if (c) {
                        c.classList.remove('slotted');
                        c.style.position = '';
                        c.style.left = ''; c.style.top = '';
                        c.style.width = ''; c.style.height = '';
                        allCards.push(c);
                        s.dataset.slottedId = '';
                    }
                });
                allCards.push(...Array.from(cardsContainer.children));
                allCards.sort(() => Math.random() - 0.5);
                cardsContainer.innerHTML = '';
                allCards.forEach((c, idx) => {
                    c.dataset.homeIndex = idx;
                    cardsContainer.appendChild(c);
                });
            }, 150);
        }
    });

    /* ─────────────────────────────────────────
       MODAL
    ───────────────────────────────────────── */
    function showModal(title, text, buttons, showCompanion = false) {
        modalTitle.textContent = title;
        modalText.textContent  = text;
        modalButtons.innerHTML = '';

        if (showCompanion) {
            modalCompanion.innerHTML = AVATAR_SVGS[selectedAvatar] || '';
        } else {
            modalCompanion.innerHTML = '';
        }

        buttons.forEach(b => {
            const btn = document.createElement('button');
            btn.className   = b.cls;
            btn.textContent = b.text;
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
            setTimeout(showIdleCompanionMessage, 600);
        } else {
            // Level complete
            if (!unlockedLevels.includes(currentLevel + 1)) unlockedLevels.push(currentLevel + 1);
            const hasNext = !!LEVELS_DATA[currentLevel + 1];

            if (hasNext) {
                showModal('Nível Completo! 🏆', 'Queres tentar o próximo nível?', [
                    { text: 'Repetir',  cls: 'secondary-btn', action: () => { hideModal(); currentRoutineIndex = 0; loadRoutine(); }},
                    { text: 'Avançar',  cls: 'primary-btn',   action: () => { hideModal(); startGame(currentLevel + 1); }}
                ], true);
            } else {
                showModal('Fantástico! 🌟', 'Completaste todas as tarefas!', [
                    { text: 'Ver Níveis', cls: 'secondary-btn', action: () => {
                        hideModal();
                        goToScreen(screenGame, screenLevels);
                        updateLevelLocksStatus();
                    }},
                    { text: 'Repetir', cls: 'primary-btn', action: () => { hideModal(); currentRoutineIndex = 0; loadRoutine(); }}
                ], true);
            }
        }
    }

    /* ─────────────────────────────────────────
       STAR BURST ANIMATION
    ───────────────────────────────────────── */
    function createStarsAnimation() {
        starsContainer.innerHTML = '';
        starsContainer.classList.remove('hidden');
        for (let i = 0; i < 14; i++) {
            const star = document.createElement('div');
            star.className = 'floating-star';
            star.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="#fbbf24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>`;
            star.style.setProperty('--rx', `${(Math.random()-0.5)*280}px`);
            star.style.setProperty('--ry', `${(Math.random()-0.5)*280}px`);
            star.style.animationDelay = `${Math.random()*0.2}s`;
            starsContainer.appendChild(star);
        }
        setTimeout(() => { starsContainer.classList.add('hidden'); starsContainer.innerHTML = ''; }, 1500);
    }

    /* ─────────────────────────────────────────
       IDLE COMPANION (random encouragement)
    ───────────────────────────────────────── */
    setInterval(() => {
        const gameActive   = screenGame.classList.contains('active');
        const noModalOpen  = overlay.classList.contains('hidden');
        if (gameActive && noModalOpen && Math.random() < 0.4) {
            showIdleCompanionMessage();
        }
    }, 22000); // every ~22 seconds

    /* ─────────────────────────────────────────
       FINAL INIT
    ───────────────────────────────────────── */
    updateCarousel();
    updateTimerDisplays();

    // If returning user, skip welcome
    if (userName) {
        profileNameDisplay.textContent = userName;
        homeGreeting.textContent = `Olá, ${userName}! Escolhe o teu companheiro!`;
    }
});
