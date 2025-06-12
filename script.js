// Slider mejorado con autoplay
let currentSlide = 0;
let slideInterval;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideDuration = 5000; // 5 segundos

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
}

// Event listeners con feedback táctil
prevBtn.addEventListener('click', () => {
  prevSlide();
  resetSlideTimer();
  addClickFeedback(prevBtn);
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetSlideTimer();
  addClickFeedback(nextBtn);
});

// Función para feedback al hacer clic
function addClickFeedback(button) {
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 200);
}

// Autoplay del slider
function startSlideTimer() {
  slideInterval = setInterval(nextSlide, slideDuration);
}

function resetSlideTimer() {
  clearInterval(slideInterval);
  startSlideTimer();
}

// Toggle image visibility con animación
function toggleImage(id) {
  const imgContainer = document.getElementById(id);
  imgContainer.classList.toggle('hidden');
  
  if (!imgContainer.classList.contains('hidden')) {
    // Scroll suave a la imagen
    imgContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Iniciar slider
showSlide(currentSlide);
startSlideTimer();

// Efecto de aparición gradual al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.style.opacity = '1';
    }, index * 200);
  });
});
// Añadir al final del archivo
// Efecto para tarjetas de versículos
document.querySelectorAll('.verse-card').forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('expanded');
    if (this.classList.contains('expanded')) {
      this.style.transform = 'scale(1.03)';
      this.style.zIndex = '10';
      this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
    } else {
      this.style.transform = '';
      this.style.zIndex = '';
      this.style.boxShadow = '';
    }
  });
});

// Actualizar descripción del slider
const slideCaptions = [
  "Arthur reflexiona sobre sus acciones al atardecer, un momento clave en su camino de redención.",
  "Arthur ayuda a construir una casa, mostrando su deseo de dejar un legado positivo.",
  "El último viaje de Arthur, donde sacrifica su vida para salvar a John Marston.",
  "Arthur contempla el atardecer, simbolizando el ocaso de su vida y su búsqueda de paz interior."
];

function updateSlideCaption() {
  document.getElementById('currentSlideCaption').textContent = slideCaptions[currentSlide];
}

// Modificar las funciones del slider para incluir la actualización de descripción
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  updateSlideCaption();
}

function prevSlide() {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
  updateSlideCaption();
}

// Inicializar descripción
updateSlideCaption();
// Añadir al final del archivo existente
// Slider de símbolos cristianos mejorado
let currentSymbol = 0;
const symbolSlides = document.querySelectorAll('.symbol-slide');
const totalSymbols = symbolSlides.length;

function showSymbol(index) {
  symbolSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    
    // Ajuste dinámico de altura
    if (i === index) {
      const img = slide.querySelector('img');
      img.onload = function() {
        const container = slide.querySelector('.symbol-img-container');
        container.style.maxWidth = `${Math.min(img.naturalWidth + 40, 800)}px`;
      };
    }
  });
  document.querySelector('.current-symbol').textContent = index + 1;
}

function nextSymbol() {
  currentSymbol = (currentSymbol + 1) % totalSymbols;
  showSymbol(currentSymbol);
}

function prevSymbol() {
  currentSymbol = (currentSymbol === 0) ? totalSymbols - 1 : currentSymbol - 1;
  showSymbol(currentSymbol);
}

// Event listeners mejorados
document.querySelectorAll('.symbol-btn.prev').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    prevSymbol();
    addClickFeedback(btn);
  });
});

document.querySelectorAll('.symbol-btn.next').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    nextSymbol();
    addClickFeedback(btn);
  });
});

// Inicialización mejorada
document.addEventListener('DOMContentLoaded', () => {
  totalSymbolsDisplay.textContent = totalSymbols;
  showSymbol(currentSymbol);
  
  // Precarga de imágenes
  symbolSlides.forEach(slide => {
    const img = slide.querySelector('img');
    if (img.complete) {
      img.dispatchEvent(new Event('load'));
    }
  });
});

// Añadir al final del script.js
document.getElementById('questionsBtn').addEventListener('click', function() {
  const questionsList = document.getElementById('questionsList');
  const isHidden = questionsList.classList.contains('hidden');
  
  // Toggle para mostrar/ocultar
  questionsList.classList.toggle('hidden');
  
  // Añadir clase adicional para la animación
  if (isHidden) {
    setTimeout(() => {
      questionsList.classList.add('show');
      questionsList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 10);
  } else {
    questionsList.classList.remove('show');
  }
  
  // Cambiar texto del botón
  this.textContent = isHidden ? 'Ocultar Preguntas' : 'Preguntas para Reflexión';
  
  // Efecto de click
  this.classList.add('clicked');
  setTimeout(() => {
    this.classList.remove('clicked');
  }, 200);
});
