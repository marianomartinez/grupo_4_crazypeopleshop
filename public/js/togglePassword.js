window.addEventListener('load', () => {
    
    let togglePassword = document.querySelector('#togglePassword');
    let password = document.querySelector("input[type='password']");

    togglePassword.addEventListener('click', (e) => {
        let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        togglePassword.children[0].classList.toggle('fa-eye-slash');
    });



    let togglePassword2 = document.querySelector('#togglePassword2');
    let password2 = document.getElementById("password2");

    togglePassword2.addEventListener('click', (e) => {
        let type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
        password2.setAttribute('type', type);
        togglePassword2.children[0].classList.toggle('fa-eye-slash');
    });

   
});
