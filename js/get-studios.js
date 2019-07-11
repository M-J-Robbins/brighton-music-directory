
'use strict';

/*** Code for GET request for JSON file ***/
// Location of JSON file
var galleryURL = 'https://spreadsheets.google.com/feeds/list/1n7KTF8uQKnB5r9_UOct9_UGGfGIDZaw4XIjfkc-ICNU/odimgem/public/values?alt=json';

// Create an XMLHttpRequest
var jsonRequest = new XMLHttpRequest();

// request will cycle through states
// once the request is complete, the JSON will be processed and converted to HTML elements
// if there was an error getting the data, the error message will be logged in the console

function processJSON(request) {
request.onreadystatechange = function(data) {
    if (request.readyState === 4) {
      if (request.status === 200) {
        var gallery = JSON.parse(request.responseText);
        var imagesElement = document.getElementById("images");
        var imagesHTML = '';
        for (var i=0; i < gallery.resources.length; i++ ) {
          imagesHTML += '<div>';
          imagesHTML += 'hello world';         
          imagesHTML += '</div>';
        }
        imagesElement.innerHTML = imagesHTML;      
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
  requestJSON(galleryURL);
};
