function Cadastro() {
    const email = document.getElementById('email');
    const senha = document.getElementById('password');

    [email, senha].forEach(el => el.classList.remove('erro'));
    let loginValido = true

    if(email.value.trim() === '') {
        email.classList.add('erro');
        loginValido = false;
    }
    if(senha.value.trim() === '') {
        senha.classList.add('erro');
        loginValido = false;
    }
    if(loginValido) {
        alert('Cadastro feito com sucesso!');
    }else {
        alert('Por favor, preencha os campus!');
    }
}