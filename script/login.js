function showRegister() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("registerSection").style.display = "block";
}

function showLogin() {
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
}

/* REGISTER USER */
function registerUser() {
    let username = document.getElementById("regUsername").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let passy = document.getElementById("regPassword").value;
    let confirm = document.getElementById("regConfirm").value;

    if (!username || !email || !passy || !confirm) {
        alert("Fill all fields");
        return;
    }

    if (passy !== confirm) {
        alert("Passwords do not match");
        return;
    }
   else{
    const user = {
        username: username,
        email: email,
        password: passy
    };
    
    localStorage.setItem("user",JSON.stringify(user));
    
   
    alert("Account Created Successfully!");
    
    document.getElementById("regUsername").value="";
    document.getElementById("regEmail").value="";
    document.getElementById("regPassword").value="";
    document.getElementById("regConfirm").value="";

    showLogin();
}

/* LOGIN USER */
function sign(){
    
    if (!saved) {
        alert("No user found, please register first!");
        return;
    }

    let username = document.getElementById("loginUsername").value.trim();
    let pas = document.getElementById("loginPassword").value;

    if (username === saved.username && pas === saved.password) {
       document.getElementById("loginUsername").value="";
       document.getElementById("loginPassword").value="";
        window.location='index.html'
    } else {
        alert("Incorrect username or password");
    };
}

function showpassword(){
    
         const password = document.getElementById("loginPassword").value;
  
             password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            
            // Toggle the icon display
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash')
        

}
  
  const regpassword = document.getElementById("loginPassword").value;
  const pass = document.getElementById("loginPassword").value;
    
}