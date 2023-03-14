// add event handler in button 
document.getElementById('submit-btn').addEventListener('click', function () {
    // console.log('submit');
    // get email input field Value 
    const emailInputField = document.getElementById('email-input-field');
    const email = emailInputField.value;
    // console.log(email);
    // get password Input field value 
    const passwordInputField = document.getElementById('password-input-field')
    const password = passwordInputField.value;
    // console.log(password);
    if (email == 'sontan@bap.com' && password == 'secret') {
        window.location.href = 'bank.html';
    } else {
        alert('invalid user');
    }
})