var globalClickBegin = -1;
var globalClickSingle = -1;
var globalClickEnd = -1;
var globalImageHeight = 50;
var globalImageBegin = "imageBegin";
var globalImageSingle = "imageSingle";
var globalImageEnd = "imageEnd";
var globalMoveImageIndex = "";

//debugger;     

$(function () {   
    for (var i = 0; i < 20; i++) {
        var x = 45 + (22 * i);
        var y = 200;
        var width = 16;
        var height = -10 - (7 * i);
        var outColor = '#6c0';
        var overColor = '#999999';
        var outStrokeStyle = '#c33';
        var outStokeWidth = 2;
        var overStrokeStyle = '#c66';
        var overStokeWidth = 2;
        drawRect(i, outColor, overColor, x, y, width, height, outStrokeStyle, outStokeWidth, overStrokeStyle, overStokeWidth);
    };

    drawImage(globalImageBegin, 'image/arrow1.png');
    drawImage(globalImageSingle, 'image/arrow2.png');
    drawImage(globalImageEnd, 'image/arrow3.png');
});

function drawRect(index, outColor, overColor, x, y, width, height, outStrokeStyle, outStokeWidth, overStrokeStyle, overStokeWidth) {
    $('canvas').drawRect({
        layer: true,
        fromCenter: false,
        fillStyle: outColor,
        strokeStyle: outStrokeStyle,
        strokeWidth: outStokeWidth,
        x: x, y: y,
        width: width, height: height,
        click: function (layer) {
            barClick(index, x, y, height);
        },
        mouseover: function (layer) {
            mouseoverChangeColor(layer, overColor, overStrokeStyle, x, y, height);
        },
        mouseout: function (layer) {
            mouseoverChangeColor(layer, outColor, outStrokeStyle);
        }
    });

    $('canvas').drawText({
        layer:true,
        fillStyle: 'white',       
        x: x+8, y: y-6,
        fontSize: 8,
        fontFamily: 'Verdana, sans-serif',
        text: 's1'
    });

    if (index == 5) {
        $('canvas').drawText({
            layer: true,
            fillStyle: 'white',
            x: x + 8, y: y - 30,
            fontSize: 8,
            fontFamily: 'Verdana, sans-serif',
            text: 'Pro',
            rotate: -90
        });
    }
}

function mouseoverChangeColor(layer, overcolor, overStrokeStyle) {
    $('canvas').setLayer(layer, {
        fillStyle: overcolor,
        strokeStyle: overStrokeStyle
    }).drawLayers(); 
}

function mouseoutChangeColor(layer, outColor, outStrokeStyle) {
    $('canvas').setLayer(layer, {
        fillStyle: outColor,
        strokeStyle: outStrokeStyle
    }).drawLayers();
}

function drawImage(name, imageName) {
    $('canvas').drawImage({
        layer: true,
        visible: false,
        name: name,
        source: imageName,
        x: 0, y: 0,
        width: 10,
        height: globalImageHeight,
        fromCenter: false
    });
}

function moveImage(imageName, x, y, height) {
    $('canvas').setLayer(imageName, {
        visible: true,
        x: x+2, y: -50 + y + height
    }).drawLayers();
}

function hideImage(imageName) {
    $('canvas').setLayer(imageName, {
        visible: false
    }).drawLayers();
}


function barClick(index, x, y, height) {
    if (globalClickBegin < 0) {
        globalClickBegin = index;
        moveImage(globalImageBegin, x, y, height);
    } else if (index == globalClickBegin) {
        if (globalClickEnd < 0 && globalClickSingle < 0) {
            globalClickSingle = index;
            moveImage(globalImageSingle, x, y, height);
        } else {
            globalClickBegin = index;
            moveImage(globalImageBegin, x, y, height);
            initImageBegin();
            
        }
    } else if (index < globalClickBegin) {
        globalClickBegin = index;
        moveImage(globalImageBegin, x, y, height);
        initImageBegin();
    } else {
        if (globalClickEnd < 0 && globalClickSingle < 0) {
            globalClickEnd = index;
            moveImage(globalImageEnd, x, y, height);
        } else {
            globalClickBegin = index;
            moveImage(globalImageBegin, x, y, height);
            initImageBegin();
        }
    }
}

function initImageBegin() {
    globalClickSingle = -1;
    globalClickEnd = -1;
    hideImage(globalImageSingle);
    hideImage(globalImageEnd);
}
