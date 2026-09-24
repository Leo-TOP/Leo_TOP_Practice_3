"use strict";

const cards = document.querySelectorAll("[data-event]");
const eventCount = document.querySelector("#event-count");
const eventDetails = document.querySelector("#event-details")
eventCount.textContent = cards.length;

const detailsTitle = document.querySelector("#details-title")
const detailsDescription = document.querySelector("#details-description")
const detailsTime = document.querySelector("#details-time")

let selectedCard = null;

function showEvent(card) {
  if (selectedCard) {
    selectedCard.classList.remove("event-card--selected");
  }

  card.classList.add("event-card--selected");
  selectedCard = card;

  eventDetails.style.setProperty("--accent", card.dataset.accent);

  detailsTitle.textContent = card.dataset.title;
  detailsDescription.textContent = card.dataset.description;
  detailsTime.textContent = card.dataset.time;
} 

cards.forEach((eventCard) => {
  eventCard.addEventListener("click", () => {
    showEvent(eventCard);
  });
}); 


const surpriseButton = document.querySelector("#surprise-button")

surpriseButton.addEventListener("click", () => {
  let index = Math.floor(Math.random() * cards.length);

  if (selectedCard === cards[index]) {
    index = (index + 1) % cards.length;
  }

  showEvent(cards[index]);
});
