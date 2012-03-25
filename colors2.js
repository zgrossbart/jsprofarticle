function decimalToHex(d) {
    var hex = Number(d).toString(16);
    hex = "00".substr(0, 2 - hex.length) + hex; 
    
    console.log('converting ' + d + ' to ' + hex);
    return hex;
}

function makeColorSorter(frequency1, frequency2, frequency3,
                         phase1, phase2, phase3,
                         center, width, len) {

    for (var i = 0; i < len; ++i)
    {
       var red = Math.floor(Math.sin(frequency1*i + phase1) * width + center);
       var green = Math.floor(Math.sin(frequency2*i + phase2) * width + center);
       var blue = Math.floor(Math.sin(frequency3*i + phase3) * width + center);
       
       console.log('red: ' + decimalToHex(red));
       console.log('green: ' + decimalToHex(green));
       console.log('blue: ' + decimalToHex(blue));
       
       var div = $('<div class="colorBlock"></div>');
       div.css('background-color', '#' + decimalToHex(red) + decimalToHex(green) + decimalToHex(blue));
       $('#colors').append(div);
       
    }
}

function makeSortable() {
    $('#colors').sortable();
    $('#colors').disableSelection();
}

function testColorSorter() {
    makeColorSorter(.05,.05,.05,0,2,4, 128,127, 121);
    makeSortable();
}
