const randomNumberfeedback = document.querySelector("#randomNumber");
const generateRandomBtn = document.querySelector("#generateRandomBtn");

generateRandomBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const feedbackMessage = `Random Number: ${randomNumber}`;
    randomNumberfeedback.innerHTML = feedbackMessage;

});