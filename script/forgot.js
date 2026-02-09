function checkEmail() {
  const email = document.getElementById("forgotEmail").value;
  const users = JSON.parse(localStorage.getItem("user")) || [];

  const user = users.find(u => u.email === email);

  if (user) {
    // Save temporarily so reset page knows who we are changing
    localStorage.setItem("resetEmail", email);
    window.location.href = "reset.html";
  } else {
    alert("No account found with that email.");
  }
}