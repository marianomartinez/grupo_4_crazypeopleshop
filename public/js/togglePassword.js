window.addEventListener('load', () => {
    let togglePassword = document.querySelector('#togglePassword');
    let password = document.querySelector("input[type='password']");

    togglePassword.addEventListener('click', (e) => {
        let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        togglePassword.children[0].classList.toggle('fa-eye-slash');
    });

   
});
