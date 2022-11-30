function register() {
    var first = document.getElementById("first");
    var last = document.getElementById("last");
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    var email = document.getElementById("email");

    if(first.value.length == 0) {
        alert("Please enter first name.")
    }
    else if(last.value.length == 0) {
        alert("Please enter last name.")
    }
    else if(user.value.length == 0) {
        alert("Please enter username.")
    }
    else if(pass.value.length == 0) {
        alert("Please enter password.")
    }
    else if(email.value.length == 0) {
        alert("Please enter email.")
    } else {
        localStorage.setItem('first', first.value);
        localStorage.setItem('last', last.value);
        localStorage.setItem('user', user.value);
        localStorage.setItem('pass', pass.value);
        localStorage.setItem('email', email.value);
        alert("Your account has been successfully created.");
        location.href='page1.html';
    }
}

function login() {
    var storedUser = localStorage.getItem('user');
    var storedPass = localStorage.getItem('pass');


    var userName = document.getElementById("userName").value;
    var passWord = document.getElementById("passWord").value;

    if(userName == storedUser && passWord == storedPass){
        alert('You have been logged in.');
        location.href='signinhome.html';
    } else {
        alert('Error: cannot login.');
    }
}
