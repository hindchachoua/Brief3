var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}







function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }




  document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address';
        event.preventDefault();
    } else {
        document.getElementById('emailError').innerText = '';
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number';
        event.preventDefault();
    } else {
        document.getElementById('passwordError').innerText = '';
    }
});