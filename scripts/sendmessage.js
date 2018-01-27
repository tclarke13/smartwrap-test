$(document).ready(function(){

  function sendmessage(){
      //window.alert("hey");
      //$("body").append("hey");
      $("#thebutton").text("hey buddy");

      var xhttp = new XMLHttpRequest();
      //$.post("https://sw-auth.appspot.com/Persist");
      $.get( "https://sw-auth.appspot.com/whoami", function(data) {
          $( "body" ).append( data );
          
          alert( "Load1 was performed." );
      });
      $.post( "https://sw-auth.appspot.com/Persist", function(data, status, xhr) {
          $( "body" ).append( data );
          $( "body" ).append( status );
          $( "body" ).append( xhr );
          
          alert( "Load2 was performed." );
      });
  }

  $("#thebutton").click(sendmessage);
   
});
