function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    const ageDisplay = document.querySelector('.valid-input');

    if (!birthdateInput) {
        ageDisplay.classList.add("invalid-input");
        ageDisplay.textContent = 'Please enter a valid birthdate.';
        return;
    }

    const birthdate = new Date(birthdateInput);
    const today = new Date();
    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();
    // Adjust months and years if birthdate hasn't occurred yet this month
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }  
    // Adjust days if the birthdate hasn't occurred yet this month
    if (days < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }

    ageDisplay.classList.remove("invalid-input");
    ageDisplay.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
}