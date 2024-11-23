import GameLogic from './Logic/GameLogic.js';
import './View/Sound.js';

// Инициализируем игровую логику. Входной параметр - размер игрового поля
const gameLogic = new GameLogic(3);

// Получаем ячейки игрового поля
var articles = $('#game__board td');

// Добавление обработчиков события click
$(document).ready(function () {

	// Первый ход игрока
	$('.choose-player__btn--player').click(function () {
		newParty();
	});

	// Первый ход компьютера
	$('.choose-player__btn--comp').click(function () {
		newParty();
		gameLogic.computer.randomStep($('.game > table  tr').length, gameLogic.gameModel, gameLogic.view);
	});

	gameLogic.view.showBlock('#history');

	// Показ/скрытие блоков
	$('.show-history__btn').click(function () {
		gameLogic.view.showBlock('#history', '');
	});
	$('.header__help-btn').click(function () {
		gameLogic.view.showBlock('.help-block', '');
	});
});

// Запуск новой игровой партии
function newParty() {

	// Сброс UI игры в начало партии
	gameLogic.view.restart($('#game__board'));

	gameLogic.clearModel();
	// Вешаем обработчик кликов на ячейки игрового поля
	$(articles).click(function () {
		gameLogic.clickOnCell(this);
	});
}