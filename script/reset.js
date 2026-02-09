function resetPassword() {
  const newPass = document.getElementById("newPass").value;
  const confirmPass = document.getElementById("confirmPass").value;
  const resetEmail = localStorage.getItem("resetEmail");
  const short = newPass.lenght < 8;

  if (!resetEmail) {
    alert("No reset request found.");
    return;
  }
  if (short) {
    alert("Password cannot be less than 8 characters !");
    return;
  }
  if (newPass !== confirmPass) {
    alert("Passwords do not match.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userIndex = users.findIndex(u => u.email === resetEmail);

  if (userIndex === -1) {
    alert("User not found.");
    return;
  }

  users[userIndex].password = newPass;  
  localStorage.setItem("users", JSON.stringify(user));
  localStorage.removeItem("resetEmail");

  alert("Password reset successful!");
  window.location.href = "index.html";
}