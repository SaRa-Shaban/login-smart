// SIGN UP

var nameInputUp = document.getElementById('nameUp');
var emailInputUp = document.getElementById('emailUp');
var passInputUp = document.getElementById('passUp');
var requiredError = document.getElementById('requiredError');
var signUp = document.getElementById('signUp');
var signIn = document.getElementById('signIn');
var inputs = Array.from(document.querySelectorAll('input'));

// login
var emailInputLogin = document.getElementById('emailLogin');
var passInputLogin = document.getElementById('passLogin');
var regestration = document.getElementById('regestration');
var login = document.getElementById('login');
var error = document.getElementById('error');


// welconme
var logOut = document.getElementById('logOut');
var hello = document.getElementById('hello');

// array & localStorage
var userList = [];

if (localStorage.getItem('userData') === null) {
    userList = [];
} else {
    userList = JSON.parse(localStorage.getItem('userData'));
}


// sign up  ---------------------------------------------------------------------------------------------
if (signUp) {
    signUp.addEventListener('click', makeRegister);
}

function makeRegister() {
    if (requiredUp() && checkEmail() != false) {
        var user = {
            nameUp: nameInputUp.value,
            emailUp: emailInputUp.value,
            passUp: passInputUp.value
        };

        userList.push(user);
        localStorage.setItem('userData', JSON.stringify(userList));
    }
}

function requiredUp() {
    var flag = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            requiredError.innerHTML = 'all inputs required';
            requiredError.style.color = 'red';
            flag = false;
            return false;
        }
    }

    flag = true;
    if (flag) {
        requiredError.innerHTML = 'success';
        requiredError.style.color = 'green';
        return true;
    }
}


function checkEmail() {
    for (i = 0; i < userList.length; i++) {
        if (emailInputUp.value == userList[i].emailUp && userList.length != null) {
            requiredError.innerHTML = 'this email is exist';
            requiredError.style.color = 'red';
            return false;
        }
    }
}

if (signIn != null) {
    signIn.addEventListener('click', function () {
        signIn.setAttribute('href', 'index.html');
    });
}

// login ---------------------------------------------------------------------------------------------

if (regestration) {
    regestration.addEventListener('click', function () {
        // regestration.href = "signup.html"
        regestration.setAttribute('href', 'signup.html');
    });
}

if (login != null) {
    login.addEventListener('click', makeLogin);

}

function makeLogin() {
    if (requiredLogin() && checkNameAndEmail()) {
        login.setAttribute('href', 'welcome.html');
        
    }
}

function requiredLogin() {
    var flag = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            error.innerHTML = 'all inputs required';
            error.style.color = 'red';
            flag = false;
            return false;
        }
    }

    flag = true;
    if (flag) {
        error.innerHTML = '';
        return true;
    }
}

function checkNameAndEmail() {
    var flag = true;
    for (var i = 0; i < userList.length; i++) {
        if (emailInputLogin.value === userList[i].emailUp && passInputLogin.value === userList[i].passUp) {
            localStorage.setItem('data' , userList[i].nameUp);
            flag = true;
            return true;
        }
    }

    flag = false;
    if (flag == false){
        error.innerHTML = 'email or password is wrong'
        error.style.color = 'red';
        return false;
    }
}


// welcome ---------------------------------------------------------------------------------------------------------------
if (logOut) {
    logOut.addEventListener('click', function() {
        // logOut.href = 'index.html';
        logOut.setAttribute('href', 'index.html');
    })
}


var nameUser = localStorage.getItem('data');
if(hello != null){
    hello.innerHTML = `welcome ${nameUser}`
}
