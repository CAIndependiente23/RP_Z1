var size = 0;
var placement = 'point';

var style_callejeroetiqueta_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("''");
    var labelFont = "9.1px \'Montserrat Light\', sans-serif";
    var labelFill = "#787878";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 900.0;
    var placement = 'line';
    if (feature.get("nomoficial") !== null) {
        labelText = String(feature.get("nomoficial"));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth,
                              textAlign, offsetX, offsetY, overflow, repeat)
    })];;

    return style;
};
