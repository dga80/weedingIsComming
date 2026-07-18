// The Wedding is Coming: The Quiz Season
// JavaScript Application Logic

// 1. Quiz Slides Data
const slides = [
  {
    type: 'cover',
    category: 'Portada',
    title: 'THE WEDDING IS COMING',
    subtitle: '¿Cuánto os conocéis... de verdad?',
    spoilerText: 'Spoiler: hoy saldrán cositas. 🍿'
  },
  {
    type: 'rules',
    category: 'Reglas',
    title: 'Reglas del Juego',
    intro: 'El juego donde descubriréis si realmente os conocéis... o si uno de los dos lleva años improvisando.',
    rulesList: [
      { emoji: '📝', text: 'Cada uno tendrá un papel (o una pizarra) y un rotulador.' },
      { emoji: '🤫', text: 'No podéis mirar la respuesta del otro.' },
      { emoji: '⏳', text: 'Tendréis unos segundos para escribir vuestra respuesta.' },
      { emoji: '🎉', text: 'A la cuenta de 3, los dos enseñaréis vuestra respuesta al mismo tiempo.' },
      { emoji: '✅', text: 'Si coincidís... ¡os lleváis un punto!' },
      { emoji: '😂', text: 'Si no coincidís... ¡queremos escuchar la historia!' },
      { emoji: '🚫', text: 'No se permiten pistas, ayudas del público... ¡ni negociar la respuesta!' }
    ]
  },
  
  // Categoría 1 - Los inicios
  { type: 'question', category: 'Los inicios', question: '¿Dónde os conocisteis?', instruction: 'write' },
  { type: 'question', category: 'Los inicios', question: '¿Quién dio el primer paso?', instruction: 'write' },
  { type: 'question', category: 'Los inicios', question: '¿Dónde fue vuestra primera cita?', instruction: 'write' },
  { type: 'question', category: 'Los inicios', question: '¿Dónde fue vuestro primer beso?', instruction: 'write' },
  { type: 'question', category: 'Los inicios', question: '¿Quién dijo "te quiero" primero?', instruction: 'write' },
  { type: 'question', category: 'Los inicios', question: '¿En qué mes empezasteis a salir?', instruction: 'write' },
  { type: 'question', category: 'Los inicios', question: '¿Cuál fue vuestro primer viaje juntos?', instruction: 'write' },
  { type: 'question', category: 'Los inicios', question: '¿Qué comisteis en vuestra primera cita?', instruction: 'write' },
  { type: 'question', category: 'Los inicios', question: '¿Qué película o serie visteis juntos por primera vez?', instruction: 'write' },
  { type: 'question', category: 'Los inicios', question: '¿Cuál fue vuestra primera foto juntos?', instruction: 'write' },

  // Categoría 2 - Vuestra historia
  { type: 'question', category: 'Vuestra historia', question: '¿Cuál es vuestra canción?', instruction: 'write' },
  { type: 'question', category: 'Vuestra historia', question: '¿Qué restaurante diríais que es "vuestro restaurante"?', instruction: 'write' },
  { type: 'question', category: 'Vuestra historia', question: '¿Cuál fue el primer regalo que le hiciste?', instruction: 'write' },
  { type: 'question', category: 'Vuestra historia', question: '¿Dónde pasasteis vuestra primera Nochevieja juntos?', instruction: 'write' },

  // Categoría 3 - Memoria de pareja
  { type: 'question', category: 'Memoria de pareja', question: '¿Cuál es el mote (o apodo) más utilizado entre vosotros?', instruction: 'write' },
  { type: 'question', category: 'Memoria de pareja', question: '¿Qué emoji os enviáis más?', instruction: 'write' },
  { type: 'question', category: 'Memoria de pareja', question: '¿Cuál es la comida que siempre pedís cuando no sabéis qué cenar?', instruction: 'write' },
  { type: 'question', category: 'Memoria de pareja', question: '¿Cuál es la serie que habéis visto juntos más recientemente?', instruction: 'write' },
  { type: 'question', category: 'Memoria de pareja', question: '¿Qué destino decís siempre que queréis visitar?', instruction: 'write' },
  { type: 'question', category: 'Memoria de pareja', question: '¿Cuál fue el último viaje que hicisteis juntos?', instruction: 'write' },

  // Categoría 4 - ¿Te acuerdas?
  { type: 'question', category: '¿Te acuerdas?', question: '¿Cuál fue el último regalo que le hiciste?', instruction: 'write' },
  { type: 'question', category: '¿Te acuerdas?', question: '¿Dónde os hicisteis la última foto juntos?', instruction: 'write' },

  // BLOQUE 2 - Vuestra historia (Señalar con el dedo)
  { type: 'question', category: 'BLOQUE 2 - Vuestra historia', question: '¿Quién tarda más en arreglarse?', instruction: 'point' },
  { type: 'question', category: 'BLOQUE 2 - Vuestra historia', question: '¿Quién deja más cosas fuera de sitio?', instruction: 'point' },
  { type: 'question', category: 'BLOQUE 2 - Vuestra historia', question: '¿Quién cocina mejor?', instruction: 'point' },
  { type: 'question', category: 'BLOQUE 2 - Vuestra historia', question: '¿Quién es más cabezota?', instruction: 'point' },
  { type: 'question', category: 'BLOQUE 2 - Vuestra historia', question: '¿Quién pide perdón antes?', instruction: 'point' },
  { type: 'question', category: 'BLOQUE 2 - Vuestra historia', question: '¿Quién canta peor?', instruction: 'point' },
  { type: 'question', category: 'BLOQUE 2 - Vuestra historia', question: '¿Quién tiene peor sentido de la orientación?', instruction: 'point' },

  // BLOQUE 3 - ¿Qué respondería tu pareja?
  {
    type: 'question',
    category: 'BLOQUE 3 - Pareja',
    question: '¿Cuál es su comida favorita?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'Ensalada 🥗', david: 'Pizza 🍕' }
  },
  {
    type: 'question',
    category: 'BLOQUE 3 - Pareja',
    question: '¿Cuál es su color favorito?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'Rosa 🌸', david: 'Amarillo 💛' }
  },
  {
    type: 'question',
    category: 'BLOQUE 3 - Pareja',
    question: '¿Cuál es su serie favorita?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'GTO 📺', david: 'Breaking Bad ⚗️' }
  },
  {
    type: 'question',
    category: 'BLOQUE 3 - Pareja',
    question: '¿Cuál es su mayor manía?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'No parar quieta 🏃‍♀️', david: 'El orden 🧹' }
  },
  {
    type: 'question',
    category: 'BLOQUE 3 - Pareja',
    question: '¿Qué le pone de mal humor?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'Las tareas de la casa 🧼', david: 'Mala actitud de las personas 😠' }
  },
  {
    type: 'question',
    category: 'BLOQUE 3 - Pareja',
    question: '¿Cuál es su mayor miedo?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'Las alturas ⛰️', david: 'Arañas 🕷️' }
  },
  {
    type: 'question',
    category: 'BLOQUE 3 - Pareja',
    question: '¿Cuál es el destino soñado para viajar?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'Japón 🇯🇵', david: 'Islas paradisíacas (resorts Maldivas) 🏝️' }
  },
  {
    type: 'question',
    category: 'BLOQUE 3 - Pareja',
    question: '¿Qué elegiría antes: playa o montaña?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'Playa 🏖️', david: 'Montaña ⛰️' }
  },
  {
    type: 'question',
    category: 'BLOQUE 3 - Pareja',
    question: '¿Cuál es su postre favorito?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'Helado 🍦', david: 'Cheesecake 🍰' }
  },

  // Categoría 5 - Recuerdos
  {
    type: 'question',
    category: 'Recuerdos de pareja',
    question: '¿Qué regalo le hizo más ilusión?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'Las UGG 🥾', david: 'Ropa 👕' }
  },
  {
    type: 'question',
    category: 'Recuerdos de pareja',
    question: '¿Cuál ha sido vuestro mejor viaje?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'Menorca (Sant Adrià) 🇪🇸', david: 'Norte de España 🌲' }
  },
  {
    type: 'question',
    category: 'Recuerdos de pareja',
    question: '¿Qué canción os recuerda el uno al otro?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'House 🎶', david: 'Ma quale idea 🕺' }
  },
  {
    type: 'question',
    category: 'Recuerdos de pareja',
    question: '¿Qué momento repetirías una y otra vez?',
    instruction: 'partner',
    revealable: true,
    answers: { yani: 'Ir en moto 🏍️', david: 'Viajar con ella a solas ✈️' }
  },

  // Categoría 6 - Final emotivo
  { type: 'question', category: 'Final emotivo', question: 'Escribe lo que más te gusta de tu pareja.', instruction: 'write' },
  { type: 'question', category: 'Final emotivo', question: 'Escribe una palabra que defina vuestra relación.', instruction: 'write' },
  {
    type: 'results',
    category: 'El Veredicto',
    title: 'El Veredicto Final',
    farewellTitle: 'Una nueva etapa comienza',
    farewellText: 'El invierno ha quedado atrás y vuestro propio reino de complicidad y risas acaba de fundarse. Que vuestra historia de amor sea tan eterna como los cantos de Poniente, pero mucho más feliz. Que este nuevo viaje que emprendéis juntos esté lleno de aventuras, lealtad y momentos inolvidables. ¡Que viva el amor de Yani y David! 🥂💍✨'
  }
];

// 2. State Variables
let currentSlideIndex = 0;
let scores = { yani: 0, david: 0 };
let categoryFirstSlideIndices = {};

// 3. Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadScores();
  calculateCategoryIndices();
  generateCategoryMenu();
  renderSlide();
  initScoreboardToggle();
  initKeyboardControls();
  initFullscreen();
  initMenuControls();
  generateEmbers();
  initMusicControls();
});

// Calculate the first slide index for each category for navigation shortcuts
function calculateCategoryIndices() {
  slides.forEach((slide, idx) => {
    if (!categoryFirstSlideIndices.hasOwnProperty(slide.category)) {
      categoryFirstSlideIndices[slide.category] = idx;
    }
  });
}

// Generate the category sidebar links dynamically
function generateCategoryMenu() {
  const list = document.getElementById('category-jump-list');
  list.innerHTML = '';
  
  const categoriesUnique = [...new Set(slides.map(s => s.category))];
  
  categoriesUnique.forEach(cat => {
    const firstIdx = categoryFirstSlideIndices[cat];
    const li = document.createElement('li');
    li.id = `cat-menu-item-${firstIdx}`;
    
    // Nice friendly names for menu
    let catDisplayName = cat;
    if (cat === 'BLOQUE 2 - Vuestra historia') catDisplayName = 'Bloque 2: Señalar';
    if (cat === 'BLOQUE 3 - Pareja') catDisplayName = 'Bloque 3: Respuestas';
    if (cat === 'Recuerdos de pareja') catDisplayName = 'Recuerdos';
    
    // Count how many questions in this category
    const count = slides.filter(s => s.category === cat).length;
    const badgeText = cat === 'Portada' || cat === 'Reglas' ? '' : `<span class="badge">${count}</span>`;
    
    li.innerHTML = `<span>${catDisplayName}</span> ${badgeText}`;
    li.addEventListener('click', () => {
      closeSidebar();
      navigate(() => {
        currentSlideIndex = firstIdx;
        renderSlide();
      }, currentSlideIndex < firstIdx ? 'forward' : 'backward');
    });
    list.appendChild(li);
  });
}

// Update Active Category Menu Item
function updateActiveCategoryMenu() {
  const currentCategory = slides[currentSlideIndex].category;
  const listItems = document.querySelectorAll('#category-jump-list li');
  
  listItems.forEach(li => {
    li.classList.remove('active');
  });

  const activeIdx = categoryFirstSlideIndices[currentCategory];
  const activeLi = document.getElementById(`cat-menu-item-${activeIdx}`);
  if (activeLi) {
    activeLi.classList.add('active');
  }
}

// 4. Render Active Slide
function renderSlide() {
  const container = document.getElementById('slide-content');
  const slide = slides[currentSlideIndex];
  
  // Toggle cover class on body
  document.body.classList.toggle('on-cover', currentSlideIndex === 0);
  document.body.classList.toggle('on-results-slide', slide.type === 'results');
  
  // Update header progress information
  document.getElementById('current-category').textContent = slide.category;
  document.getElementById('progress-text').textContent = `${currentSlideIndex + 1} / ${slides.length}`;
  
  const progressPercent = ((currentSlideIndex + 1) / slides.length) * 100;
  document.getElementById('progress-bar-fill').style.width = `${progressPercent}%`;

  // Render buttons state
  document.getElementById('prev-btn').disabled = currentSlideIndex === 0;
  
  const nextBtn = document.getElementById('next-btn');
  if (currentSlideIndex === slides.length - 1) {
    nextBtn.innerHTML = `Finalizar <svg viewBox="0 0 24 24" class="icon"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
  } else {
    nextBtn.innerHTML = `Siguiente <svg viewBox="0 0 24 24" class="icon"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`;
  }

  updateActiveCategoryMenu();

  // Clear previous content
  container.innerHTML = '';

  // Render based on Slide Type
  if (slide.type === 'cover') {
    container.innerHTML = `
      <div class="quiz-card cover-layout">
        <div class="cover-image-container">
          <img src="portada.png" alt="The Wedding is Coming: The Quiz Season" class="cover-art-img">
        </div>
        <div class="cover-overlay">
          <span class="spoiler-badge">${slide.spoilerText}</span>
          <button class="start-btn" id="start-game-btn">EMPEZAR</button>
        </div>
      </div>
    `;
    
    document.getElementById('start-game-btn').addEventListener('click', () => {
      playMusic();
      navigate(() => {
        currentSlideIndex = 1;
        renderSlide();
      }, 'forward');
    });

  } else if (slide.type === 'rules') {
    const rulesHTML = slide.rulesList.map(rule => `
      <li>
        <span class="emoji">${rule.emoji}</span>
        <span>${rule.text}</span>
      </li>
    `).join('');

    container.innerHTML = `
      <div class="quiz-card rules-layout">
        <h2 class="question-text" style="font-size: 2.2rem; text-align: center; color: var(--gold-primary);">${slide.title}</h2>
        <p class="rules-intro">${slide.intro}</p>
        <ul class="rules-list">
          ${rulesHTML}
        </ul>
      </div>
    `;

  } else if (slide.type === 'question') {
    let bannerHTML = '';
    
    // Instruction types banners
    if (slide.instruction === 'write') {
      bannerHTML = `
        <div class="instruction-banner write">
          <span>📝 ESCRIBIR RESPUESTA EN PAPEL / PIZARRA</span>
        </div>
      `;
    } else if (slide.instruction === 'point') {
      bannerHTML = `
        <div class="instruction-banner point">
          <span>👉 SEÑALAR CON EL DEDO (NO ESCRIBIR)</span>
        </div>
      `;
    } else if (slide.instruction === 'partner') {
      bannerHTML = `
        <div class="instruction-banner write">
          <span>📝 ESCRIBIR LO QUE RESPONDERÍA TU PAREJA</span>
        </div>
      `;
    }

    let revealHTML = '';
    if (slide.revealable) {
      revealHTML = `
        <div class="reveal-block">
          <div class="reveal-cards-container">
            <!-- Yani Card -->
            <div class="reveal-card-3d" id="card-yani-reveal">
              <div class="reveal-card-inner">
                <div class="reveal-card-front">
                  <span class="role-title">Respuesta de</span>
                  <span class="reveal-prompt">YANI</span>
                </div>
                <div class="reveal-card-back">
                  <span class="partner-name">YANI responde</span>
                  <span class="partner-answer">${slide.answers.yani}</span>
                </div>
              </div>
            </div>
            
            <!-- David Card -->
            <div class="reveal-card-3d" id="card-david-reveal">
              <div class="reveal-card-inner">
                <div class="reveal-card-front">
                  <span class="role-title">Respuesta de</span>
                  <span class="reveal-prompt">DAVID</span>
                </div>
                <div class="reveal-card-back">
                  <span class="partner-name">DAVID responde</span>
                  <span class="partner-answer">${slide.answers.david}</span>
                </div>
              </div>
            </div>
          </div>
          <button class="reveal-btn-global" id="reveal-all-btn">DESVELAR AMBAS RESPUESTAS</button>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="quiz-card">
        ${bannerHTML}
        <h2 class="question-text">${slide.question}</h2>
        ${revealHTML}
      </div>
    `;

    // Hook up Card Reveal triggers
    if (slide.revealable) {
      const cardYani = document.getElementById('card-yani-reveal');
      const cardDavid = document.getElementById('card-david-reveal');
      const revealAllBtn = document.getElementById('reveal-all-btn');

      cardYani.addEventListener('click', () => {
        cardYani.classList.toggle('revealed');
      });

      cardDavid.addEventListener('click', () => {
        cardDavid.classList.toggle('revealed');
      });

      revealAllBtn.addEventListener('click', () => {
        const isAnyRevealed = cardYani.classList.contains('revealed') || cardDavid.classList.contains('revealed');
        const shouldReveal = !cardYani.classList.contains('revealed') || !cardDavid.classList.contains('revealed');
        
        if (shouldReveal) {
          cardYani.classList.add('revealed');
          cardDavid.classList.add('revealed');
          revealAllBtn.textContent = 'OCULTAR RESPUESTAS';
        } else {
          cardYani.classList.remove('revealed');
          cardDavid.classList.remove('revealed');
          revealAllBtn.textContent = 'DESVELAR AMBAS RESPUESTAS';
        }
      });
    }
  } else if (slide.type === 'results') {
    container.innerHTML = `
      <div class="quiz-card results-layout">
        <h2 class="question-text" style="color: var(--gold-primary); font-size: clamp(1.8rem, 3.5vw, 2.3rem); margin-bottom: 20px;">${slide.title}</h2>
        
        <!-- Large Score Reveal Panel -->
        <div class="results-score-panel">
          <!-- Yani Card -->
          <div class="result-player-card">
            <div class="result-player-shield">
              <svg viewBox="0 0 100 100" class="sigil-icon" style="width: 60px; height: 60px;">
                <path d="M50,15 L60,35 L80,30 L70,50 L85,70 L55,65 L50,85 L45,65 L15,70 L30,50 L20,30 L40,35 Z" fill="none" stroke="#d4af37" stroke-width="3"/>
                <circle cx="50" cy="50" r="10" fill="none" stroke="#d4af37" stroke-width="2"/>
              </svg>
            </div>
            <div class="result-player-name">YANI</div>
            <div class="result-player-score-container">
              <div class="result-score-display" id="final-score-yani">?</div>
            </div>
          </div>
          
          <!-- VS Divider -->
          <div class="results-vs-divider">
            <svg viewBox="0 0 100 100" class="icon" style="width: 30px; height: 30px; fill: var(--gold-primary);">
              <path d="M45,10 L55,10 L52,90 L48,90 Z" />
              <path d="M25,48 L75,48 L75,52 L25,52 Z" />
            </svg>
          </div>

          <!-- David Card -->
          <div class="result-player-card">
            <div class="result-player-shield">
              <svg viewBox="0 0 100 100" class="sigil-icon" style="width: 60px; height: 60px;">
                <path d="M50,15 L75,25 L70,65 L50,85 L30,65 L25,25 Z" fill="none" stroke="#e0e0e0" stroke-width="3"/>
                <path d="M50,25 L65,32 L62,60 L50,72 L38,60 L35,32 Z" fill="none" stroke="#e0e0e0" stroke-width="1.5"/>
              </svg>
            </div>
            <div class="result-player-name">DAVID</div>
            <div class="result-player-score-container">
              <div class="result-score-display" id="final-score-david">?</div>
            </div>
          </div>
        </div>

        <button class="reveal-btn-global" id="reveal-final-scores-btn" style="margin-top: 15px; margin-bottom: 20px; padding: 12px 30px; font-size: 1.05rem;">REVELAR EL VEREDICTO</button>

        <!-- Farewell Text Container (Initially Hidden/Collapsed) -->
        <div class="farewell-container" id="farewell-message-box">
          <h3 class="farewell-title">${slide.farewellTitle}</h3>
          <p class="farewell-text">${slide.farewellText}</p>
        </div>
      </div>
    `;

    // Hook up Reveal button
    const revealBtn = document.getElementById('reveal-final-scores-btn');
    const scoreYani = document.getElementById('final-score-yani');
    const scoreDavid = document.getElementById('final-score-david');
    const farewellBox = document.getElementById('farewell-message-box');

    revealBtn.addEventListener('click', () => {
      // Reveal the scores with flip/fade
      scoreYani.textContent = scores.yani;
      scoreDavid.textContent = scores.david;
      scoreYani.classList.add('revealed');
      scoreDavid.classList.add('revealed');

      // Expand the farewell message box
      farewellBox.classList.add('expanded');
      
      // Hide the reveal button after use
      revealBtn.style.display = 'none';
    });
  }
}

// 5. Directional Navigation with View Transitions
function navigate(updateDOM, direction) {
  // If browser doesn't support View Transitions, update immediately
  if (!document.startViewTransition) {
    updateDOM();
    return;
  }

  // Start transition with type 'forward' or 'backward'
  document.startViewTransition({
    update: updateDOM,
    types: [direction]
  });
}

function handleNext() {
  if (currentSlideIndex < slides.length - 1) {
    navigate(() => {
      currentSlideIndex++;
      renderSlide();
    }, 'forward');
  } else {
    // End of quiz, show confirmation modal or reset to cover
    if (confirm('¿Quieres volver a empezar el juego? El marcador se conservará.')) {
      navigate(() => {
        currentSlideIndex = 0;
        renderSlide();
      }, 'backward');
    }
  }
}

function handlePrev() {
  if (currentSlideIndex > 0) {
    navigate(() => {
      currentSlideIndex--;
      renderSlide();
    }, 'backward');
  }
}

// 6. Medieval Scoreboard Controls (Marcador)
function changeScore(player, val) {
  scores[player] += val;
  if (scores[player] < 0) scores[player] = 0;
  
  saveScores();
  
  // Animate the scoreboard text change
  const scoreDisplay = document.getElementById(`score-${player}`);
  scoreDisplay.textContent = scores[player];
  
  scoreDisplay.classList.add('pulse');
  setTimeout(() => {
    scoreDisplay.classList.remove('pulse');
  }, 300);
}

function resetScores() {
  if (confirm('¿Estás seguro de que quieres reiniciar el marcador a 0?')) {
    scores.yani = 0;
    scores.david = 0;
    saveScores();
    
    const displayYani = document.getElementById('score-yani');
    const displayDavid = document.getElementById('score-david');
    
    displayYani.textContent = 0;
    displayDavid.textContent = 0;
    
    displayYani.classList.add('pulse');
    displayDavid.classList.add('pulse');
    setTimeout(() => {
      displayYani.classList.remove('pulse');
      displayDavid.classList.remove('pulse');
    }, 300);
  }
}

function saveScores() {
  localStorage.setItem('wedding_quiz_scores', JSON.stringify(scores));
}

function loadScores() {
  const saved = localStorage.getItem('wedding_quiz_scores');
  if (saved) {
    try {
      scores = JSON.parse(saved);
      document.getElementById('score-yani').textContent = scores.yani;
      document.getElementById('score-david').textContent = scores.david;
    } catch (e) {
      console.error("Error loading scores", e);
    }
  }
}

function initScoreboardToggle() {
  const scoreboard = document.getElementById('scoreboard');
  const toggleBtn = document.getElementById('toggle-score-btn');
  
  // Set initial state on body
  const isCollapsed = scoreboard.classList.contains('collapsed');
  document.body.classList.toggle('scoreboard-collapsed', isCollapsed);
  
  toggleBtn.addEventListener('click', () => {
    const collapsed = scoreboard.classList.toggle('collapsed');
    document.body.classList.toggle('scoreboard-collapsed', collapsed);
    
    if (collapsed) {
      toggleBtn.setAttribute('aria-label', 'Expandir marcador');
    } else {
      toggleBtn.setAttribute('aria-label', 'Minimizar marcador');
    }
  });
}

// 7. Navigation Control Handlers (Keyboard and buttons)
function initKeyboardControls() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      // Space or right arrow go next
      // Prevent default spacebar scrolling
      if (e.key === ' ') e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      // Left arrow goes back
      handlePrev();
    } else if (e.key === 'r' || e.key === 'R') {
      // Secret key 'R' to reveal answers on the slide if revealable
      const revealBtn = document.getElementById('reveal-all-btn');
      if (revealBtn) {
        revealBtn.click();
      }
    }
  });

  document.getElementById('prev-btn').addEventListener('click', handlePrev);
  document.getElementById('next-btn').addEventListener('click', handleNext);
}

// 8. Fullscreen Mode Controller
function initFullscreen() {
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  
  fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error enabling fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });

  // Dynamic icon update
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      // Fullscreen active, show collapse icon
      fullscreenBtn.innerHTML = `<svg viewBox="0 0 24 24" class="icon"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>`;
    } else {
      // Regular mode, show expand icon
      fullscreenBtn.innerHTML = `<svg viewBox="0 0 24 24" class="icon"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>`;
    }
  });
}

// 9. Menu Drawer Controls
function initMenuControls() {
  const trigger = document.getElementById('menu-trigger-btn');
  const sidebar = document.getElementById('sidebar-menu');
  const closeBtn = document.getElementById('close-sidebar-btn');

  trigger.addEventListener('click', () => {
    sidebar.classList.add('open');
  });

  closeBtn.addEventListener('click', closeSidebar);
  
  // Close menu if user clicks outside of it
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !trigger.contains(e.target) && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });
}

function closeSidebar() {
  document.getElementById('sidebar-menu').classList.remove('open');
}

// 10. GoT Ambient Particle System
function generateEmbers() {
  const container = document.getElementById('embers-container');
  const numParticles = 25;

  for (let i = 0; i < numParticles; i++) {
    createEmber(container);
  }
}

function createEmber(container) {
  const ember = document.createElement('div');
  ember.classList.add('ember');

  // Randomize characteristics
  const size = Math.random() * 4 + 2; // 2px to 6px
  const drift = (Math.random() * 200 - 100) + 'px'; // horizontal movement
  const startX = Math.random() * 100 + 'vw';
  const delay = Math.random() * 8 + 's';
  const duration = Math.random() * 6 + 5 + 's'; // 5s to 11s

  ember.style.width = size + 'px';
  ember.style.height = size + 'px';
  ember.style.left = startX;
  ember.style.animationDelay = delay;
  ember.style.animationDuration = duration;
  ember.style.setProperty('--ember-drift', drift);

  container.appendChild(ember);

  // Re-spawn ember after animation cycle ends to keep it continuous
  ember.addEventListener('animationiteration', () => {
    ember.style.left = Math.random() * 100 + 'vw';
    ember.style.setProperty('--ember-drift', (Math.random() * 200 - 100) + 'px');
  });
}

// 11. Music Controls Lógica
function initMusicControls() {
  const btn = document.getElementById('music-toggle-btn');
  if (btn) {
    btn.addEventListener('click', toggleMusic);
  }
}

function playMusic() {
  const audio = document.getElementById('bg-music');
  if (audio && audio.paused) {
    audio.play().then(() => {
      updateMusicIcon(true);
    }).catch(err => {
      console.log("Autoplay blocked or audio load error:", err);
    });
  }
}

function toggleMusic() {
  const audio = document.getElementById('bg-music');
  if (audio) {
    if (audio.paused) {
      audio.play().then(() => {
        updateMusicIcon(true);
      }).catch(err => {
        console.log("Error playing audio:", err);
      });
    } else {
      audio.pause();
      updateMusicIcon(false);
    }
  }
}

function updateMusicIcon(isPlaying) {
  const btn = document.getElementById('music-toggle-btn');
  if (btn) {
    if (isPlaying) {
      btn.classList.add('playing');
    } else {
      btn.classList.remove('playing');
    }
  }
}
