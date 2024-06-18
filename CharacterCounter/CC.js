document.addEventListener("DOMContentLoaded", () => {
    const inputValue = document.querySelector("#input");
    const outputValue = document.querySelector("#result");

    inputValue.addEventListener("input", () => {
        const inputText = inputValue.value;
        const characterCount = inputText.length;
        outputValue.textContent = characterCount < 10 ? "0" + characterCount : characterCount;
    });
});