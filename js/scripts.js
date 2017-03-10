function initialize() {
  // Publicly available Google Maps javascript.
  // Available from https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map)
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(-27.4717418, 153.0185228),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
}

function attending() {
  // Top attending form
  var name = document.getElementById('name').value; // Getting name

  if (name == null || name == "") {
    var nameError = true; // Raise error if no name given
  }
  var email = document.getElementById('email').value;
  if (email == null || email == "") {
    var emailError = true; // Raise error if no email given
  }
  var error = false;
  if (nameError == true && emailError == true) { // Handling different message outputs based on input data
    document.getElementById("errorbox").innerHTML='Please enter your Name and your E-Mail address';
    var error = true;
  } else if (nameError == true) {
    document.getElementById("errorbox").innerHTML='Please enter your Name';
    var error = true;
  } else if (emailError == true) {
    document.getElementById("errorbox").innerHTML='Please enter your E-Mail address';
    var error = true;
  }

  if (error == true) {
    event.preventDefault();
    document.getElementById("errorbox").style.visibility = "visible"; // Showing result
  } else {
    document.getElementById("errorbox").style.visibility = "hidden";
    document.getElementById("successbox").innerHTML = "Attendance noted";
    event.preventDefault(); // Since this form doesnt actually need to submit
    document.getElementById("successbox").style.visibility = "visible";
  }

}

function attending2() {
  // Bottom attending form, same as previous (should optimise to use a single fn)
  // TODO Change this to be more efficient when I have time
  var name = document.getElementById('name2').value;

  if (name == null || name == "" || name == "Write your name") {
    var nameError = true;
  }
  var email = document.getElementById('email2').value;
  if (email == null || email == "" || email == "Write your email address") {
    var emailError = true;
  }
  var error = false;
  if (nameError == true && emailError == true) {
    document.getElementById("errorbox2").innerHTML='Please enter your Name and your E-Mail address';
    var error = true;
  } else if (nameError == true) {
    document.getElementById("errorbox2").innerHTML='Please enter your Name';
    var error = true;
  } else if (emailError == true) {
    document.getElementById("errorbox2").innerHTML='Please enter your E-Mail address';
    var error = true;
  }

  if (error == true) {
    event.preventDefault();
    document.getElementById("errorbox2").style.visibility = "visible";
  } else {
    document.getElementById("errorbox2").style.visibility = "hidden";
    document.getElementById("successbox2").innerHTML = "Attendance noted";
    event.preventDefault(); // Since this form doesnt actually need to submit
    document.getElementById("successbox2").style.visibility = "visible";
  }

}

function contactForm() {
  // Sending a message to administrators
  var name = document.getElementById("name3").value;
  var email = document.getElementById("email3").value;
  var message = document.getElementById("message3").value;


  if (name == null || name == "") {
    var nameError = true;
  }
  if (email == null || email == "" ) {
    var emailError = true;
  }
  if (message == null || message == "" || message.length <= 20) {
    var messageError = true;
  }

  var error = false;

  if (nameError == true && emailError == true && messageError == true) { // Based on input, return an error message
    document.getElementById("errorbox").innerHTML='Please enter your name and E-mail address, also ensure your message is 20 characters long';
    var error = true;
  } else if (nameError == true && emailError == true ) {
    document.getElementById("errorbox").innerHTML='Please enter your name and E-mail address';
    var error = true;
  } else if (nameError == true && messageError == true) {
    document.getElementById("errorbox").innerHTML='Please enter your name and ensure your message is 20 characters long';
    var error = true;
  } else if (emailError == true && messageError == true) {
    document.getElementById("errorbox").innerHTML='Please enter your E-Mail address and ensure your message is 20 characters long';
    var error = true;
  } else if (nameError == true) {
    document.getElementById("errorbox").innerHTML='Please enter your Name';
    var error = true;
  } else if (emailError == true) {
    document.getElementById("errorbox").innerHTML='Please enter your E-Mail address';
    var error = true;
  } else if (messageError == true) {
  document.getElementById("errorbox").innerHTML='Please ensure your message is over 20 characters long';
  var error = true;
}

  if (error == true) {
    event.preventDefault();
    document.getElementById("errorbox").style.visibility = "visible"; // Show error
  } else {
    document.getElementById("errorbox").style.visibility = "hidden";
    document.getElementById("successbox").innerHTML = "Message sent";
    event.preventDefault(); // Since this form doesnt actually need to submit
    document.getElementById("successbox").style.visibility = "visible";
  }
}

function publishcomment1(){
  // The comment box on the projects page
  var name = document.getElementById("name4").value;
  var email = document.getElementById("email4").value;
  var comment = document.getElementById("addcomment4").value;

  if (name == null || name == "") {
    var nameError = true;
  }
  if (email == null || email == "") {
    var emailError = true;
  }
  if (comment == null || comment == "" || comment.length <= 20) {
    var messageError = true;
  }

  var error = false;

  if (nameError == true && emailError == true && messageError == true) { // Return an error result based on input
    document.getElementById("errorbox").innerHTML='Please enter your name and E-mail address, also ensure your comment is 20 characters long';
    var error = true;
  } else if (nameError == true && emailError == true ) {
    document.getElementById("errorbox").innerHTML='Please enter your name and E-mail address';
    var error = true;
  } else if (nameError == true && messageError == true) {
    document.getElementById("errorbox").innerHTML='Please enter your name and ensure your comment is 20 characters long';
    var error = true;
  } else if (emailError == true && messageError == true) {
    document.getElementById("errorbox").innerHTML='Please enter your E-Mail address and ensure your comment is 20 characters long';
    var error = true;
  } else if (nameError == true) {
    document.getElementById("errorbox").innerHTML='Please enter your Name';
    var error = true;
  } else if (emailError == true) {
    document.getElementById("errorbox").innerHTML='Please enter your E-Mail address';
    var error = true;
  } else if (messageError == true) {
  document.getElementById("errorbox").innerHTML='Please ensure your comment is over 20 characters long';
  var error = true;
  }

  if (error == true) {
    event.preventDefault();
    document.getElementById("errorbox").style.visibility = "visible";
  } else {
    document.getElementById("errorbox").style.visibility = "hidden";
    document.getElementById('comments4').innerHTML += "&#013;&#010;" + name + ": " + comment; // Adding a line break, then the comment itself
    event.preventDefault(); // Since this form doesnt actually need to submit
  }
}

function publishcomment2(){
  // Same as previous comment box
  var name = document.getElementById("name5").value;
  var email = document.getElementById("email5").value;
  var comment = document.getElementById("addcomment5").value;
  if (name == null || name == "" || name == "Write your name") {
    var nameError = true;
  }
  if (email == null || email == "" || email == "Write your email address") {
    var emailError = true;
  }
  if (comment == null || comment == "" || comment.length <= 20) {
    var messageError = true;
  }

  var error = false;

  if (nameError == true && emailError == true && messageError == true) {
    document.getElementById("errorbox1").innerHTML='Please enter your name and E-mail address, also ensure your comment is 20 characters long';
    var error = true;
  } else if (nameError == true && emailError == true ) {
    document.getElementById("errorbox1").innerHTML='Please enter your name and E-mail address';
    var error = true;
  } else if (nameError == true && messageError == true) {
    document.getElementById("errorbox1").innerHTML='Please enter your name and ensure your comment is 20 characters long';
    var error = true;
  } else if (emailError == true && messageError == true) {
    document.getElementById("errorbox1").innerHTML='Please enter your E-Mail address and ensure your comment is 20 characters long';
    var error = true;
  } else if (nameError == true) {
    document.getElementById("errorbox1").innerHTML='Please enter your Name';
    var error = true;
  } else if (emailError == true) {
    document.getElementById("errorbox1").innerHTML='Please enter your E-Mail address';
    var error = true;
  } else if (messageError == true) {
  document.getElementById("errorbox1").innerHTML='Please ensure your message is over 20 comment long';
  var error = true;
  }

  if (error == true) {
    event.preventDefault();
    document.getElementById("errorbox1").style.visibility = "visible";
  } else {
    document.getElementById("errorbox1").style.visibility = "hidden";
    document.getElementById('comments5').innerHTML += "&#013;&#010;" + name + ": " + comment;
    event.preventDefault(); // Since this form doesnt actually need to submit
  }

}

function slider(count) {
  // Home page image slider
  if (!count) {
    var count = 1; // Declaring count variable
  }

  if (count < 4) { // Based on the count value, a new image will be loaded
    if (count == 1) {
      document.getElementById("gallery").src="images/hackerspace.png";
    } else if (count == 2) {
      document.getElementById("gallery").src="images/hacking.jpg";
    } else if (count == 3) {
      document.getElementById("gallery").src="images/computers.jpg";
      count = 0;
    }
    count ++;
    setTimeout("slider(" + count + ")",5000); // Delay before the image changes
  }
}
