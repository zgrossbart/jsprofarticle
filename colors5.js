function makeColorSorter(frequency1, frequency2, frequency3,
                         phase1, phase2, phase3,
                         center, width, len) {

    var colors = "";
    for (var i = 0; i < len; ++i)
    {
       var red = Math.floor(Math.sin(frequency1 * i + phase1) * width + center);
       var green = Math.floor(Math.sin(frequency2 * i + phase2) * width + center);
       var blue = Math.floor(Math.sin(frequency3 * i + phase3) * width + center);
       
       colors += '<div class="colorBlock" style="background-color: rgb(' + 
           red + ',' + green + ',' + blue + ')"></div>';
       
    }
    
    $('#colors').append(colors);
}
 
function testColorSorter() {
    makeColorSorter(.05, .05, .05, 0, 2, 4, 128, 127, 121);
    
    $('#colors').sortable();
    $('#colors').disableSelection();
}
