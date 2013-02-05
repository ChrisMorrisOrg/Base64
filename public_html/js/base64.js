/*

  Base64
  ------
  Demo: http://base64.chrismorris.org
  Source: https://github.com/ChrisMorrisOrg/Base64

  Generate base64 data URL's for images and other files.

  Created by Chris Morris, 2013
    http://chrismorris.org
    chris@chrismorris.org
    @ChrisMorrisOrg


  This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Unported License.
  To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/.


*/


var urlElement = document.getElementById('url');
var imgurl = "";

var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', base64, false);

// Process the file
// Precondition: expects image files, but works with others too
function base64(file) {
    var reader = new FileReader();

    // After the image has been loaded...
    reader.onloadend = (
        function(e){
            imgurl = e.target.result;
            updateBackground();
        }
    );

    // Read the file
    reader.readAsDataURL(file.target.files[0]);
}

// Return the data to the user
function updateBackground(){
    // Set the backround to be the chosen image file
    document.body.style.background = "url(" + imgurl + ") no-repeat top center";
    document.body.style.backgroundSize = "cover";

    // Return the data URL
    urlElement.innerHTML = imgurl;

    // Select the text of the div containing the output data URL
    selectText(urlElement);
}

// Select the text of an element
function selectText(element){
    if(document.body.createTextRange){
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    }else if(window.getSelection){
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
