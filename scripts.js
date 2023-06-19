document.addEventListener('DOMContentLoaded', function() {
    const abaLateral = document.querySelector('.abaLateral');
    const headerNav = document.querySelector('.header');

    abaLateral.addEventListener('click', function() {
        headerNav.classList.toggle('show');
    });
});

document.querySelector('.info-button').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'block';
});

function validateForm() {
    var inputs = document.querySelectorAll('input, textarea, select');
    var isFormValid = true;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            isFormValid = false;
            break;
        }
    }

    if (!isFormValid) {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }

    return true;
}
