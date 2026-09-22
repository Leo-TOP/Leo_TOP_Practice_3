"use strict";

// Семинар 1-3. Идите по заданиям 01–10 из TASKS.md.
// Не вставляйте готовый код целиком: после каждого шага проверьте страницу.

const firstCard = document.querySelector('[data-event="talk"]');
const labStatus = document.querySelector("#lab-status");

// 01. Уберите /* и */ вокруг обработчика, сохраните файл и нажмите
// первую карточку. Потом переходите к заданию 02 в TASKS.md.

const eventName = "Город в деталях";
let clickCount = 0;

const detailsTitle = document.querySelector("#details-title");

firstCard.addEventListener("click", () => {
  clickCount = clickCount + 1;
  if (clickCount == 1) {
    labStatus.textContent = `Первое открытие: ${eventName}`;
  } else {
    labStatus.textContent = `Повторное открытие: ${eventName}`;
  }

  detailsTitle.textContent = eventName;
});

const secondCard = document.querySelector('[data-event="workshop"]');
const eventName1 = "Мастерская постеров"

secondCard.addEventListener("click", () => {
  detailsTitle.textContent = eventName1;
});

// 02–03. Вы будете постепенно менять обработчик выше: добавите
// переменные, счетчик нажатий и условие. Не создавайте второй
// обработчик для той же карточки, пока не разобрались с первым.

// 04–05. Найдете элементы панели и подключите вторую карточку.

// 06. Сравните учебный массив с коллекцией карточек из DOM.

// 07. Обойдете все карточки циклом. В этом месте временно могут
// сосуществовать старые и новые обработчики; в задании 08 вы
// удалите временные и оставите один общий путь обработки клика.

// 08. Напишете функцию showEvent(card) и возьмете данные из HTML.

// 09. Добавите выбранное состояние, акцент и CSS-анимацию.

// 10. Самостоятельно оживите кнопку «Удиви меня».
