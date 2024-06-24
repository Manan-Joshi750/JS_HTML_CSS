document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.querySelector('#passwordInput input[type="password"]');
    const passwordStrength = document.getElementById("passwordStrength");
    const poor = document.querySelector("#passwordStrength #poor");
    const weak = document.querySelector("#passwordStrength #weak");
    const strong = document.querySelector("#passwordStrength #strong");
    const passwordInfo = document.getElementById("passwordInfo");
    const showHide = document.querySelector("#passwordInput #showHide");

    const poorRegExp = /[a-z]/;
    const weakRegExp = /(?=.*?[0-9])/;
    const strongRegExp = /(?=.*?[#?!@$%^&*-])/;
    const whitespaceRegExp = /^$|\s+/;

    passwordInput.addEventListener('input', () => {
        const passwordValue = passwordInput.value;
        const passwordLength = passwordValue.length;

        const poorPassword = poorRegExp.test(passwordValue);
        const weakPassword = weakRegExp.test(passwordValue);
        const strongPassword = strongRegExp.test(passwordValue);
        const whitespace = whitespaceRegExp.test(passwordValue);

        if (passwordValue !== "") {
            passwordStrength.style.display = "flex";
            passwordInfo.style.display = "block";

            if (whitespace) {
                passwordInfo.textContent = "Whitespaces are not allowed";
                passwordInfo.className = "";
            } else {
                poor.classList.remove("active");
                weak.classList.remove("active");
                strong.classList.remove("active");

                if (passwordLength <= 3 && (poorPassword || weakPassword || strongPassword)) {
                    poor.classList.add("active");
                    passwordInfo.textContent = "Your password is poor";
                    passwordInfo.className = "poor";
                } else if (passwordLength >= 4 && poorPassword && (weakPassword || strongPassword)) {
                    poor.classList.add("active");
                    weak.classList.add("active");
                    passwordInfo.textContent = "Your password is weak";
                    passwordInfo.className = "weak";
                } else if (passwordLength >= 6 && poorPassword && weakPassword && strongPassword) {
                    poor.classList.add("active");
                    weak.classList.add("active");
                    strong.classList.add("active");
                    passwordInfo.textContent = "Your password is strong";
                    passwordInfo.className = "strong";
                }
            }
        } else {
            passwordStrength.style.display = "none";
            passwordInfo.style.display = "none";
        }
    });

    showHide.addEventListener('click', () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showHide.textContent = "HIDE";
            showHide.style.color = "green";
        } else {
            passwordInput.type = "password";
            showHide.textContent = "SHOW";
            showHide.style.color = "#007bff";
        }
    });
});