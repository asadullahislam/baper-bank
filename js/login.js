// step -1: add click event handler with the submit button 

document.getElementById('btn-submit').addEventListener('click', function () {

    // Step-2: get the email address inside the email input field 

    // always remember to  use  .value get text form an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password 
    // 3.a : set id on the html element 
    // 3.b : set the element 
    // 3.c : set the value form the element 

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //DANGER:  do not verify email password on the client 

    // step - 4: varify email and password and check whether valid user or not 
    if (email === 'sontan@bap.com' && password === 'secret') {
        window.location.href = 'bankk.html';

    }
    else {
        alert(' Incorrect password  ');
    }



})