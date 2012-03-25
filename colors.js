 function decimalToHex(d) {
  var hex = Number(d).toString(16);
  hex = "00".substr(0, 2 - hex.length) + hex; 
  return hex;
}


 function makeColorGradient(frequency1, frequency2, frequency3,
                             phase1, phase2, phase3,
                             center, width, len)
  {
    if (len == undefined)      
        len = 50;
    if (center == undefined)   center = 128;
    if (width == undefined)    width = 127;

    var colors = "";
    for (var i = 0; i < len; ++i)
    {
       var red = Math.floor(Math.sin(frequency1*i + phase1) * width + center);
       var grn = Math.floor(Math.sin(frequency2*i + phase2) * width + center);
       var blu = Math.floor(Math.sin(frequency3*i + phase3) * width + center);
       //console.log('color: ' + decimalToHex(red) + ', ' + decimalToHex(grn) + ', ' + decimalToHex(blu));
       colors += '<div class="colorBlock" style="background-color: #' + decimalToHex(red) + decimalToHex(grn) + decimalToHex(blu) + '"></div>';
       //div.css('background-color', '#' + decimalToHex(red) + decimalToHex(grn) + decimalToHex(blu));
       //$('#colors').append(div);
       
       /*for (var j = 0; j < 100; j++) {
           console.log('hey there: ' + j);
       }*/
       
    }
    
    $('#colors').append(colors);
  }
 
function setupColors() {
    makeColorGradient(.05,.05,.05,0,2,4, 128,127, 121);
    
    $( "#colors" ).sortable({
        //placeholder: "ui-state-highlight"
    });
    $( "#colors" ).disableSelection();
}

$(document).ready(function() {
    //makeColorGradient(.3,.3,.3,0,2,4);
    
});