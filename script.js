const codes = document.querySelectorAll('.code');

codes.forEach((code, id) => {
    code.addEventListener('input', () => {
        if (code.value.length === 1 && id < codes.length - 1) {
            codes[id + 1].focus();
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && code.value.length === 0 && id > 0) {
            codes[id - 1].focus();
        }
    });
});