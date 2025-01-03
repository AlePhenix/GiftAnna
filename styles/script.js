const italianoBtn = document.getElementById('italian_btn');
const españolBtn = document.getElementById('spanish_btn');
const backBtn = document.getElementById('backLenguaje');
const backBtn2 = document.getElementById('back2');
const lenguajeSection = document.getElementById('lenguajeSection');
const italianSection = document.getElementById('italianSection');
const spanishSection = document.getElementById('spanishSection');




italianoBtn.addEventListener('click', () => {
    lenguajeSection.classList.toggle('hidden');
    italianSection.classList.toggle('hidden');

});
backBtn.addEventListener('click', () => {
    lenguajeSection.classList.toggle('hidden');
    italianSection.classList.toggle('hidden');
});


españolBtn.addEventListener('click', () => {
    lenguajeSection.classList.toggle('hidden');
    spanishSection.classList.toggle('hidden');
});
backBtn2.addEventListener('click', () => {
    lenguajeSection.classList.toggle('hidden');
    spanishSection.classList.toggle('hidden');
});