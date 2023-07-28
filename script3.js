window.onload = function () {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("openModal");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  var registrationForm = document.getElementById("registrationForm");
  registrationForm.onsubmit = function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // Perform your registration logic here
    console.log("Name: " + name);
    console.log("Email: " + email);
    modal.style.display = "none";
  }
};
