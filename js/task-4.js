const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const formField = event.target.elements;
    const email = formField.email.value.trim();
    const password = formField.password.value.trim();
    if (email === "" || password === "") {
        alert('All form fields must be filled in');
    } else {
        console.log({
            [formField.email.name]: email,
            [formField.password.name]: password,
        });
        event.target.reset();
    }
});

