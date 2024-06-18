document.addEventListener('DOMContentLoaded', () => {
    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            document.body.style.backgroundColor = option.style.backgroundColor;
        });
    });
});