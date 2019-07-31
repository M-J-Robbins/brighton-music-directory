
'use strict';

/*** Code for GET request for JSON file ***/
// Location of JSON file
var jsonURL = 'https://spreadsheets.google.com/feeds/list/1n7KTF8uQKnB5r9_UOct9_UGGfGIDZaw4XIjfkc-ICNU/odimgem/public/values?alt=json';


// Create an XMLHttpRequest
var jsonRequest = new XMLHttpRequest();

// request will cycle through states
// once the request is complete, the JSON will be processed and converted to HTML elements
// if there was an error getting the data, the error message will be logged in the console

function processJSON(request) {
request.onreadystatechange = function(data) {
    if (request.readyState === 4) {
      if (request.status === 200) {
        var json = JSON.parse(request.responseText);
        var outputElement = document.getElementById("studios");
        var outputHTML = '';
        for (var i=0; i < json.resources.length; i++ ) {
          outputHTML += '<div>';
          outputHTML += feed.entry[i].title.$t;         
          outputHTML += '</div>';
        }
        outputElement.innerHTML = outputHTML;      
      } else {
            // add error message to span         
            var err = request.statusText + ' (' + request.status + ')';
            console.log(err);
          } // end status !== 200 condition
        } // end status === 4 condition
  } // end request ready state event
}

// Open and Send XMLHttpRequest by passing in URL of JSON file
function requestJSON(json) {  
  jsonRequest.open('GET', json);
  jsonRequest.send();
  processJSON(jsonRequest);
}
  
window.onload = function() {
  console.log('event fired');
  requestJSON(jsonURL);
};
