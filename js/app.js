$(document).ready(function(){

  $("#contactForm").submit(function( event ) {
    $('.error-message').text('');

    if ( $( "#nameInput" ).val() === "" ) {
      $( "#nameError" ).text( "Empty name is not valid!" ).show();
      event.preventDefault();
    }
    if ( $( "#messageInput" ).val() === "" ) {
      $( "#messageError" ).text( "Empty message is not valid!" ).show();
      event.preventDefault();
    }
    if ( $( "#subjectInput" ).val() === "" ) {
      $( "#subjectError" ).text( "Empty subject is not valid!" ).show();
      event.preventDefault();
    }
    var email = $( "#emailInput" ).val();
    if ( !validateEmail(email) ) {
      $( "#emailError" ).text( "Your email: " + email + " is not valid!" ).show();
      event.preventDefault();
    }   
  });
});

function formHanlder(){
  $("#validation").text("OK!").show();
  alert( "success!!!" );
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}