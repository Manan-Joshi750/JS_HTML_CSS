document.addEventListener("DOMContentLoaded", function() {
    let questions = [
        "What's Your Name ?",
        "Where Are You From ?",
        "Anddd... What's Your Favourite Food ?",
        "What Project Are You Working On ?"
    ];
    let num = 0;
    let inputBox = document.querySelector("#ans");
    let boxVisibility = document.querySelector(".input");
    let output = document.querySelector("#result");
    output.innerHTML = questions[num];

    function showResponse() {
        let input = inputBox.value;
        if (input !== "") {
            if (num === 0) {
                output.innerHTML = `Heyyy... ${input}`;
            } else if (num === 1) {
                output.innerHTML = `Hmmm... ${input} sounds like a good place.`;
            } else if (num === 2) {
                output.innerHTML = `Yummm! I love ${input} too!`;
            } else if (num === 3) {
                output.innerHTML = `Awesome, ${input}!`;
                inputBox.value = "";
                inputBox.setAttribute("placeholder", "Wait for 2s....");
                num++;
                setTimeout(closingMessage, 2000);
                return; // Exit the function to wait for closing message
            }
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Wait for 2s....");
            num++;
            if (num < questions.length) {
                setTimeout(changeQuestion, 2000);
            }
        }
    }

    function changeQuestion() {
        inputBox.setAttribute("placeholder", "Enter Your Response");
        output.innerHTML = questions[num];
    }

    function closingMessage() {
        output.innerHTML = "Alright then... It was nice talking to you :) Have a Great day ahead !";
        boxVisibility.style.display = "none";
    }

    inputBox.addEventListener("keypress", function(e) {
        if (e.which === 13 || e.keyCode === 13) {
            showResponse();
        }
    });

    inputBox.focus();
});