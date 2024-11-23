// Подключение аудиофайла
const audio = new Audio('src/audio/background.mp3');
// Подключение аудиофайла для звука
const buttonSound = new Audio('src/audio/sound.mp3');

audio.loop = true; // Зацикливание аудио

// Переменная для отслеживания состояния музыки
let isMusicPlaying = true;
// Переменная для отслеживания состояния звука
let isSoundEnabled = true;

// Элемент изображения
const musicIcon = document.querySelector('.header__music-img');
// Элемент изображения для звука
const soundIcon = document.querySelector('.header__sound-img');

// Обработчик для кнопки управления музыкой
document.querySelector('.header__music-btn').addEventListener('click', function () {
    if (isMusicPlaying) {
		audio.play();
        musicIcon.src = "img/music-on.png"; // Замена на картинку "музыка включена"
        musicIcon.alt = "Музыка включена";
    } else {
        audio.pause();
        musicIcon.src = "img/music-off.png"; // Замена на картинку "музыка выключена"
        musicIcon.alt = "Музыка выключена";
    }
    isMusicPlaying = !isMusicPlaying;
});

// Обработчик для кнопки управления звуком
document.querySelector('.header__sound-btn').addEventListener('click', function () {
    if (isSoundEnabled) {
		soundIcon.src = "img/sound-off.png"; // Замена на картинку "звук выключен"
        soundIcon.alt = "Звук выключен";
    } else {
		soundIcon.src = "img/sound-on.png"; // Замена на картинку "звук включен"
        soundIcon.alt = "Звук включен";
    }
    isSoundEnabled = !isSoundEnabled;
});

// Добавление звука при нажатии на кнопки и ссылки
document.addEventListener('click', function (event) {
    const target = event.target;
    if ((target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'TD' || target.tagName === 'IMG' || target.tagName === 'I') 
	&& isSoundEnabled) {
		buttonSound.play();
    }
});