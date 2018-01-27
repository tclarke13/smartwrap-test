//$(document).ready(function() {
  //  console.log("ready!");
//});

chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "../pages/smartwrap.html";
  chrome.tabs.create({ url: newURL });
});

 function sendmessage(){
      //window.alert("hey");                                                                         
      //$("body").append("hey");                                                                     
  $(":button").text("hey buddy");
 }
